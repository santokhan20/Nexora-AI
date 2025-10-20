import { getServerSession } from 'next-auth'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Real Groq implementation - PROVEN WORKING
async function getGroqChatCompletion(messages) {
  try {
    const Groq = (await import('groq-sdk')).default;
    const groq = new Groq({
      apiKey: process.env.GROQ_API_KEY
    });

    const completion = await groq.chat.completions.create({
      messages: messages,
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 1024,
      stream: false
    });
    
    return completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";
    
  } catch (error) {
    console.error('Groq API error:', error);
    return "I'm currently experiencing technical difficulties. Please try again in a moment.";
  }
}

// Simple database functions
async function checkUserLimit(userId) {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  });
  
  if (!user) return false;
  
  // Free users: 20 messages per day
  if (!user.isPremium) {
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    if (user.lastResetAt < oneDayAgo) {
      // Reset counter
      await prisma.user.update({
        where: { id: userId },
        data: {
          messageCount: 0,
          lastResetAt: new Date()
        }
      });
      return true;
    }
    return user.messageCount < 20;
  }
  
  return true; // Premium users have no limits
}

async function updateUserUsage(userId) {
  return await prisma.user.update({
    where: { id: userId },
    data: {
      messageCount: { increment: 1 }
    }
  });
}

export async function POST(req) {
  try {
    const session = await getServerSession();
    
    if (!session) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    }

    const { message, conversationId } = await req.json();
    const userEmail = session.user.email;

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { email: userEmail }
    });

    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
    }

    const canProceed = await checkUserLimit(user.id);
    if (!canProceed) {
      return new Response(JSON.stringify({ 
        error: 'Daily message limit reached. Upgrade to premium for unlimited access.' 
      }), { status: 429 });
    }

    let currentConversationId = conversationId;
    let conversationTitle = message.substring(0, 50) + (message.length > 50 ? '...' : '');

    // Create new conversation if doesn't exist
    if (!currentConversationId) {
      const newConversation = await prisma.conversation.create({
        data: {
          title: conversationTitle,
          userId: user.id,
        }
      });
      currentConversationId = newConversation.id;
    } else {
      // Update conversation title if it's the first message
      const existingConversation = await prisma.conversation.findUnique({
        where: { id: currentConversationId },
        include: { messages: true }
      });
      
      if (existingConversation && existingConversation.messages.length === 0) {
        await prisma.conversation.update({
          where: { id: currentConversationId },
          data: { title: conversationTitle }
        });
      }
    }

    // Save user message
    await prisma.message.create({
      data: {
        role: 'user',
        content: message,
        conversationId: currentConversationId,
      }
    });

    // Get conversation history for context (last 10 messages)
    const conversationHistory = await prisma.message.findMany({
      where: { conversationId: currentConversationId },
      orderBy: { createdAt: 'asc' },
      take: 10
    });

    // Prepare messages for AI - include conversation history
    const messagesForAI = [
      { role: 'system', content: 'You are Nexora AI, a helpful and friendly AI assistant. Provide concise, helpful responses. Be engaging and conversational.' }
    ];

    // Add conversation history
    conversationHistory.forEach(msg => {
      messagesForAI.push({
        role: msg.role,
        content: msg.content
      });
    });

    // Get AI response from Groq
    const aiResponse = await getGroqChatCompletion(messagesForAI);

    // Save AI response
    await prisma.message.create({
      data: {
        role: 'assistant',
        content: aiResponse,
        conversationId: currentConversationId,
      }
    });

    // Update user usage
    await updateUserUsage(user.id);

    return new Response(JSON.stringify({
      reply: aiResponse,
      conversationId: currentConversationId
    }), { status: 200 });

  } catch (error) {
    console.error('Chat API error:', error);
    return new Response(JSON.stringify({ 
      error: 'Internal server error: ' + error.message 
    }), { status: 500 });
  }
}
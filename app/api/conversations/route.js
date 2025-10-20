import { getServerSession } from 'next-auth'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req) {
  try {
    const session = await getServerSession()
    
    if (!session) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
    }

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 })
    }

    // Get user's conversations
    const conversations = await prisma.conversation.findMany({
      where: { userId: user.id },
      orderBy: { updatedAt: 'desc' },
      include: {
        messages: {
          orderBy: { createdAt: 'asc' },
          take: 1 // Just to verify there are messages
        }
      }
    })

    // Format conversations for the frontend
    const formattedConversations = conversations.map(conv => ({
      id: conv.id,
      title: conv.title,
      date: conv.updatedAt.toISOString().split('T')[0],
      messageCount: conv.messages.length
    }))

    return new Response(JSON.stringify(formattedConversations), { status: 200 })

  } catch (error) {
    console.error('Conversations API error:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 })
  }
}
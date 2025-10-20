import Groq from 'groq-sdk'

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
})

export async function getGroqChatCompletion(messages) {
  try {
    const completion = await groq.chat.completions.create({
      messages: messages,
      model: "llama3-8b-8192", // Fast model from Groq
      temperature: 0.7,
      max_tokens: 1024,
      stream: false
    })
    
    return completion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response."
  } catch (error) {
    console.error('Groq API error:', error)
    throw new Error('Failed to get AI response')
  }
}
import { getServerSession } from 'next-auth'
import { PrismaClient } from '@prisma/client'
import GoogleProvider from 'next-auth/providers/google'

const prisma = new PrismaClient()

// Define authOptions directly here to avoid import issues
const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return new Response(JSON.stringify({ error: 'Not authenticated' }), { 
        status: 401 
      })
    }

    console.log('🔍 Fetching user data for:', session.user.email)
    
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        role: true,
        isPremium: true,
        messageCount: true
      }
    })

    console.log('📋 User data from DB:', user)

    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), { 
        status: 404 
      })
    }

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  } catch (error) {
    console.error('User API error:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), { 
      status: 500 
    })
  }
}
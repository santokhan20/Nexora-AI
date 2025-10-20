import { getServerSession } from 'next-auth'
import { authOptions } from '../[...nextauth]/route'

export async function GET() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    return new Response(JSON.stringify({ valid: false }), { 
      status: 401,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  return new Response(JSON.stringify({ 
    valid: true,
    user: {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      isPremium: session.user.isPremium,
    }
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
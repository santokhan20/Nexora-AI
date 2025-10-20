import { getServerSession } from 'next-auth'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req) {
  try {
    const session = await getServerSession()
    
    if (!session) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
    }

    const formData = await req.formData()
    const bkashNumber = formData.get('bkashNumber')
    const transactionId = formData.get('transactionId')
    const amount = formData.get('amount')
    const screenshot = formData.get('screenshot')

    // Check for existing pending request
    const existingRequest = await prisma.paymentRequest.findFirst({
      where: {
        userId: session.user.id,
        status: 'pending'
      }
    })

    if (existingRequest) {
      return new Response(JSON.stringify({ error: 'You already have a pending payment request' }), { status: 400 })
    }

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user) {
      return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 })
    }

    // Create payment request
    const paymentRequest = await prisma.paymentRequest.create({
      data: {
        userId: user.id,
        bkashNumber,
        transactionId,
        amount,
        status: 'pending',
        screenshot: screenshot ? screenshot.name : null
      }
    })

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Payment request submitted successfully' 
    }), { status: 200 })

  } catch (error) {
    console.error('Payment request error:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 })
  }
}
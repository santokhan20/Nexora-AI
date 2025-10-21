import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions)
    
    // Check if user is admin
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email }
    })

    if (!user || user.role !== 'admin') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
    }

    const paymentRequests = await prisma.paymentRequest.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
            isPremium: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return new Response(JSON.stringify(paymentRequests), { status: 200 })

  } catch (error) {
    console.error('Admin payments error:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 })
  }
}

export async function PUT(req) {
  try {
    const session = await getServerSession(authOptions)
    
    // Check if user is admin
    const user = await prisma.user.findUnique({
      where: { email: session?.user?.email }
    })

    if (!user || user.role !== 'admin') {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
    }

    const { paymentId, status } = await req.json()

    // Update payment request status
    const paymentRequest = await prisma.paymentRequest.update({
      where: { id: paymentId },
      data: { status },
      include: { user: true }
    })

    // If approved, upgrade user to premium
    if (status === 'approved') {
      await prisma.user.update({
        where: { id: paymentRequest.userId },
        data: { isPremium: true }
      })
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 })

  } catch (error) {
    console.error('Admin update error:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 })
  }
}
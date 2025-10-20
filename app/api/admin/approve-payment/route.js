import { getServerSession } from 'next-auth'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function POST(req) {
  try {
    const session = await getServerSession()
    
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if user is admin
    const adminUser = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!adminUser || adminUser.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await req.formData()
    const paymentId = formData.get('paymentId')

    if (!paymentId) {
      return NextResponse.json({ error: 'Payment ID required' }, { status: 400 })
    }

    // Update payment request status
    const paymentRequest = await prisma.paymentRequest.update({
      where: { id: paymentId },
      data: { status: 'approved' },
      include: { user: true }
    })

    // Upgrade user to premium
    await prisma.user.update({
      where: { id: paymentRequest.userId },
      data: { isPremium: true }
    })

    // Redirect back to admin page
    return NextResponse.redirect(new URL('/admin', req.url))
  } catch (error) {
    console.error('Approve payment error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
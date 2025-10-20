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
    const user = await prisma.user.findUnique({
      where: { email: session.user.email }
    })

    if (!user || user.role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await req.formData()
    const paymentId = formData.get('paymentId')

    if (!paymentId) {
      return NextResponse.json({ error: 'Payment ID required' }, { status: 400 })
    }

    // Update payment request status
    await prisma.paymentRequest.update({
      where: { id: paymentId },
      data: { status: 'rejected' }
    })

    // Redirect back to admin page
    return NextResponse.redirect(new URL('/admin', req.url))
  } catch (error) {
    console.error('Reject payment error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
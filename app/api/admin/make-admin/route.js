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
    const userId = formData.get('userId')

    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 400 })
    }

    // Make user admin
    await prisma.user.update({
      where: { id: userId },
      data: { role: 'admin' }
    })

    // Redirect back to admin page
    return NextResponse.redirect(new URL('/admin', req.url))
  } catch (error) {
    console.error('Make admin error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
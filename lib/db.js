import { prisma } from '../prisma/client'

export async function getUserByEmail(email) {
  return await prisma.user.findUnique({
    where: { email }
  })
}

export async function createUser(userData) {
  return await prisma.user.create({
    data: userData
  })
}

export async function updateUserUsage(userId) {
  return await prisma.user.update({
    where: { id: userId },
    data: {
      messageCount: { increment: 1 }
    }
  })
}

export async function checkUserLimit(userId) {
  const user = await prisma.user.findUnique({
    where: { id: userId }
  })
  
  if (!user) return false
  
  // Free users: 20 messages per day
  if (!user.isPremium) {
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000)
    if (user.lastResetAt < oneDayAgo) {
      // Reset counter
      await prisma.user.update({
        where: { id: userId },
        data: {
          messageCount: 0,
          lastResetAt: new Date()
        }
      })
      return true
    }
    return user.messageCount < 20
  }
  
  return true // Premium users have no limits
}

// Create admin user on startup
export async function createAdminUser() {
  const adminEmail = 'admin@example.com' // Change this to your email
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail }
  })

  if (!existingAdmin) {
    await prisma.user.create({
      data: {
        email: adminEmail,
        name: 'Admin',
        role: 'admin',
        isPremium: true
      }
    })
    console.log('Admin user created')
  }
}
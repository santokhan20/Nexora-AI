// lib/auth.js
import GoogleProvider from 'next-auth/providers/google'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email }
        })

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              image: user.image,
              role: 'user',
              isPremium: false,
              messageCount: 0,
            }
          })
        } else {
          await prisma.user.update({
            where: { email: user.email },
            data: {
              name: user.name,
              image: user.image,
            }
          })
        }
        return true
      } catch (error) {
        console.error('Sign in error:', error)
        return false
      }
    },
    async session({ session, token }) {
      try {
        const dbUser = await prisma.user.findUnique({
          where: { email: session.user.email },
          select: {
            id: true,
            name: true,
            email: true,
            image: true,
            role: true,
            isPremium: true,
            messageCount: true,
          }
        })
        
        if (dbUser) {
          return {
            ...session,
            user: dbUser
          }
        }
        
        return session
      } catch (error) {
        console.error('Session error:', error)
        return session
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
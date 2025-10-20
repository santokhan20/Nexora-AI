// lib/auth-config.js
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
        console.log('🔄 Signing in user:', user.email)
        
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email }
        })

        if (!existingUser) {
          console.log('✅ Creating new user')
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
          console.log('✅ Updating existing user')
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
        console.error('❌ Sign in error:', error)
        return false
      }
    },
    async session({ session, token }) {
      try {
        console.log('🔄 Session callback started for:', session.user.email)
        
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
            createdAt: true,
            updatedAt: true
          }
        })
        
        console.log('📋 Database user found:', dbUser ? 'Yes' : 'No')
        
        if (dbUser) {
          console.log('✅ Adding database data to session')
          return {
            ...session,
            user: {
              id: dbUser.id,
              name: dbUser.name,
              email: dbUser.email,
              image: dbUser.image,
              role: dbUser.role,
              isPremium: dbUser.isPremium,
              messageCount: dbUser.messageCount
            }
          }
        }
        
        console.log('❌ No database user found')
        return session
      } catch (error) {
        console.error('💥 Session callback error:', error)
        return session
      }
    },
    async jwt({ token, user, account, profile }) {
      if (user) {
        token.id = user.id
        token.role = user.role
        token.isPremium = user.isPremium
      }
      return token
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/signin',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
}
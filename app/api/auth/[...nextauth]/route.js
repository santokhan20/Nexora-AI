import NextAuth from 'next-auth'
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
    
    async jwt({ token, user }) {
      // Initial sign in
      if (user) {
        token.id = user.id
        token.role = user.role
        token.isPremium = user.isPremium
      }
      return token
    },
    
    async session({ session, token }) {
      try {
        // Get user data from database
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
          // Return complete session with user data
          return {
            ...session,
            user: {
              ...session.user,
              id: dbUser.id,
              role: dbUser.role,
              isPremium: dbUser.isPremium,
              messageCount: dbUser.messageCount
            }
          }
        }
        
        return session
      } catch (error) {
        console.error('Session callback error:', error)
        return session
      }
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/signin',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
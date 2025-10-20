'use client'
import { useSession, signOut } from 'next-auth/react'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function SessionHandler() {
  const { data: session } = useSession()
  const router = useRouter()
  const pathname = usePathname()
  const inactivityTimer = useRef(null)

  const resetInactivityTimer = () => {
    // Clear existing timer
    if (inactivityTimer.current) {
      clearTimeout(inactivityTimer.current)
    }

    // Set new timer for 5 minutes
    inactivityTimer.current = setTimeout(() => {
      if (session) {
        console.log('5 minutes of inactivity - signing out')
        signOut({ callbackUrl: '/auth/signin?message=Inactivity' })
      }
    }, 5 * 60 * 1000) // 5 minutes
  }

  useEffect(() => {
    // Redirect logged-in users from home page to chat
    if (session && pathname === '/') {
      router.push('/chat')
    }

    if (session) {
      // Set up activity listeners
      const activities = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart']
      
      activities.forEach(activity => {
        document.addEventListener(activity, resetInactivityTimer, { passive: true })
      })

      // Start the initial timer
      resetInactivityTimer()

      // Cleanup function
      return () => {
        activities.forEach(activity => {
          document.removeEventListener(activity, resetInactivityTimer)
        })
        if (inactivityTimer.current) {
          clearTimeout(inactivityTimer.current)
        }
      }
    }
  }, [session, pathname, router])

  return null
}
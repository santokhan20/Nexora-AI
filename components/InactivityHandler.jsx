'use client'
import { signOut } from 'next-auth/react'
import { useEffect, useRef } from 'react'

export default function InactivityHandler() {
  const inactivityTimer = useRef(null)

  const resetInactivityTimer = () => {
    // Clear existing timer
    if (inactivityTimer.current) {
      clearTimeout(inactivityTimer.current)
    }

    // Set new timer for 5 minutes
    inactivityTimer.current = setTimeout(() => {
      console.log('5 minutes of inactivity - signing out')
      signOut({ callbackUrl: '/auth/signin?message=Inactivity' })
    }, 5 * 60 * 1000) // 5 minutes
  }

  useEffect(() => {
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
  }, [])

  return null
}
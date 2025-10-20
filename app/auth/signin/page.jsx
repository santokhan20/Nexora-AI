'use client'
import { signIn, getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function SignIn() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Check URL for session messages
    const messageParam = searchParams.get('message')
    if (messageParam === 'SessionTimeout') {
      setMessage('Your session has ended due to inactivity. Please sign in again.')
    } else if (messageParam === 'SessionExpired') {
      setMessage('Your session has expired. Please sign in again.')
    } else if (messageParam === 'Inactivity') {
      setMessage('You were signed out due to 5 minutes of inactivity.')
    }

    // Check if user is already signed in and redirect to chat
    getSession().then(session => {
      if (session) {
        router.push('/chat')
      }
    })
  }, [router, searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">N</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome to Nexora AI</h1>
          <p className="text-gray-400">Sign in to start chatting with AI</p>
        </div>

        {message && (
          <div className="mb-4 p-3 bg-yellow-600 rounded-lg text-white text-sm">
            {message}
          </div>
        )}

        <button
          onClick={() => signIn('google', { callbackUrl: '/chat' })}
          className="w-full flex items-center justify-center gap-3 bg-white text-gray-900 rounded-lg py-3 px-4 font-medium hover:bg-gray-100 transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign in with Google
        </button>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Session timeout: 5 minutes of inactivity
          </p>
          <p className="text-gray-400 text-xs mt-1">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  )
}
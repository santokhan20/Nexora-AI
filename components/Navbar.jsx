'use client'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [isAdmin, setIsAdmin] = useState(false)
  const [hasCheckedAdmin, setHasCheckedAdmin] = useState(false)

  // Check admin status only once
  useEffect(() => {
    const checkAdmin = async () => {
      if (session?.user?.email && !hasCheckedAdmin) {
        try {
          const response = await fetch('/api/user/me')
          if (response.ok) {
            const userData = await response.json()
            console.log('🔍 User data from API:', userData)
            setIsAdmin(userData.role === 'admin')
            setHasCheckedAdmin(true) // Mark as checked to prevent future calls
          }
        } catch (error) {
          console.error('Error checking admin:', error)
          setHasCheckedAdmin(true) // Even on error, mark as checked
        }
      }
    }

    checkAdmin()
  }, [session, hasCheckedAdmin])

  // Use session role if available, otherwise use API check
  const sessionIsAdmin = session?.user?.role === 'admin'
  const finalIsAdmin = sessionIsAdmin || isAdmin

  if (status === 'loading') {
    return (
      <nav className="border-b border-gray-800 p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            <span className="text-xl font-bold">Nexora AI</span>
          </div>
          <div className="text-sm text-gray-400">Loading...</div>
        </div>
      </nav>
    )
  }

  const user = session?.user

  return (
    <nav className="border-b border-gray-800 p-4">
      {/* Remove debug info for clean look */}
      {/* <div className="text-xs bg-red-900 text-red-200 p-2 rounded mb-2 text-center">
        Session Role: {user?.role || 'none'} | API Check: {isAdmin ? 'ADMIN' : 'NOT ADMIN'} | Show Button: {finalIsAdmin ? 'YES 👑' : 'NO'}
      </div> */}

      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            <span className="text-xl font-bold">Nexora AI</span>
          </div>
          
          <div className="flex space-x-2">
            <button 
              onClick={() => router.push('/chat')}
              className="px-3 py-2 text-gray-400 hover:text-white transition-colors"
            >
              Chat
            </button>
            
            {/* Admin Panel Button - Only for admins */}
            {finalIsAdmin && (
              <button 
                onClick={() => router.push('/admin')}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg text-sm hover:from-purple-700 hover:to-pink-700 transition-all font-semibold shadow-lg"
              >
                👑 Admin Panel
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-3">
              {user.image ? (
                <img 
                  src={user.image} 
                  alt={user.name}
                  className="w-8 h-8 rounded-full border-2 border-green-500"
                />
              ) : (
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {user.name?.charAt(0) || 'U'}
                </div>
              )}
              
              <div className="text-right">
                <div className="text-sm font-medium">{user.name}</div>
                <div className="text-xs text-gray-400">
                  {finalIsAdmin ? '👑 Admin' : 'User'}
                  {user.isPremium && ' ⭐ Premium'}
                </div>
              </div>
              
              <button 
                onClick={() => signOut()}
                className="px-3 py-1 text-sm border border-gray-600 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <a 
              href="/auth/signin"
              className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign In
            </a>
          )}
        </div>
      </div>
    </nav>
  )
}
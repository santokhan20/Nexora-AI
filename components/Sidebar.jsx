'use client'
import { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import SupportModal from './SupportModal'
import PaymentModal from './PaymentModal'
import Image from 'next/image'  // ← ADD THIS IMPORT

export default function Sidebar() {
  const [conversations, setConversations] = useState([])
  const [showSupport, setShowSupport] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [showAccountMenu, setShowAccountMenu] = useState(false)
  const { data: session } = useSession()

  const user = session?.user
  const isPremium = user?.isPremium || false
  const isAdmin = user?.role === 'admin'

  const startNewChat = () => {
    setConversations([])
    console.log('Starting new chat...')
    window.location.reload()
  }

  const handleSignOut = () => {
    signOut()
    setShowAccountMenu(false)
  }

  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col h-screen">
      {/* Header Section with Logo */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* REPLACED THE "N" WITH LOGO */}
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
              <Image 
                src="/NexoraAi.png" 
                alt="Nexora AI" 
                width={40} 
                height={40}
                className="rounded-xl"
              />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Nexora AI</h1>
              <p className="text-xs text-gray-400">Ask whatever you want</p>
            </div>
          </div>

          {/* Account Menu - TOP RIGHT CORNER */}
          <div className="relative">
            <button 
              onClick={() => setShowAccountMenu(!showAccountMenu)}
              className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors p-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
            
            {/* Account Dropdown Menu */}
            {showAccountMenu && (
              <div className="absolute right-0 top-10 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-10">
                <button 
                  onClick={() => alert('Settings coming soon!')}
                  className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 transition-colors flex items-center space-x-2"
                >
                  <span>⚙️</span>
                  <span>Settings</span>
                </button>
                <button 
                  onClick={handleSignOut}
                  className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-gray-700 transition-colors flex items-center space-x-2"
                >
                  <span>🚪</span>
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Account Info - Clean Version */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          {/* Fixed Google Profile Picture */}
          <div className="relative">
            {user?.image ? (
              <img 
                src={user.image} 
                alt={user.name}
                className="w-12 h-12 rounded-full border-2 border-green-500 object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
            ) : null}
            <div 
              className={`w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold border-2 border-green-400 ${user?.image ? 'hidden' : 'flex'}`}
            >
              {user?.name?.charAt(0)?.toUpperCase() || 'U'}
            </div>
          </div>
          
          <div className="flex-1">
            <p className="text-sm font-semibold text-white">{user?.name || 'User'}</p>
            <div className="flex items-center space-x-2">
              <span className={`text-xs px-2 py-1 rounded-full ${
                isAdmin 
                  ? 'bg-purple-600 text-white' 
                  : isPremium 
                  ? 'bg-yellow-600 text-white' 
                  : 'bg-gray-600 text-gray-300'
              }`}>
                {isAdmin ? '👑 ADMIN' : isPremium ? '⭐ PREMIUM' : '🆓 FREE'}
              </span>
              
              {/* Upgrade Button in Account Section */}
              {!isPremium && !isAdmin && (
                <button 
                  onClick={() => setShowPayment(true)}
                  className="text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-colors font-medium"
                >
                  Upgrade
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* New Chat Button */}
      <div className="p-4">
        <button
          onClick={startNewChat}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl transition-colors flex items-center justify-center space-x-2 font-semibold shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>+ New Chat</span>
        </button>
      </div>

      {/* Chat History - Scrollable Only This Section */}
      <div className="flex-1 overflow-y-auto px-2">
        <div className="p-2">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Recent Chats</h3>
          <div className="space-y-1">
            {conversations.length === 0 ? (
              <p className="text-gray-500 text-sm p-3 text-center border border-gray-700 rounded-lg bg-gray-800/50">
                No conversations yet
              </p>
            ) : (
              conversations.map((conv, index) => (
                <button 
                  key={index} 
                  className="w-full text-left p-3 text-sm text-gray-300 hover:bg-gray-800 rounded-lg transition-colors truncate border border-gray-700"
                >
                  Chat {index + 1}
                </button>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Bottom Menu */}
      <div className="p-4 border-t border-gray-800 space-y-2">
        {/* Upgrade to Premium - Only show if not premium */}
        {!isPremium && !isAdmin && (
          <button 
            onClick={() => setShowPayment(true)}
            className="w-full text-left p-3 text-sm text-white rounded-lg transition-colors flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 shadow-lg"
          >
            <span>⭐</span>
            <span>Upgrade to Premium</span>
          </button>
        )}

        {/* Contact Support */}
        <button 
          onClick={() => setShowSupport(true)}
          className="w-full text-left p-3 text-sm text-gray-300 hover:bg-gray-800 rounded-lg transition-colors flex items-center space-x-2 border border-gray-700"
        >
          <span>📞</span>
          <span>Contact Support</span>
        </button>
      </div>

      {/* Render Modals */}
      {showSupport && (
        <SupportModal onClose={() => setShowSupport(false)} />
      )}
      
      {showPayment && (
        <PaymentModal onClose={() => setShowPayment(false)} />
      )}
    </div>
  )
}
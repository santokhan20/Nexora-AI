import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import ChatInterface from '../../components/ChatBox'
import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import InactivityHandler from '../../components/InactivityHandler'

const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
}

export default async function ChatPage() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    redirect('/auth/signin')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar user={session.user} />
        <InactivityHandler />
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                Nexora AI
              </h1>
              <p className="text-gray-400">How can I help you today?</p>
            </div>
            <ChatInterface />
          </div>
        </div>
      </div>
    </div>
  )
}
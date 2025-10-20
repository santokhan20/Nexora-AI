import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession()

  // If user is logged in, redirect to chat
  if (session) {
    redirect('/chat')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
          <span className="text-xl font-bold">Nexora</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/auth/signin" className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
            Sign In
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Think Smarter with AI
        </h1>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Experience lightning-fast AI conversations powered by Groq. 
          Chat, create, and collaborate with the most advanced language models.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link href="/auth/signin" className="px-8 py-4 bg-blue-600 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started Free
          </Link>
          <button className="px-8 py-4 border border-gray-600 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-colors">
            Learn More
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="p-6 bg-gray-800/50 rounded-xl">
            <div className="w-12 h-12 bg-blue-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">Groq-powered responses in milliseconds</p>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl">
            <div className="w-12 h-12 bg-green-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Smart AI</h3>
            <p className="text-gray-400">Advanced language models for intelligent conversations</p>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl">
            <div className="w-12 h-12 bg-purple-500 rounded-lg mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Always Available</h3>
            <p className="text-gray-400">24/7 access to your AI assistant</p>
          </div>
        </div>
      </div>
    </main>
  )
}
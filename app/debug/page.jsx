import { getServerSession } from 'next-auth'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function DebugPage() {
  const session = await getServerSession()
  
  let dbUser = null
  if (session?.user?.email) {
    dbUser = await prisma.user.findUnique({
      where: { email: session.user.email }
    })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-2xl font-bold mb-6">Debug Information</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Session Data */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">Session Data</h2>
          <pre className="text-sm bg-gray-700 p-3 rounded overflow-auto">
            {JSON.stringify(session, null, 2)}
          </pre>
        </div>

        {/* Database Data */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">Database Data</h2>
          <pre className="text-sm bg-gray-700 p-3 rounded overflow-auto">
            {JSON.stringify(dbUser, null, 2)}
          </pre>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>
        <div className="flex space-x-4">
          <a href="/admin" className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700">
            Go to Admin Panel
          </a>
          <a href="/chat" className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">
            Go to Chat
          </a>
        </div>
      </div>
    </div>
  )
}
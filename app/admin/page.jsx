import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { PrismaClient } from '@prisma/client'
import Link from 'next/link'

const prisma = new PrismaClient()

export default async function AdminPage() {
  const session = await getServerSession()
  
  if (!session) {
    redirect('/auth/signin')
  }

  // Check if user is admin
  const user = await prisma.user.findUnique({
    where: { email: session.user.email }
  })

  if (!user || user.role !== 'admin') {
    redirect('/chat')
  }

  // Get all payment requests
  const paymentRequests = await prisma.paymentRequest.findMany({
    include: {
      user: {
        select: {
          name: true,
          email: true,
          isPremium: true
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  // Get all users
  const users = await prisma.user.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    select: {
      id: true,
      name: true,
      email: true,
      isPremium: true,
      role: true,
      messageCount: true,
      createdAt: true,
      _count: {
        select: {
          conversations: true,
          paymentRequests: true
        }
      }
    }
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto p-6">
        {/* Header with Back Button */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">👑 Admin Panel</h1>
            <p className="text-gray-400">Manage users and premium subscriptions</p>
          </div>
          <Link 
            href="/chat"
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Chat</span>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-600 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Total Users</h3>
            <p className="text-2xl font-bold">{users.length}</p>
          </div>
          <div className="bg-green-600 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Premium Users</h3>
            <p className="text-2xl font-bold">{users.filter(u => u.isPremium).length}</p>
          </div>
          <div className="bg-purple-600 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Pending Payments</h3>
            <p className="text-2xl font-bold">{paymentRequests.filter(p => p.status === 'pending').length}</p>
          </div>
          <div className="bg-yellow-600 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Admins</h3>
            <p className="text-2xl font-bold">{users.filter(u => u.role === 'admin').length}</p>
          </div>
        </div>

        {/* Users Section */}
        <div className="bg-gray-800 rounded-lg overflow-hidden mb-8">
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Users Management</h2>
              <p className="text-gray-400 text-sm">Manage all registered users and premium status</p>
            </div>
            <span className="bg-blue-500 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
              {users.length} users
            </span>
          </div>

          {users.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              No users found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-4 text-gray-300">User</th>
                    <th className="text-left p-4 text-gray-300">Status</th>
                    <th className="text-left p-4 text-gray-300">Role</th>
                    <th className="text-left p-4 text-gray-300">Messages</th>
                    <th className="text-left p-4 text-gray-300">Conversations</th>
                    <th className="text-left p-4 text-gray-300">Joined</th>
                    <th className="text-left p-4 text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-gray-700 hover:bg-gray-750 transition-colors">
                      <td className="p-4">
                        <div>
                          <p className="text-white font-medium">{user.name || 'No Name'}</p>
                          <p className="text-gray-400 text-sm">{user.email}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.isPremium ? 'bg-purple-500 text-purple-900' : 'bg-gray-500 text-gray-900'
                        }`}>
                          {user.isPremium ? '⭐ Premium' : 'Free'}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          user.role === 'admin' ? 'bg-red-500 text-red-900' : 'bg-blue-500 text-blue-900'
                        }`}>
                          {user.role}
                        </span>
                      </td>
                      <td className="p-4 text-gray-300">{user.messageCount}</td>
                      <td className="p-4 text-gray-300">{user._count.conversations}</td>
                      <td className="p-4 text-gray-400 text-sm">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          {!user.isPremium ? (
                            <form action="/api/admin/give-premium" method="POST">
                              <input type="hidden" name="userId" value={user.id} />
                              <button 
                                type="submit"
                                className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors"
                                title="Give Premium Access"
                              >
                                Give Premium
                              </button>
                            </form>
                          ) : (
                            <form action="/api/admin/remove-premium" method="POST">
                              <input type="hidden" name="userId" value={user.id} />
                              <button 
                                type="submit"
                                className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors"
                                title="Remove Premium Access"
                              >
                                Remove Premium
                              </button>
                            </form>
                          )}
                          
                          {user.role !== 'admin' && (
                            <form action="/api/admin/make-admin" method="POST">
                              <input type="hidden" name="userId" value={user.id} />
                              <button 
                                type="submit"
                                className="px-3 py-1 bg-yellow-600 text-white rounded text-sm hover:bg-yellow-700 transition-colors"
                                title="Make Admin"
                              >
                                Make Admin
                              </button>
                            </form>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Payment Requests Section */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Payment Requests</h2>
              <p className="text-gray-400 text-sm">Approve or reject premium upgrade requests</p>
            </div>
            <span className="bg-purple-500 text-purple-900 px-3 py-1 rounded-full text-sm font-medium">
              {paymentRequests.length} requests
            </span>
          </div>

          {paymentRequests.length === 0 ? (
            <div className="p-8 text-center text-gray-400">
              No payment requests found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-4 text-gray-300">User</th>
                    <th className="text-left p-4 text-gray-300">bKash Number</th>
                    <th className="text-left p-4 text-gray-300">Transaction ID</th>
                    <th className="text-left p-4 text-gray-300">Amount</th>
                    <th className="text-left p-4 text-gray-300">Status</th>
                    <th className="text-left p-4 text-gray-300">Date</th>
                    <th className="text-left p-4 text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentRequests.map((request) => (
                    <tr key={request.id} className="border-b border-gray-700 hover:bg-gray-750 transition-colors">
                      <td className="p-4">
                        <div>
                          <p className="text-white font-medium">{request.user.name || 'No Name'}</p>
                          <p className="text-gray-400 text-sm">{request.user.email}</p>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            request.user.isPremium ? 'bg-purple-500 text-purple-900' : 'bg-gray-500 text-gray-900'
                          }`}>
                            {request.user.isPremium ? 'Premium' : 'Free'}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-white font-mono">{request.bkashNumber}</td>
                      <td className="p-4 text-white font-mono text-sm">{request.transactionId}</td>
                      <td className="p-4 text-green-400 font-semibold">{request.amount} BDT</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          request.status === 'pending' ? 'bg-yellow-500 text-yellow-900' :
                          request.status === 'approved' ? 'bg-green-500 text-green-900' :
                          'bg-red-500 text-red-900'
                        }`}>
                          {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                        </span>
                      </td>
                      <td className="p-4 text-gray-400 text-sm">
                        {new Date(request.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4">
                        {request.status === 'pending' && (
                          <div className="flex space-x-2">
                            <form action="/api/admin/approve-payment" method="POST">
                              <input type="hidden" name="paymentId" value={request.id} />
                              <button 
                                type="submit"
                                className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors"
                              >
                                Approve
                              </button>
                            </form>
                            <form action="/api/admin/reject-payment" method="POST">
                              <input type="hidden" name="paymentId" value={request.id} />
                              <button 
                                type="submit"
                                className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors"
                              >
                                Reject
                              </button>
                            </form>
                          </div>
                        )}
                        {request.status !== 'pending' && (
                          <span className="text-gray-400 text-sm">Completed</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
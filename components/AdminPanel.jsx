'use client'
import { useState, useEffect } from 'react'

export default function AdminPanel() {
  const [paymentRequests, setPaymentRequests] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPaymentRequests()
  }, [])

  const fetchPaymentRequests = async () => {
    try {
      const response = await fetch('/api/admin/payments')
      const data = await response.json()
      setPaymentRequests(data)
    } catch (error) {
      console.error('Error fetching payment requests:', error)
    } finally {
      setLoading(false)
    }
  }

  const updatePaymentStatus = async (paymentId, status) => {
    try {
      const response = await fetch('/api/admin/payments', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentId,
          status,
        }),
      })

      if (response.ok) {
        alert(`Payment ${status} successfully!`)
        fetchPaymentRequests() // Refresh the list
      } else {
        alert('Error updating payment status')
      }
    } catch (error) {
      alert('Error updating payment status')
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">Admin Panel - Payment Requests</h1>
      
      <div className="bg-gray-800 rounded-lg overflow-hidden">
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
              <tr key={request.id} className="border-b border-gray-700">
                <td className="p-4">
                  <div>
                    <p className="text-white font-medium">{request.user.name}</p>
                    <p className="text-gray-400 text-sm">{request.user.email}</p>
                  </div>
                </td>
                <td className="p-4 text-white">{request.bkashNumber}</td>
                <td className="p-4 text-white font-mono">{request.transactionId}</td>
                <td className="p-4 text-green-400">{request.amount} BDT</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    request.status === 'pending' ? 'bg-yellow-500 text-yellow-900' :
                    request.status === 'approved' ? 'bg-green-500 text-green-900' :
                    'bg-red-500 text-red-900'
                  }`}>
                    {request.status}
                  </span>
                </td>
                <td className="p-4 text-gray-400 text-sm">
                  {new Date(request.createdAt).toLocaleDateString()}
                </td>
                <td className="p-4">
                  {request.status === 'pending' && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => updatePaymentStatus(request.id, 'approved')}
                        className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => updatePaymentStatus(request.id, 'rejected')}
                        className="px-3 py-1 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {paymentRequests.length === 0 && (
          <div className="p-8 text-center text-gray-400">
            No payment requests found.
          </div>
        )}
      </div>
    </div>
  )
}
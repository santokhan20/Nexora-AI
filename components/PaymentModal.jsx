'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

export default function PaymentModal({ onClose }) {
  const [bkashNumber, setBkashNumber] = useState('')
  const [transactionId, setTransactionId] = useState('')
  const [screenshot, setScreenshot] = useState(null)
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!bkashNumber || !transactionId) return

    setLoading(true)
    try {
      const formData = new FormData()
      formData.append('bkashNumber', bkashNumber)
      formData.append('transactionId', transactionId)
      formData.append('amount', '49')
      if (screenshot) {
        formData.append('screenshot', screenshot)
      }

      const response = await fetch('/api/payments', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        alert('✅ Payment request submitted! We will verify and activate your premium account within 24 hours.')
        onClose()
      } else {
        alert('❌ Error submitting payment request. Please try again.')
      }
    } catch (error) {
      alert('❌ Error submitting payment request. Please check your connection.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 w-full max-w-md border border-gray-700 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">⭐ Upgrade to Premium</h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* bKash Payment Box */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-4 mb-6 border border-green-500">
          <div className="flex items-center space-x-3 text-white">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-green-600 font-bold text-lg">b</span>
            </div>
            <div>
              <p className="font-bold text-lg">Send Payment via bKash</p>
              <p className="text-sm opacity-90">Price: 49 BDT (One-time)</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Your bKash Number
            </label>
            <input
              type="tel"
              value={bkashNumber}
              onChange={(e) => setBkashNumber(e.target.value)}
              placeholder="01XXXXXXXXX"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Transaction ID
            </label>
            <input
              type="text"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="Enter bKash transaction ID"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Payment Screenshot (Optional)
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setScreenshot(e.target.files[0])}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition-colors"
            />
          </div>

          {/* Instructions */}
          <div className="bg-gray-700/50 rounded-xl p-4 border border-gray-600">
            <h4 className="font-semibold text-white mb-2">📋 Payment Instructions:</h4>
            <ol className="text-sm text-gray-300 space-y-1 list-decimal list-inside">
              <li>Send <strong>49 BDT</strong> to: <strong className="text-green-400">01730882600</strong></li>
              <li>Enter your bKash number above</li>
              <li>Enter the transaction ID from bKash</li>
              <li>Submit the form</li>
              <li>We'll activate premium within 24 hours</li>
            </ol>
          </div>

          {/* Premium Features */}
          <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-4">
            <h4 className="font-semibold text-blue-400 mb-2">🎁 Premium Features:</h4>
            <ul className="text-sm text-blue-300 space-y-1">
              <li>✅ Unlimited messages per day</li>
              <li>✅ Priority support</li>
              <li>✅ Advanced AI models</li>
              <li>✅ No usage limits</li>
              <li>✅ Early access to new features</li>
            </ul>
          </div>

          <div className="flex space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 px-4 border border-gray-600 rounded-xl text-gray-300 hover:text-white hover:bg-gray-700 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !bkashNumber || !transactionId}
              className="flex-1 py-3 px-4 bg-gradient-to-r from-green-600 to-green-700 rounded-xl text-white font-semibold hover:from-green-700 hover:to-green-800 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed transition-all shadow-lg"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing...</span>
                </div>
              ) : (
                'Submit Payment'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
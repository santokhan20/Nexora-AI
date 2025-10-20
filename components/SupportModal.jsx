'use client'
export default function SupportModal({ onClose }) {
  const copyEmail = () => {
    navigator.clipboard.writeText('santokhan5124@gmail.com')
    alert('Email copied to clipboard!')
  }

  const openInstagram = () => {
    window.open('https://www.instagram.com/s_for_santo', '_blank')
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 w-full max-w-md border border-gray-700 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">📞 Need Support?</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Support Features */}
        <div className="bg-blue-900/20 border border-blue-800 rounded-xl p-4 mb-6">
          <h4 className="font-semibold text-blue-400 mb-3 flex items-center">
            <span className="text-lg mr-2">🔧</span>
            What we can help with:
          </h4>
          <ul className="text-sm text-blue-300 space-y-2">
            <li className="flex items-center space-x-2">
              <span>✅</span>
              <span>Payment Issues </span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✅</span>
              <span>Premium Activation Problems</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✅</span>
              <span>Account & Billing Support</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✅</span>
              <span>Technical Issues</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✅</span>
              <span>Feature Requests</span>
            </li>
          </ul>
        </div>

        {/* Contact Methods */}
        <div className="space-y-4">
          <h4 className="font-semibold text-white mb-3">📬 Contact Methods:</h4>
          
          {/* Email */}
          <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="text-white font-medium">Email Support</p>
                  <p className="text-blue-300 text-sm">santokhan5124@gmail.com</p>
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors"
              >
                Copy
              </button>
            </div>
          </div>

          {/* Instagram */}
          <div className="bg-purple-900/20 border border-purple-800 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📱</span>
                <div>
                  <p className="text-white font-medium">Instagram DM</p>
                  <p className="text-purple-300 text-sm">@s_for_santo</p>
                </div>
              </div>
              <button
                onClick={openInstagram}
                className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-lg text-sm font-medium transition-colors"
              >
                Open
              </button>
            </div>
          </div>
        </div>

        {/* Support Info */}
        <div className="mt-6 bg-gray-700/50 rounded-lg p-3 border border-gray-600">
          <p className="text-sm text-gray-300 text-center">
            💬 <strong>Response Time:</strong> Usually within 24 hours
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full mt-4 py-3 px-4 border border-gray-600 rounded-lg text-gray-300 hover:text-white hover:bg-gray-700 transition-colors font-medium"
        >
          Close
        </button>
      </div>
    </div>
  )
}
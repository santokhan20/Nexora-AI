import './globals.css'
import ProviderWrapper from './providers'

export const metadata = {
  title: 'Nexora AI - Chat with Groq',
  description: 'AI chat platform powered by Groq and Neon DB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <ProviderWrapper>
          <div className="flex-1">
            {children}
          </div>
          
          <footer className="bg-gray-900 border-t border-gray-800 py-4">
            <div className="container mx-auto px-4">
              <p className="text-center text-gray-400 text-sm">
                © 2025 Shanto | All Rights Reserved
              </p>
            </div>
          </footer>
        </ProviderWrapper>
      </body>
    </html>
  )
}
'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import ReactMarkdown from 'react-markdown'

export default function ChatInterface() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [conversationId, setConversationId] = useState(null)
  const messagesEndRef = useRef(null)

  // ✅ OPTIMIZED: useCallback for scroll function
  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom])

  // ✅ OPTIMIZED: useCallback for sendMessage to prevent recreating function
  const sendMessage = useCallback(async () => {
    if (!input.trim() || loading) return

    const userMessage = { role: 'user', content: input, id: Date.now() }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: input,
          conversationId: conversationId,
        }),
      })

      const data = await response.json()
      
      if (data.conversationId) {
        setConversationId(data.conversationId)
      }

      if (data.reply) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: data.reply,
          id: Date.now() + 1
        }])
      } else if (data.error) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: `Error: ${data.error}`,
          id: Date.now() + 1
        }])
      }
    } catch (error) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, there was an error processing your message.',
        id: Date.now() + 1
      }])
    } finally {
      setLoading(false)
    }
  }, [input, loading, conversationId])

  // ✅ OPTIMIZED: useCallback for key press handler
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }, [sendMessage])

  // Markdown components configuration
  const markdownComponents = {
    strong: ({children}) => <strong className="font-bold">{children}</strong>,
    em: ({children}) => <em className="italic">{children}</em>,
    p: ({children}) => <p className="mb-2 last:mb-0">{children}</p>,
    ul: ({children}) => <ul className="list-disc list-inside mb-2">{children}</ul>,
    ol: ({children}) => <ol className="list-decimal list-inside mb-2">{children}</ol>,
    li: ({children}) => <li className="mb-1">{children}</li>,
    h1: ({children}) => <h1 className="text-xl font-bold mb-2">{children}</h1>,
    h2: ({children}) => <h2 className="text-lg font-bold mb-2">{children}</h2>,
    h3: ({children}) => <h3 className="text-md font-bold mb-2">{children}</h3>,
  }

  return (
    <div className="flex flex-col h-[70vh] bg-gray-800/30 rounded-2xl border border-gray-700">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.length === 0 ? (
          <div className="text-center text-gray-400 mt-10">
            <div className="text-4xl mb-4">🤖</div>
            <p className="text-lg">Welcome to Nexora AI!</p>
            <p className="text-sm">Start a conversation by typing a message below.</p>
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl p-4 ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-white'
                }`}
              >
                {message.role === 'assistant' ? (
                  <div className="prose prose-invert max-w-none">
                    <ReactMarkdown components={markdownComponents}>
                      {message.content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <div className="whitespace-pre-wrap">{message.content}</div>
                )}
              </div>
            </div>
          ))
        )}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-700 rounded-2xl p-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-gray-700">
        <div className="flex space-x-4">
          <div className="flex-1 relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Message Nexora AI..."
              className="w-full bg-gray-900 border border-gray-600 rounded-xl py-3 px-4 pr-12 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
              rows="2"
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="absolute right-3 bottom-3 p-2 bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
        <div className="text-xs text-yellow-400 mt-2 text-center bg-yellow-400/10 border border-yellow-400/20 rounded-lg p-2">
          ⚠️ <strong>Nexora AI is currently in beta testing.</strong><br/>
          Please review important information before using the platform.
        </div>
      </div>
    </div>
  )
}
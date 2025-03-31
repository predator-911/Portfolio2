"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Bot, User, X } from "lucide-react"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

interface Message {
  role: "system" | "user" | "assistant"
  content: string
}

interface AIAssistantProps {
  onClose: () => void
}

export default function AIAssistant({ onClose }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I'm Lakshya's AI assistant. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    // Add user message to chat
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    try {
      // Generate AI response
      const { text } = await generateText({
        model: openai("gpt-4o"),
        system:
          "You are an AI assistant for Lakshya Kumar, a Machine Learning Engineer & Data Science Professional. Help users learn about Lakshya's skills, experience, and projects. Be concise, friendly, and professional. If asked about something you don't know, politely recommend contacting Lakshya directly.",
        messages: [...messages, userMessage].map((msg) => ({ role: msg.role, content: msg.content })),
      })

      // Add AI response to chat
      setMessages((prev) => [...prev, { role: "assistant", content: text }])
    } catch (error) {
      console.error("Error generating response:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm sorry, I'm having trouble connecting. Please try again later.",
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed bottom-24 right-6 w-full max-w-md h-[600px] bg-card/80 backdrop-blur-lg border border-primary/20 rounded-xl shadow-xl overflow-hidden z-40"
    >
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <Bot className="h-5 w-5 text-primary" />
          <h3 className="font-semibold">AI Assistant</h3>
        </div>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4 h-[calc(600px-140px)] overflow-y-auto">
        <AnimatePresence>
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex mb-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex items-start max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                <div
                  className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${
                    message.role === "user" ? "bg-primary ml-2" : "bg-muted mr-2"
                  }`}
                >
                  {message.role === "user" ? (
                    <User className="h-4 w-4 text-primary-foreground" />
                  ) : (
                    <Bot className="h-4 w-4 text-primary" />
                  )}
                </div>
                <div
                  className={`p-3 rounded-lg ${
                    message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex mb-4 justify-start"
            >
              <div className="flex items-start max-w-[80%]">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-muted mr-2 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="p-3 rounded-lg bg-muted">
                  <div className="flex space-x-1">
                    <span
                      className="h-2 w-2 bg-primary/60 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></span>
                    <span
                      className="h-2 w-2 bg-primary/60 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></span>
                    <span
                      className="h-2 w-2 bg-primary/60 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </AnimatePresence>
      </div>

      <div className="p-4 border-t">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow"
            disabled={isTyping}
          />
          <Button type="submit" size="icon" disabled={isTyping || !input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </motion.div>
  )
}


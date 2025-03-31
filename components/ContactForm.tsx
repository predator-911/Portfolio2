"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Check } from "lucide-react"
import { useTheme } from "next-themes"
import GlassmorphicCard from "@/components/GlassmorphicCard"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form state after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <GlassmorphicCard>
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" disabled={isSubmitting || isSubmitted} required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  disabled={isSubmitting || isSubmitted}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input id="subject" placeholder="Subject" disabled={isSubmitting || isSubmitted} required />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                rows={5}
                disabled={isSubmitting || isSubmitted}
                required
              />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || isSubmitted}>
            {isSubmitting ? (
              <span className="flex items-center">
                <div className="animate-spin mr-2 h-4 w-4 border-2 border-background rounded-full border-t-transparent"></div>
                Sending...
              </span>
            ) : isSubmitted ? (
              <span className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                Message Sent!
              </span>
            ) : (
              <span className="flex items-center">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </span>
            )}
          </Button>
        </form>
      </GlassmorphicCard>

      <GlassmorphicCard>
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

          <div className="space-y-6">
            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={`p-3 rounded-full ${isDarkMode ? "bg-primary/20" : "bg-primary/10"}`}>
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-muted-foreground">sharmalakshya0911@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`p-3 rounded-full ${isDarkMode ? "bg-primary/20" : "bg-primary/10"}`}>
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-muted-foreground">+91 12345 67890</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`p-3 rounded-full ${isDarkMode ? "bg-primary/20" : "bg-primary/10"}`}>
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">Gautam Buddha Nagar, Uttar Pradesh, India</p>
              </div>
            </motion.div>
          </div>

          <div className="pt-6 mt-6 border-t">
            <h4 className="font-medium mb-4">Connect with me</h4>
            <div className="flex space-x-4">
              {["github", "linkedin", "twitter", "instagram"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -5 }}
                  className={`p-3 rounded-full ${isDarkMode ? "bg-primary/20 hover:bg-primary/30" : "bg-primary/10 hover:bg-primary/20"} transition-colors`}
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    {/* This would be replaced with actual social icons */}
                    <rect width="24" height="24" rx="12" opacity="0" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </GlassmorphicCard>
    </div>
  )
}


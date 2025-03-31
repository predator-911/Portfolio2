"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Check } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 w-full">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>

          {/* Contact grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
            {/* Contact form */}
            <motion.div variants={itemVariants}>
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    <Button type="submit" className="w-full" disabled={isSubmitting || isSubmitted}>
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
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact info */}
            <motion.div variants={itemVariants}>
              <Card className="glass-card h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <ContactItem
                      icon={<Mail className="h-5 w-5 text-primary" />}
                      title="Email"
                      content="contact@example.com"
                      link="mailto:contact@example.com"
                    />
                    <ContactItem
                      icon={<Phone className="h-5 w-5 text-primary" />}
                      title="Phone"
                      content="+1 (123) 456-7890"
                      link="tel:+11234567890"
                    />
                    <ContactItem
                      icon={<MapPin className="h-5 w-5 text-primary" />}
                      title="Location"
                      content="New York, NY, USA"
                    />
                  </div>

                  {/* Map or additional content */}
                  <div className="mt-8 rounded-lg overflow-hidden h-48 bg-muted/50 flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Interactive map would be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface ContactItemProps {
  icon: React.ReactNode
  title: string
  content: string
  link?: string
}

function ContactItem({ icon, title, content, link }: ContactItemProps) {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-2 rounded-full bg-primary/10">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        {link ? (
          <a href={link} className="text-muted-foreground hover:text-primary transition-colors">
            {content}
          </a>
        ) : (
          <p className="text-muted-foreground">{content}</p>
        )}
      </div>
    </div>
  )
}


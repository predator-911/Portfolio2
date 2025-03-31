"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, FileText } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

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

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 -z-10" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-12"
        >
          {/* Text content */}
          <motion.div variants={itemVariants} className="w-full md:w-1/2">
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-primary mb-4">
              Hello, I&apos;m
            </motion.p>
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-8 max-w-lg">
              I build modern, responsive web applications with a focus on performance, accessibility, and user
              experience.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button className="gap-2">
                <Github size={18} />
                GitHub
              </Button>
              <Button variant="outline" className="gap-2">
                <FileText size={18} />
                Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile image */}
          <motion.div variants={itemVariants} className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-primary/5 animate-pulse" />
              <div className="absolute inset-2 rounded-full overflow-hidden glass-card">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Profile"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1,
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <p className="text-sm text-muted-foreground mb-2">Scroll Down</p>
          <ArrowDown size={20} className="text-primary" />
        </motion.div>
      </div>
    </section>
  )
}


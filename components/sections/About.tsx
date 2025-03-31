"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Briefcase, GraduationCap, MapPin } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    <section id="about" className="py-20 w-full bg-muted/30">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div variants={itemVariants} className="order-2 md:order-1 flex justify-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-tr from-primary/20 to-primary/5" />
                <div className="absolute inset-0 rounded-lg overflow-hidden glass-card">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rU0nhSLS3Thg9pGN6Nn1K1Pzu7agO7.png"
                    alt="About me"
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="order-1 md:order-2 space-y-6">
              <h3 className="text-2xl font-semibold">ML Engineer & Full Stack Developer</h3>
              <p className="text-muted-foreground">
                I'm a passionate developer with expertise in machine learning, data science, and web development.
                Currently pursuing my B.E. in Information Technology at MAIT Delhi, I focus on creating intelligent
                systems and data-driven solutions that solve real-world problems.
              </p>
              <p className="text-muted-foreground">
                My journey in tech has led me to explore the fascinating intersection of AI and software development,
                where I've developed innovative solutions like steganography using GenAI and unified ML platforms for
                various applications.
              </p>

              {/* Info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <InfoCard
                  icon={<GraduationCap className="w-5 h-5 text-primary" />}
                  title="Education"
                  description="B.E. in Information Technology"
                />
                <InfoCard
                  icon={<Briefcase className="w-5 h-5 text-primary" />}
                  title="Experience"
                  description="ML Engineer & Data Scientist"
                />
                <InfoCard
                  icon={<Code className="w-5 h-5 text-primary" />}
                  title="Projects"
                  description="10+ ML & Web Projects"
                />
                <InfoCard
                  icon={<MapPin className="w-5 h-5 text-primary" />}
                  title="Location"
                  description="Gautam Buddha Nagar, India"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface InfoCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <Card className="glass-card border-none">
      <CardContent className="p-4 flex flex-col items-center text-center">
        <div className="p-2 rounded-full bg-primary/10 mb-3">{icon}</div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}


"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ArrowRight } from "lucide-react"

// Project data
const projects = [
  {
    id: 1,
    title: "Steganography using GenAI",
    description:
      "A cutting-edge steganography tool that uses generative AI to hide information within images while preserving visual quality.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Python", "TensorFlow", "Computer Vision", "Cryptography"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "Geospatial Querying System using NLP",
    description:
      "An intelligent system that interprets natural language queries to retrieve and visualize geospatial data on interactive maps.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Node.js", "NLP", "MapBox", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "AI Warehouse Management System",
    description:
      "A comprehensive warehouse management solution powered by AI for inventory optimization, demand forecasting, and automated logistics.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "TypeScript", "Machine Learning", "MongoDB", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 w-full">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Explore my latest work showcasing innovative solutions at the intersection of web development and
              artificial intelligence.
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* More projects button */}
          <motion.div variants={itemVariants} className="mt-12">
            <Button variant="outline" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    github: string
    demo: string
  }
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: project.id * 0.1 },
        },
      }}
    >
      <Card className="h-full overflow-hidden glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <ExternalLink className="h-4 w-4" />
              Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}


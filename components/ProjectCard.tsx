"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Maximize2 } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
  delay?: number
}

export default function ProjectCard({ title, description, tags, link, delay = 0 }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-100px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="overflow-hidden border border-primary/20 backdrop-blur-sm bg-card/50 h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {title}
            <motion.div animate={{ rotate: isHovered ? 45 : 0 }} transition={{ duration: 0.3 }}>
              <Maximize2 size={18} className="text-primary" />
            </motion.div>
          </CardTitle>
          <CardDescription>
            <div className="flex flex-wrap gap-2 mt-2">
              {tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="bg-primary/10">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="ghost" size="sm">
            <Github className="mr-2 h-4 w-4" />
            Code
          </Button>
          <Button size="sm" className="ml-auto">
            <ExternalLink className="mr-2 h-4 w-4" />
            Demo
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}


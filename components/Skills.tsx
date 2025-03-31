"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

// Skill categories with their respective skills
const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    name: "AI & ML",
    skills: [
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 70 },
      { name: "NLP", level: 80 },
      { name: "Computer Vision", level: 65 },
      { name: "Data Analysis", level: 85 },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 65 },
      { name: "Testing", level: 80 },
    ],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="py-20 w-full bg-muted/30">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels across various technologies and
              domains.
            </p>
          </motion.div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
            {skillCategories.map((category, index) => (
              <SkillCategory key={category.name} category={category} delay={index * 0.1} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface SkillCategoryProps {
  category: {
    name: string
    skills: {
      name: string
      level: number
    }[]
  }
  delay: number
}

function SkillCategory({ category, delay }: SkillCategoryProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
    >
      <Card className="glass-card h-full">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-6">{category.name}</h3>
          <div className="space-y-4">
            {category.skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

interface SkillBarProps {
  skill: {
    name: string
    level: number
  }
}

function SkillBar({ skill }: SkillBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
      </div>
    </div>
  )
}


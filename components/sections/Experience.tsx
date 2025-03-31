"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

// Experience data
const experiences = [
  {
    id: 1,
    title: "Machine Learning Intern",
    company: "Suvidha Foundation",
    period: "Jun 2024 - Present",
    description: [
      "Developed and implemented machine learning models using supervised and unsupervised learning techniques to solve real-world business problems.",
      "Gathered, cleaned, and transformed raw data from various sources into structured datasets suitable for analysis and modeling.",
    ],
    skills: ["Machine Learning", "Data Preprocessing", "Python", "TensorFlow", "Scikit-learn"],
  },
  {
    id: 2,
    title: "Finance Analyst",
    company: "ADSMIT MEDIA",
    period: "May 2024 - Jun 2024",
    description: [
      "Participated in the evaluation of investment opportunities, performing due diligence and assessing financial viability to support portfolio management.",
      "Collaborated with cross-functional teams to gather data and insights, enhancing the accuracy and relevance of financial reports and presentations.",
    ],
    skills: ["Financial Analysis", "Data Analysis", "Investment Evaluation", "Reporting"],
  },
  {
    id: 3,
    title: "AI Intern",
    company: "Coincent.ai",
    period: "Oct 2023 - Dec 2023",
    description: [
      "Developed and fine-tuned a Vision Transformer model for image classification tasks, achieving state-of-the-art accuracy on benchmark datasets.",
      "Implemented innovative data augmentation and training techniques to enhance the performance and generalization of the model.",
    ],
    skills: ["Python", "PyTorch", "TensorFlow", "Computer Vision", "Deep Learning"],
  },
]

export default function Experience() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 w-full">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              My professional journey in machine learning, data science, and software development.
            </p>
          </motion.div>

          {/* Experience timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

            {/* Experience items */}
            {experiences.map((experience, index) => (
              <ExperienceItem key={experience.id} experience={experience} index={index} isEven={index % 2 === 0} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface ExperienceItemProps {
  experience: {
    id: number
    title: string
    company: string
    period: string
    description: string[]
    skills: string[]
  }
  index: number
  isEven: boolean
}

function ExperienceItem({ experience, index, isEven }: ExperienceItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: index * 0.1 },
        },
      }}
      className={`relative flex flex-col md:flex-row items-center mb-12 ${isEven ? "md:flex-row-reverse" : ""}`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10"></div>

      {/* Content */}
      <div className={`w-full md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
        <Card className="glass-card card-hover">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">{experience.title}</h3>
            </div>
            <p className="text-lg font-medium mb-1">{experience.company}</p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <span>{experience.period}</span>
            </div>
            <div className="space-y-2 mb-4">
              {experience.description.map((item, i) => (
                <p key={i} className="text-muted-foreground">
                  {item}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {experience.skills.map((skill, i) => (
                <Badge key={i} variant="secondary" className="font-normal">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}


"use client"

import { motion } from "framer-motion"
import GlassmorphicCard from "@/components/GlassmorphicCard"

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["Python", "JavaScript", "HTML", "CSS", "SQL", "C++"],
    icon: "💻",
  },
  {
    name: "Machine Learning & AI",
    skills: ["TensorFlow", "Keras", "Scikit-Learn", "Deep Learning", "NLP", "Computer Vision"],
    icon: "🧠",
  },
  {
    name: "Data Science",
    skills: [
      "Data Analysis",
      "Data Visualization",
      "Data Engineering",
      "Database Management",
      "Big Data",
      "Data Structures",
    ],
    icon: "📊",
  },
  {
    name: "Web Development",
    skills: ["React", "Next.js", "Node.js", "Django", "RESTful APIs", "Responsive Design"],
    icon: "🌐",
  },
  {
    name: "Tools & Technologies",
    skills: ["Git", "Docker", "AWS", "Google Cloud", "Jupyter", "VS Code"],
    icon: "🔧",
  },
]

export default function SkillsSection() {
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
      transition: { duration: 0.5 },
    },
  }

  const progressVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, delay: 0.3 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {skillCategories.map((category, index) => (
        <motion.div key={index} variants={itemVariants}>
          <GlassmorphicCard>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">{category.icon}</span>
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>

            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-1">
                  <div className="flex justify-between">
                    <span>{skill}</span>
                    <span className="text-sm text-muted-foreground">{85 + Math.floor(Math.random() * 16)}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
                      variants={progressVariants}
                      style={{
                        scaleX: (85 + Math.floor(Math.random() * 16)) / 100,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassmorphicCard>
        </motion.div>
      ))}
    </motion.div>
  )
}


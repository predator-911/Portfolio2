"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, ExternalLink, Briefcase, GraduationCap, Code } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Resume() {
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
    <section id="resume" className="py-20 w-full">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A summary of my professional experience, education, and skills.
            </p>
          </motion.div>

          {/* Resume content */}
          <div className="w-full max-w-4xl">
            <Card className="glass-card mb-8">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">Lakshya Kumar</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center">
                        <FileText className="mr-2 h-4 w-4" />
                        <span>View Resume</span>
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href="/resume.pdf" download className="flex items-center">
                        <Download className="mr-2 h-4 w-4" />
                        <span>Download</span>
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-2 mb-6">
                  <a
                    href="mailto:sharmalakshay0911@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    sharmalakshay0911@gmail.com
                  </a>
                  <span className="hidden md:inline text-muted-foreground">•</span>
                  <a href="tel:+919958677429" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 9958677429
                  </a>
                  <span className="hidden md:inline text-muted-foreground">•</span>
                  <a
                    href="https://github.com/Predator-911"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    github.com/Predator-911
                  </a>
                  <span className="hidden md:inline text-muted-foreground">•</span>
                  <a
                    href="https://linkedin.com/in/lakshya-kumar-7b16252b4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    linkedin.com/in/lakshya-kumar-7b16252b4
                  </a>
                </div>

                {/* Skills section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold flex items-center mb-3">
                    <Code className="mr-2 h-5 w-5 text-primary" />
                    Skills
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2">Programming Languages</h5>
                      <p className="text-muted-foreground">C/C++, Python, SQL</p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Frameworks & Libraries</h5>
                      <p className="text-muted-foreground">TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, OpenCV</p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Web Technologies</h5>
                      <p className="text-muted-foreground">HTML, CSS, JavaScript, Flask, FastAPI</p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">DevOps Tools</h5>
                      <p className="text-muted-foreground">Git, Docker, Kubernetes, CI/CD, AWS, Linux</p>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Work Experience section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold flex items-center mb-4">
                    <Briefcase className="mr-2 h-5 w-5 text-primary" />
                    Work Experience
                  </h4>

                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-medium">Machine Learning Intern</h5>
                          <p className="text-primary">Suvidha Foundation</p>
                        </div>
                        <span className="text-sm text-muted-foreground">Jun 2024 – Present</span>
                      </div>
                      <ul className="mt-2 space-y-1 text-muted-foreground list-disc list-inside">
                        <li>Built predictive models, improving accuracy by 20%.</li>
                        <li>Optimized large datasets, reducing computation time by 30%.</li>
                        <li>Integrated ML pipelines into real-time decision systems.</li>
                      </ul>
                    </div>

                    <div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h5 className="font-medium">AI Intern</h5>
                          <p className="text-primary">Coincent.ai</p>
                        </div>
                        <span className="text-sm text-muted-foreground">Oct 2023 – Dec 2023</span>
                      </div>
                      <ul className="mt-2 space-y-1 text-muted-foreground list-disc list-inside">
                        <li>Fine-tuned Vision Transformer models, boosting classification accuracy by 15%.</li>
                        <li>Applied advanced data augmentation, improving dataset diversity by 50%.</li>
                        <li>Optimized training pipelines, reducing computation cost by 25%.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Education section */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold flex items-center mb-4">
                    <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                    Education
                  </h4>

                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-medium">B.Tech in Information Technology</h5>
                        <p className="text-primary">Maharaja Agrasen Institute of Technology, Delhi</p>
                      </div>
                      <span className="text-sm text-muted-foreground">Nov 2022 – Nov 2026</span>
                    </div>
                    <p className="mt-1 text-muted-foreground">CGPA: 8.30/10</p>
                    <p className="mt-2 text-muted-foreground">
                      <span className="font-medium">Relevant Coursework:</span> Data Structures & Algorithms, Machine
                      Learning, Computer Networks, Operating Systems, DBMS, Deep Learning, AI.
                    </p>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Social Profiles section */}
                <div>
                  <h4 className="text-lg font-semibold flex items-center mb-4">
                    <ExternalLink className="mr-2 h-5 w-5 text-primary" />
                    Social Profiles
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a
                      href="https://kaggle.com/lakshya9kumar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="font-medium mr-2">Kaggle:</span>
                      kaggle.com/lakshya9kumar
                    </a>
                    <a
                      href="https://huggingface.co/spaces/Predator911"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                    >
                      <span className="font-medium mr-2">Hugging Face:</span>
                      huggingface.co/spaces/Predator911
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


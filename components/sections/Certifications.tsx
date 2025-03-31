"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink, Calendar, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip"
import Image from "next/image"

// Certification data with enhanced details
const certifications = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    issuer: "Stanford Online",
    date: "February 2024",
    description:
      "Comprehensive training in supervised and unsupervised learning techniques, including regression, classification, and neural networks.",
    credential: "5WTF7SQPRMRR",
    url: "https://coursera.org/verify/5WTF7SQPRMRR",
    category: "Machine Learning",
    skills: ["Regression", "Classification", "Neural Networks", "Model Evaluation"],
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JFZSkDxs1haIBohRXoKRya669ntlCu.png",
    iconFallback: "SO",
  },
  {
    id: 2,
    title: "Advanced Learning Algorithms",
    issuer: "Stanford Online",
    date: "April 2024",
    description:
      "Mastered advanced machine learning algorithms and techniques for complex data analysis and model optimization.",
    credential: "3QT9MNFJJQNH",
    url: "https://coursera.org/verify/3QT9MNFJJQNH",
    category: "Machine Learning",
    skills: ["Deep Learning", "Optimization", "Feature Engineering", "Ensemble Methods"],
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JFZSkDxs1haIBohRXoKRya669ntlCu.png",
    iconFallback: "SO",
  },
  {
    id: 3,
    title: "IT Foundation Program",
    issuer: "Infosys Springboard",
    date: "June 2024",
    description: "Strong foundation in software development principles, agile methodologies, and IT best practices.",
    credential: "INFOSYS-SE-2024",
    url: "https://verify.onwingspan.com/",
    category: "Software Development",
    skills: ["Agile", "Software Engineering", "SDLC", "Project Management"],
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZeEGkbJvhVpfuxt78Ch3j7GrUptNnd.png",
    iconFallback: "IS",
  },
  {
    id: 4,
    title: "Database Management System",
    issuer: "Infosys Springboard",
    date: "July 2024",
    description: "Comprehensive training in database design, SQL, normalization, and database administration.",
    credential: "INFOSYS-DBMS-2024",
    url: "https://verify.onwingspan.com/",
    category: "Databases",
    skills: ["SQL", "Database Design", "Normalization", "Query Optimization"],
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ZeEGkbJvhVpfuxt78Ch3j7GrUptNnd.png",
    iconFallback: "IS",
  },
  {
    id: 5,
    title: "Data Science Job Simulation",
    issuer: "British Airways",
    date: "January 2025",
    description:
      "Applied data science techniques to solve real-world aviation industry problems, including customer segmentation and flight delay prediction.",
    credential: "8KfBcWKnwtHEeeLF8",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_WKX2ZdThK3FDQWzd5_1738325268178_completion_certificate.pdf",
    category: "Data Science",
    skills: ["Data Analysis", "Predictive Modeling", "Customer Segmentation", "Aviation Analytics"],
    icon: "/images/ba-logo.png",
    iconFallback: "BA",
  },
  {
    id: 6,
    title: "Power BI Job Simulation",
    issuer: "PwC",
    date: "February 2025",
    description:
      "Hands-on experience with Power BI for data visualization, dashboard creation, and business intelligence reporting.",
    credential: "Z7y4BaMocjqKXgyx5",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/4sLyCPgmsy8DA6Dh3/a87GpgE6tiku7q3gu_4sLyCPgmsy8DA6Dh3_WKX2ZdThK3FDQWzd5_1738405845648_completion_certificate.pdf",
    category: "Data Visualization",
    skills: ["Power BI", "Data Visualization", "Dashboard Design", "Business Intelligence"],
    icon: "/images/pwc-logo.png",
    iconFallback: "PwC",
  },
  {
    id: 7,
    title: "Auditing Simulation",
    issuer: "EY",
    date: "February 2025",
    description:
      "Experience in financial auditing processes, risk assessment, compliance verification, and audit reporting.",
    credential: "j39CcXAGJuqfBSTpy",
    url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Z3pPDqCPapFTSGBgi/d2mpB4NEF4HQBkbhE_Z3pPDqCPapFTSGBgi_WK",
    category: "Finance & Auditing",
    skills: ["Financial Auditing", "Risk Assessment", "Compliance", "Audit Reporting"],
    icon: "/images/ey-logo.png",
    iconFallback: "EY",
  },
]

// Group certifications by category
const groupedCertifications = certifications.reduce(
  (acc, cert) => {
    if (!acc[cert.category]) {
      acc[cert.category] = []
    }
    acc[cert.category].push(cert)
    return acc
  },
  {} as Record<string, typeof certifications>,
)

export default function Certifications() {
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
    <section id="certifications" className="py-20 w-full bg-muted/30">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Credentials</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and credentials that validate my expertise in various technical domains.
            </p>
          </motion.div>

          {/* Certifications by category */}
          <div className="w-full max-w-5xl">
            {Object.entries(groupedCertifications).map(([category, certs], categoryIndex) => (
              <motion.div key={category} variants={itemVariants} className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <Award className="mr-2 h-5 w-5 text-primary" />
                  {category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certs.map((cert, index) => (
                    <CertificationCard
                      key={cert.id}
                      certification={cert}
                      delay={(categoryIndex * certs.length + index) * 0.1}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

interface CertificationCardProps {
  certification: {
    id: number
    title: string
    issuer: string
    date: string
    description: string
    credential: string
    url: string
    category: string
    skills: string[]
    icon?: string
    iconFallback: string
  }
  delay: number
}

function CertificationCard({ certification, delay }: CertificationCardProps) {
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
      <Card className="glass-card h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            {/* Issuer logo/icon */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
              {certification.icon ? (
                <Image
                  src={certification.icon || "/placeholder.svg"}
                  alt={certification.issuer}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-primary font-bold">{certification.iconFallback}</span>
              )}
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-lg font-semibold">{certification.title}</h4>
                <TooltipProvider>
                  <Tooltip content={`Issued: ${certification.date}`}>
                    <button className="flex items-center text-xs text-muted-foreground cursor-pointer">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{certification.date}</span>
                    </button>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <p className="text-primary font-medium mb-3">{certification.issuer}</p>
              <p className="text-muted-foreground mb-4 text-sm">{certification.description}</p>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-1 mb-4">
                {certification.skills.map((skill, i) => (
                  <Badge key={i} variant="outline" className="text-xs bg-primary/5">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3 w-3 mr-1 text-green-500" />
                  <span>Credential ID: {certification.credential.substring(0, 10)}...</span>
                </div>
                <Button variant="ghost" size="sm" className="text-primary" asChild>
                  <a
                    href={certification.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm"
                  >
                    Verify
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}


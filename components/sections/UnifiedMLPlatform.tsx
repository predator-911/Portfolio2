"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, ExternalLink, ArrowRight } from "lucide-react"
import ImageWithFallback from "@/components/ImageWithFallback"

// Update the ML Models with more detailed descriptions and enhanced placeholder image references
const mlModels = [
  {
    id: 1,
    title: "Intelligent Handwriting Recognition",
    description:
      "Advanced OCR model that accurately recognizes and digitizes handwritten text using deep learning techniques. Achieves exceptional accuracy through custom CNN architectures and extensive training on diverse handwriting samples.",
    image: "/images/handwriting-recognition.jpg", // Custom placeholder image
    tags: ["Computer Vision", "OCR", "CNN", "TensorFlow", "Image Processing"],
    accuracy: "98.5%",
    demo: "https://demo.com/handwriting-recognition",
  },
  {
    id: 2,
    title: "Accurate Real Estate Valuation",
    description:
      "Predictive model that estimates property values based on multiple features and market trends with high accuracy. Incorporates historical data, location analytics, and economic indicators to provide precise valuations.",
    image: "/images/real-estate-valuation.jpg", // Custom placeholder image
    tags: ["Regression", "Feature Engineering", "Ensemble Methods", "Scikit-learn"],
    accuracy: "94.2%",
    demo: "https://demo.com/real-estate-valuation",
  },
  {
    id: 3,
    title: "Real-Time Disaster Insight with NLP",
    description:
      "NLP model that analyzes social media data to detect and classify disaster-related information in real-time. Helps emergency responders prioritize resources and identify affected areas during crisis situations.",
    image: "/images/disaster-insight.jpg", // Custom placeholder image
    tags: ["NLP", "Text Classification", "BERT", "Sentiment Analysis"],
    accuracy: "96.8%",
    demo: "https://demo.com/disaster-insight",
  },
  {
    id: 4,
    title: "Survive the Unsinkable",
    description:
      "Survival prediction model based on the Titanic dataset, using ensemble methods to achieve high accuracy. Identifies key factors that influenced survival rates and provides insights into historical maritime disasters.",
    image: "/images/titanic-survival.jpg", // Custom placeholder image
    tags: ["Classification", "Random Forest", "XGBoost", "Feature Selection"],
    accuracy: "89.7%",
    demo: "https://demo.com/titanic-survival",
  },
  {
    id: 5,
    title: "Survival Beyond Earth",
    description:
      "Predictive model for space travel survival scenarios, incorporating multiple environmental and physiological factors. Simulates various space conditions to help prepare for future interplanetary missions.",
    image: "/images/space-survival.jpg", // Custom placeholder image
    tags: ["Classification", "Neural Networks", "Hyperparameter Tuning"],
    accuracy: "92.3%",
    demo: "https://demo.com/space-survival",
  },
]

export default function UnifiedMLPlatform() {
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
    <section id="ml-platform" className="py-20 w-full bg-muted/30">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unified ML Platform</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A comprehensive platform integrating multiple machine learning models for various applications, from
              computer vision to natural language processing and predictive analytics.
            </p>
          </motion.div>

          {/* ML Models grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mlModels.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </div>

          {/* Platform overview button */}
          <motion.div variants={itemVariants} className="mt-12">
            <Button className="group" asChild>
              <a href="https://github.com/predator-911/unified-ml-platform" target="_blank" rel="noopener noreferrer">
                Explore Platform Architecture
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

interface ModelCardProps {
  model: {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    accuracy: string
    demo: string
  }
}

// In the ModelCard component, add a fallback for images
function ModelCard({ model }: ModelCardProps) {
  // Create a fallback URL that encodes the model title
  const fallbackSrc = `/placeholder.svg?text=${encodeURIComponent(model.title)}&width=600&height=400`

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: model.id * 0.1 },
        },
      }}
    >
      <Card className="h-full overflow-hidden glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback
            src={model.image || "/placeholder.svg"}
            fallbackSrc={fallbackSrc}
            alt={model.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
            Accuracy: {model.accuracy}
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <Brain className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">{model.title}</h3>
          </div>
          <p className="text-muted-foreground mb-4">{model.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {model.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex justify-end">
          <Button size="sm" asChild>
            <a href={model.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <ExternalLink className="h-4 w-4" />
              Try Model
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}


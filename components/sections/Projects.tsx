"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import Image from "next/image"

// Project data with real projects
const projects = [
  {
    id: 1,
    title: "Steganography Using Gen AI",
    description:
      "Created an AI-powered system for embedding secret messages in images with high fidelity. This innovative approach combines cryptography with state-of-the-art generative models to ensure secure data transmission.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WQRA4plb43V5khfBkRBBePKBDB5bBm.png",
    tags: ["Python", "GenAI", "Computer Vision", "Cryptography", "Hugging Face"],
    github: "https://github.com/Predator-911/SGENAI",
    demo: "https://huggingface.co/spaces/Predator911/SGENAI",
  },
  {
    id: 2,
    title: "DogBreed Classification",
    description:
      "Developed a deep learning model to accurately classify dog breeds from images. Implemented transfer learning techniques with pre-trained models to achieve high accuracy even with limited training data.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X8vdnnfe91zsPtB5ytHyf1lljFwC9c.png",
    tags: ["Deep Learning", "Computer Vision", "Transfer Learning", "Hugging Face"],
    github: "https://github.com/Predator-911/DogBreed",
    demo: "https://huggingface.co/spaces/Predator911/DogBreed",
  },
  {
    id: 3,
    title: "NLP - Disaster Tweets",
    description:
      "Built an NLP model to classify disaster-related tweets, achieving high validation accuracy for crisis management applications. This tool helps emergency responders identify and prioritize critical information during disasters.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Bd2zyoky4aeYPxQzshTAnq5JvRjXam.png",
    tags: ["NLP", "Text Classification", "Machine Learning", "Streamlit"],
    github: "https://github.com/Predator-911/NLP-Disaster-Tweets",
    demo: "https://nncsjh9jxmwixpfstqtcszbp.streamlit.app/?",
    infoPage: "https://predator-911.github.io/Portfoli0/NLP%20DISASTER.html",
  },
  {
    id: 4,
    title: "Digit Recogniser",
    description:
      "Trained convolutional neural networks to recognize handwritten digits with high accuracy using the MNIST dataset. This project demonstrates the power of CNNs for image classification tasks.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JSABGDvJMzF0emMTlc6pCKgA6WEiXd.png",
    tags: ["CNN", "Computer Vision", "TensorFlow", "Streamlit"],
    github: "https://github.com/Predator-911/Digit-Recogniser",
    demo: "https://digitrecogniser-zzcjt35a9vgsmk5p235szk.streamlit.app/?",
    infoPage: "https://predator-911.github.io/Portfoli0/Digit.html",
  },
  {
    id: 5,
    title: "House Price Prediction",
    description:
      "Developed predictive models to estimate house prices using various machine learning algorithms and feature engineering techniques. This model helps in making informed real estate investment decisions.",
    image: "/images/house-price.jpg",
    tags: ["Machine Learning", "Regression", "Data Analysis", "Streamlit"],
    github: "https://github.com/Predator-911/House-Price-Prediction",
    demo: "https://9yx5jqt7gemca4xn8mncwk.streamlit.app/",
    infoPage: "https://predator-911.github.io/Portfoli0/House.html",
  },
  {
    id: 6,
    title: "Landmark Detection",
    description:
      "Implemented landmark detection algorithms to accurately identify and locate key points in images using deep learning techniques. This project has applications in augmented reality and image recognition.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FACm7QnXUC4u4mo11hRDggR4DSJvdv.png",
    tags: ["Computer Vision", "Deep Learning", "TensorFlow", "Image Processing"],
    github: "https://github.com/Predator-911/Landmark-Detection",
    demo: "https://predator-911.github.io/Portfoli0/LD.html",
    infoPage: "https://predator-911.github.io/Portfoli0/LD.html",
  },
]

// Additional projects that can be shown in a "View More" section
const additionalProjects = [
  {
    id: 7,
    title: "Spaceship Titanic Survival",
    description:
      "Developed a machine learning model to predict passenger survival on the Spaceship Titanic, using RandomForestClassifier and feature engineering techniques.",
    image: "/images/spaceship-titanic.jpg",
    tags: ["Machine Learning", "Classification", "Feature Engineering", "Streamlit"],
    github: "https://github.com/Predator-911/Spaceship-Titanic",
    demo: "https://hrbwzuxseql4zdrvflh5y6.streamlit.app/?",
    infoPage: "https://predator-911.github.io/Portfoli0/SpaceShip%20Titanic.html",
  },
  {
    id: 8,
    title: "Store Sales Prediction",
    description:
      "Created a time series forecasting model to predict store sales, achieving low error metrics for inventory optimization and business planning.",
    image: "/images/store-sales.jpg",
    tags: ["Time Series", "Forecasting", "Data Science", "Business Intelligence"],
    github: "https://github.com/Predator-911/Store-Sales-Prediction",
    demo: "https://predator-911.github.io/Portfoli0/StoreSales.html",
    infoPage: "https://predator-911.github.io/Portfoli0/StoreSales.html",
  },
  {
    id: 9,
    title: "Titanic Survival",
    description:
      "Built a machine learning model to predict Titanic survival outcomes, achieving robust accuracy in identifying passengers' likelihood of survival.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RL0p2NqNLnGVRzXzNWTKVFVW77Wg4o.png",
    tags: ["Classification", "Data Analysis", "Machine Learning", "Streamlit"],
    github: "https://github.com/Predator-911/Titanic-Survival",
    demo: "https://5krauxjee9gubhqhszvaam.streamlit.app/?",
    infoPage: "https://predator-911.github.io/Portfoli0/Titanic.html",
  },
  {
    id: 10,
    title: "Vision Transformer",
    description:
      "Implemented and fine-tuned Vision Transformer models for image classification tasks, enhancing model accuracy and efficiency through advanced techniques.",
    image: "/images/vision-transformer.jpg",
    tags: ["Deep Learning", "Computer Vision", "Transformers", "PyTorch"],
    github: "https://github.com/Predator-911/Vision-Transformer",
    demo: "https://predator-911.github.io/Portfoli0/VIT.html",
    infoPage: "https://predator-911.github.io/Portfoli0/VIT.html",
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [showAll, setShowAll] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  // Combine projects based on showAll state
  const displayProjects = showAll ? [...projects, ...additionalProjects] : projects

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
              Explore my latest work showcasing innovative solutions in machine learning, data science, and AI
              applications.
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Toggle button for showing more/less projects */}
          <motion.div variants={itemVariants} className="mt-12">
            <Button variant="outline" className="group" onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less Projects" : "View More Projects"}
              <ArrowRight
                className={`ml-2 h-4 w-4 transition-transform ${showAll ? "rotate-90" : "group-hover:translate-x-1"}`}
              />
            </Button>
          </motion.div>

          {/* GitHub profile link */}
          <motion.div variants={itemVariants} className="mt-6">
            <Button variant="link" className="text-primary" asChild>
              <a
                href="https://github.com/Predator-911"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <span>Visit my GitHub profile for more projects</span>
              </a>
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
    infoPage?: string
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
      <Card className="h-full overflow-hidden glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 gradient-border">
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
          <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 flex flex-wrap gap-2 justify-between">
          <Button variant="outline" size="sm" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <Github className="h-4 w-4 mr-1" />
              <span>Code</span>
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <ExternalLink className="h-4 w-4 mr-1" />
              <span>Demo</span>
            </a>
          </Button>
          {project.infoPage && (
            <Button variant="secondary" size="sm" asChild className="w-full mt-2">
              <a
                href={project.infoPage}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                <span>Project Details</span>
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}


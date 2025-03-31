import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              <span className="text-gradient">Lakshya Kumar</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-1">ML Engineer & Full Stack Developer</p>
          </div>

          {/* Social links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://github.com/predator-911"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/lakshya-kumar-7b16252b4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a
              href="mailto:sharmalakshay0911@gmail.com"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">&copy; {currentYear} Lakshya Kumar. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}


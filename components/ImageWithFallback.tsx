"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

interface ImageWithFallbackProps extends Omit<ImageProps, "onError" | "src"> {
  src: string
  fallbackSrc?: string
  alt: string
}

/**
 * Enhanced Image component with fallback support
 *
 * This component extends Next.js Image component to provide fallback
 * functionality when the primary image fails to load.
 *
 * @param {string} src - Primary image source
 * @param {string} fallbackSrc - Fallback image source
 * @param {string} alt - Image alt text
 * @param {ImageProps} props - Standard Next.js Image props
 * @returns {JSX.Element} - Image component with fallback handling
 */
export default function ImageWithFallback({
  src,
  fallbackSrc = "/placeholder.svg?text=Image",
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      {...props}
      src={imgSrc || "/placeholder.svg"}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc)
      }}
    />
  )
}


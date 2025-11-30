"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Computer Science Student"
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.substring(0, textIndex + 1))
        setTextIndex(textIndex + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [textIndex])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float top-20 left-10" />
        <div
          className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float top-40 right-10"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl sm:text-7xl font-bold mb-4 text-foreground">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              {displayText}
            </span>
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-xl sm:text-2xl text-foreground/70 mb-8 leading-relaxed max-w-2xl mx-auto">
            Building elegant solutions through innovative technology. Passionate about web development, AI, and creating
            meaningful digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 active:scale-95">
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}

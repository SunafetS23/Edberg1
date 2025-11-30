"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a passionate computer science student dedicated to creating elegant and efficient solutions to complex
              problems. With a strong foundation in software development, I specialize in full-stack web development and
              AI applications.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My journey in tech has taught me the importance of clean code, user-centered design, and continuous
              learning. I thrive in collaborative environments and love contributing to open-source projects.
            </p>
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <span className="text-foreground/70">Problem Solving</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-accent rounded-full" />
                <span className="text-foreground/70">Innovation</span>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-2xl animate-glow" />
              <div className="relative bg-card border border-border rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg" />
                  <div>
                    <div className="h-4 bg-muted rounded w-3/4 mb-3" />
                    <div className="h-4 bg-muted rounded w-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

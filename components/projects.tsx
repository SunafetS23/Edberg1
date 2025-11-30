"use client"

import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "AI Chat Application",
    description: "Real-time chat application powered by AI with natural language processing capabilities.",
    tags: ["React", "Node.js", "MongoDB", "AI/ML"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and inventory management.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "TypeScript"],
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for analyzing and visualizing complex datasets in real-time.",
    tags: ["React", "D3.js", "Python", "REST API"],
    color: "from-secondary/20 to-secondary/5",
  },
  {
    title: "Social Media App",
    description: "Scalable social platform with real-time notifications and user interactions.",
    tags: ["React Native", "Firebase", "WebSocket", "Redux"],
    color: "from-primary/20 to-accent/20",
  },
]

export default function Projects() {
  // FIX 1: Add <HTMLElement> type to the ref
  const ref = useRef<HTMLElement>(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(projects.length).fill(false))

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // FIX 2: Get the specific index from the HTML attribute
            // We use generic 'getAttribute' and convert it to a Number
            const indexStr = entry.target.getAttribute("data-index")
            
            if (indexStr !== null) {
              const index = Number(indexStr)
              setVisibleCards((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
              
              // Optional: Stop observing once it's visible (for performance)
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = ref.current?.querySelectorAll("[data-card]")
    cards?.forEach((card) => observer.observe(card))
    
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Featured Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              data-card
              // FIX 3: Pass the index here so the observer can read it
              data-index={index}
              className={`group relative bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 group-hover:shadow-lg transition-all duration-300" />

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full group-hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                  <span className="font-semibold">View Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
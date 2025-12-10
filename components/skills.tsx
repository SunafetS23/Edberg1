"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    category: "Languages",
    skills: ["JavaScript", "Python", "Java", "C", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["HTML/CSS", "Tailwind CSS", "Responsive Design", "React"],
  },
  {
    category: "Design",
    skills: ["Figma", "Axure", "User Experience Design"],
  },
  {
    category: "Tools",
    skills: ["Google Document", "Canva", "RPG Maker"],
  },
]

export default function Skills() {
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Skills
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="text-lg font-bold text-primary mb-4">{category.category}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-foreground/80 group-hover:text-primary transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

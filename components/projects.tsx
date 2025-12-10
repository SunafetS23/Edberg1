"use client"

import { useEffect, useRef, useState } from "react"

const projects = [
  {
    title: "Comparative Study of Pre-Trained Models for BISINDO Sign Language Recognition",
    description: "This study aims to significantly advance digital accessibility for the Indonesian deaf community.",
    tags: ["Python"],
    year: "2025",
    link: "https://docs.google.com/document/d/1Wn5-boAS2AE2w3dDZtEkLRGVfg0h7K9V/edit?usp=sharing&ouid=104515886095957695066&rtpof=true&sd=true",
  },
  {
    title: "Multimedia Foundation Programming",
    description: "Making use of a multimedia components, in this case we make a video game.",
    tags: ["RPG maker", "Word"],
    year: "2025",
    link: "https://docs.google.com/document/d/1brkChDaaL3Kz8cfRS2AR_2bPktBGB71Qf5ObsjjHuRo/edit?usp=sharing",
  },
  {
    title: "Game Design Document: DELTA QUEST",
    description: "Making a blueprint for a video game development project.",
    tags: ["Google Document"],
    year: "2025",
    link: "https://docs.google.com/document/d/1Efatt0DO2J3_zMMRYAzHkGGC0WOvh8PVW4Dw4AyDFP0/edit?usp=sharing",
  },
  {
    title: "User Experience Project : Orpheus",
    description: "Designing a website for studying user experience.",
    tags: ["Axure"],
    year: "2025",
    link: "https://docs.google.com/document/d/1tkTkxSfnqNhSoWjpGTFPNZUoYDHbrhxXloGjm_Uhmss/edit?usp=sharing",
  },
  {
    title: "Software Engineer: LearnBuddy",
    description: "Designing and develop a website for studying user experience",
    tags: ["HTML", "CSS", "JavaScript", "Python", "Figma"],
    year: "2024",
    link: "https://docs.google.com/document/d/12X29XgQ1iIXZSU2ygEy5hBWyKavXLYoj0AdGKZspNQE/edit?usp=sharing",
  },
  {
    title: "Pneumonia Detection using Artificial Inteligent",
    description: "Making an AI for Pneumonia detection by sending X-ray photo.",
    tags: ["Python"],
    year: "2024",
    link: "https://docs.google.com/document/d/12X29XgQ1iIXZSU2ygEy5hBWyKavXLYoj0AdGKZspNQE/edit?usp=sharing",
  },
  {
    title: "Human and Computer Interaction Project",
    description: "Making a blueprint that design for studying human and computer interaction.",
    tags: ["Figma"],
    year: "2024",
    link: "https://docs.google.com/document/d/1yB8EVawJu2v4HZ5DxzZ-G6hre1Qyehd-NijzNflbo-U/edit?usp=sharing",
  },
  {
    title: "Entrepreneurship: Ideation  (MEOW RICE)",
    description: "Developing some innovative business ideas that solve a problem or capitalize on an opportunity.",
    tags: ["Canva"],
    year: "2023",
    link: "https://www.canva.com/design/DAGBcuIwiyQ/CUGRyNGFOU1ftT1BbaoJXw/edit?utm_content=DAGBcuIwiyQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(projects.length).fill(false))
  const [showAll, setShowAll] = useState(false)

  const initialDisplayCount = 4
  const displayedProjects = showAll ? projects : projects.slice(0, initialDisplayCount)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = ref.current?.querySelectorAll("[data-card]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [showAll])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Projects
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {displayedProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              data-card
              data-index={index}
              className={`group relative bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors flex-1">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-foreground ml-2 flex-shrink-0">{project.year}</span>
                </div>
                <p className="text-foreground/70 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full group-hover:bg-primary/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                  <span className="font-semibold">View Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {!showAll && projects.length > initialDisplayCount && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="group relative px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Show More Projects
                <svg
                  className="w-4 h-4 group-hover:translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </button>
          </div>
        )}

        {showAll && projects.length > initialDisplayCount && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(false)}
              className="group relative px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                Show Less
                <svg
                  className="w-4 h-4 group-hover:-translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

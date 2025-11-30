"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Get in Touch</span>
        </h2>

        <p className="text-center text-foreground/70 mb-12 text-lg">
          Have a project in mind? Let's create something amazing together.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
          <div>
            <label className="block text-foreground mb-2 font-medium">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="Your name"
              required
            />
          </div>

          <div>
            <label className="block text-foreground mb-2 font-medium">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-foreground mb-2 font-medium">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              placeholder="Your message"
              rows={5}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

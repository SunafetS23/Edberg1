import { Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/edberg-947011308/",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:edberg@binus.ac.id", 
      icon: Mail,
    },
  ]

  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">

          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Portfolio</h3>
            <p className="text-foreground/70">
              Innovating at the intersection of UI/UX Design, Game Design, and Web Development.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Projects", "Skills"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-foreground/70 hover:text-primary transition-colors block"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name === "Email" ? "_self" : "_blank"}
                  rel={social.name === "Email" ? "" : "noopener noreferrer"}
                  className="w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-foreground/60">
          <p>© {currentYear} Edberg - 2702245702 | BINUS University</p>
        </div>
      </div>
    </footer>
  )
}
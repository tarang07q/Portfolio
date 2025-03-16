import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Tarang_Bhargava</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <div className="ml-auto">
  <Link href="/TarangBhargava_resume.pdf" target="_blank">
    <Button variant="outline">Resume</Button>
  </Link>
</div>

        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Full Stack Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-center text-gray-500 md:text-xl dark:text-gray-400">
                  Hi, I'm <strong>Tarang Bhargava</strong>, a passionate Full Stack Developer dedicated to building digital experiences with modern technologies. I specialize in crafting elegant solutions to complex problems, leveraging both front-end and back-end expertise to create dynamic, responsive web applications that enhance user experience and drive innovation.
                </p>

              </div>
              <div className="space-x-5">
                <Link href="https://github.com/tarang07q" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/tarang-bhargava-400687269/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://twitter.com" target="_blank">
                  <Button variant="outline" size="icon">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
                <Link href="mailto:tarangbhargava09@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Trainify- A Fitness App"
                description="A fitness application that helps users track their workouts and details about them."
                image="https://private-user-images.githubusercontent.com/123387466/419128547-166be45f-1444-4f70-bf80-60b91b955db2.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIxMzU0MDQsIm5iZiI6MTc0MjEzNTEwNCwicGF0aCI6Ii8xMjMzODc0NjYvNDE5MTI4NTQ3LTE2NmJlNDVmLTE0NDQtNGY3MC1iZjgwLTYwYjkxYjk1NWRiMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxNlQxNDI1MDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04ZGQxM2VkOTZhOWIzYjA4OWEyZTdlMWZmOGFjZjFhZjY0N2M4YTFhNWE2NDY5ZTQ2YzMwNDc0MjRhMzQxN2MyJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.q9KHsYA7iOULEBKME2WV8fAaSPjHrGC5akn-qb5X3NM"
                link="https://github.com/tarang07q/Trainify"
                tags={["Next.js", "TypeScript", "Node.js"]}
              />
              <ProjectCard
                title="Red Light Traffic Violation and Number Plate Detecion"
                description="An autonomous traffic red-light violation detection system was built, which has the potential to significantly improve transportatsion management in smart cities."
                image="https://private-user-images.githubusercontent.com/123387466/410114860-be910a23-eda8-41ba-8674-11e9adfe6c90.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIxMzU1NzMsIm5iZiI6MTc0MjEzNTI3MywicGF0aCI6Ii8xMjMzODc0NjYvNDEwMTE0ODYwLWJlOTEwYTIzLWVkYTgtNDFiYS04Njc0LTExZTlhZGZlNmM5MC5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxNlQxNDI3NTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05NjBhZTA3OWM0MGNhMWUwZDkwMjYzYjE3MjgwMjMwMWU4MmM0MTJhZGY1ZjZiYTcxNjBhMDI3MDhlZDg0MjBlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.uiyU6uZguPsm8WgjTqR8bzUJogMO_3pdZVgzgkWtdLo"
                link="https://github.com/tarang07q/Red-Light-Traffic-Violation-and-Number-Plate-Detecion"
                tags={[" OpenCV", "Python", "MongoDB","C"]}
              />
              <ProjectCard
                title="Zoom Clone"
                description="Bringing seamless video conferencing to life! This project is a powerful Zoom-inspired application built using the latest web technologies."
                image="https://private-user-images.githubusercontent.com/123387466/411246695-fc4b037a-c9c8-4c00-aa4e-0fef4f4a5d21.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIxMzU3MTQsIm5iZiI6MTc0MjEzNTQxNCwicGF0aCI6Ii8xMjMzODc0NjYvNDExMjQ2Njk1LWZjNGIwMzdhLWM5YzgtNGMwMC1hYTRlLTBmZWY0ZjRhNWQyMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxNlQxNDMwMTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02MWU0OGQxNjAwNTZhM2E2M2UzYTFjMGQ4NGIwZGNlNWFjNzc5YTY3MGI5MzQ3ODQwZTE3OTllMTAwMTVmYTczJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.EGYXzSxY5L7Q_QBpjRjDLsGjPFMqp4nO7uFzxfXwi_c"
                link="https://github.com/tarang07q/Tardroid_zoom_clone"
                tags={["TypeScript", "Next.js", "CSS"]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}


"use client";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import EnhancedProjectCard from "./components/enhanced-project-card"
import TechStack from "./components/tech-stack"
import Icon3D from "./components/3d-icon"
import OptimizedImage from "./components/optimized-image"
import { useEffect, useState } from "react"
import { fetchGitHubRepos } from "@/lib/utils"

export default function Page() {

  return (
    <div className="min-h-screen bg-background relative">
      <div className="absolute inset-0 -z-10 h-full w-full">
        {/* Background that adapts to theme */}
        <div className="absolute inset-0 bg-[url('/images/light-bg.svg')] dark:bg-[url('/images/dark-bg.svg')] bg-cover bg-fixed opacity-[0.5] dark:opacity-[0.7]"></div>
      </div>

      <main>
        {/* Hero Section */}
        <section id="home" className="h-screen flex flex-col justify-center items-center px-8 py-8 md:py-16 lg:py-20 text-center">
          <div className="max-w-3xl mx-auto pt-0 md:pt-0 lg:pt-0 -mt-20">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 mt-0">Tarang Bhargava</h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-12">Full Stack Developer</h2>
            <p className="text-lg mb-14 mx-auto">
              A passionate Full Stack Developer dedicated to building digital experiences with modern technologies.
              I specialize in crafting elegant solutions to complex problems, leveraging both front-end and back-end
              expertise to create dynamic, responsive web applications.
            </p>
            <div className="flex gap-4 justify-center mb-4">
              <Link
                href="#projects"
                scroll={false}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Button size="lg" className="px-5 py-5 text-base">View Projects</Button>
              </Link>
              <Link
                href="#contact"
                scroll={false}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Button variant="outline" size="lg" className="px-5 py-5 text-base">Contact Me</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-4 md:py-6 lg:py-8 px-8 bg-muted/10 dark:bg-muted/5">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center gap-3 mb-2">
                <Icon3D icon="user" color="green" size={24} />
                <h2 className="text-3xl font-bold">About Me</h2>
              </div>
              <div className="h-1 w-20 bg-primary mt-3 rounded-full"></div>
              <p className="mt-3 text-muted-foreground text-center max-w-2xl">
                Learn more about my background, skills, and what drives me as a developer.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col space-y-3 text-center md:text-left">
                <p className="text-lg">
                  With a strong foundation in both design and logic, I ensure every project is efficient, scalable, and user-centric.
                  A passionate Full Stack Developer dedicated to building digital experiences with modern technologies. I specialize in crafting elegant solutions to complex problems, leveraging both front-end and back-end expertise to create dynamic, responsive web applications. I thrive in fast-paced environments where innovation meets functionality.
                </p>
                <p className="text-lg">
                  I'm a passionate Full Stack Developer based in Chennai, with expertise in modern web technologies and a focus on creating impactful digital solutions. My journey in software development has been driven by a desire to build applications that solve real-world problems.
                </p>

                <div className="pt-3 flex justify-center md:justify-start">
                  <Link
                    href="/TarangBhargava_resume.pdf"
                    target="_blank"
                  >
                    <Button variant="outline" className="flex items-center gap-2">
                      <Icon3D icon="resume" color="orange" size={16} />
                      <span>View Resume</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full h-[450px] rounded-lg overflow-hidden shadow-xl border-4 border-primary/20 dark:border-primary/10">
                  <OptimizedImage
                    src="/images/about-image.jpg"
                    alt="Tarang Bhargava"
                    fill
                    className="object-cover"
                    fallbackSrc="/images/about-image-placeholder.svg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-10 md:py-16 lg:py-20 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center gap-3 mb-2">
                <Icon3D icon="projects" color="purple" size={24} />
                <h2 className="text-3xl font-bold">Projects</h2>
              </div>
              <div className="h-1 w-20 bg-primary mt-3 rounded-full"></div>
              <p className="mt-3 text-muted-foreground text-center max-w-2xl">
                Explore my portfolio of projects showcasing my skills in web development,
                data visualization and application design.
              </p>
            </div>

            {/* Dynamic Projects from GitHub */}
            <DynamicProjectList />
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-10 md:py-16 lg:py-20 px-8 bg-muted/10 dark:bg-muted/5">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center gap-3 mb-2">
                <Icon3D icon="code" color="indigo" size={24} />
                <h2 className="text-3xl font-bold">Tech Stack</h2>
              </div>
              <div className="h-1 w-20 bg-primary mt-3 rounded-full"></div>
              <p className="mt-3 text-muted-foreground text-center max-w-2xl">
                The technologies and tools I use to bring ideas to life.
              </p>
            </div>
            <TechStack />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-8 md:py-12 lg:py-16 px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-6">
              <div className="flex items-center gap-3 mb-2">
                <Icon3D icon="contact" color="pink" size={24} />
                <h2 className="text-3xl font-bold">Get in Touch</h2>
              </div>
              <div className="h-1 w-20 bg-primary mt-2 rounded-full"></div>
              <p className="mt-2 text-muted-foreground text-center max-w-2xl">
                Have a project in mind or want to discuss opportunities? I'd love to hear from you.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>


    </div>
  )
}

function DynamicProjectList() {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchGitHubRepos("tarang07q")
      .then((data) => {
        // Filter out forked and archived repos, and sort by stargazers
        setRepos(
          data
            .filter((repo: any) => !repo.fork && !repo.archived)
            .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
        );
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load projects from GitHub.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-8">Loading projects...</div>;
  if (error) return <div className="text-center text-red-500 py-8">{error}</div>;
  if (!repos.length) return <div className="text-center py-8">No projects found.</div>;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
      {repos.map((repo) => (
        <div key={repo.name} className="flex flex-col h-full">
          <EnhancedProjectCard
            title={repo.name.replace(/[-_]/g, ' ')}
            description={repo.description || "No description provided."}
            link={repo.html_url}
            tags={repo.topics?.length ? repo.topics : [repo.language].filter(Boolean)}
            imageUrl="/Portfolio/images/project-placeholder.svg"
          />
          <div className="flex justify-center mt-2">
            <Link href={`/projects/${repo.name}`}>
              <Button variant="outline" size="sm">View Details</Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}


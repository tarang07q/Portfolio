import { Card } from "@/components/ui/card"
import Icon3D from "./3d-icon"

const technologies = [
  {
    category: "Frontend",
    icon: "code",
    color: "blue",
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux", "GraphQL", "HTML5", "CSS3", "JavaScript"],
  },
  {
    category: "Backend",
    icon: "server",
    color: "green",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "Firebase", "REST API", "GraphQL API"],
  },
  {
    category: "DevOps & Cloud",
    icon: "cloud",
    color: "indigo",
    skills: ["Docker", "AWS", "CI/CD", "Git", "GitHub Actions", "Vercel", "Netlify", "Digital Ocean"],
  },
  {
    category: "Tools & Design",
    icon: "tools",
    color: "purple",
    skills: ["VS Code", "Postman", "Figma", "GitHub", "Jira", "Notion", "Adobe XD", "Responsive Design"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6 border border-primary/10 dark:border-primary/5 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full p-2 bg-muted">
              <Icon3D icon={tech.icon} color={tech.color} size={20} />
            </div>
            <h3 className="text-xl font-semibold">{tech.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 dark:bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary dark:text-primary/90 ring-1 ring-inset ring-primary/20 dark:ring-primary/10 mb-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}


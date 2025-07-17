import { fetchGitHubRepoDetails, fetchGitHubRepoReadme } from "@/lib/utils";
import OptimizedImage from "@/app/components/optimized-image";
import Link from "next/link";
import { ArrowLeftIcon, StarIcon } from "@radix-ui/react-icons";

export default async function ProjectDetailPage({ params }: { params: { repo: string } }) {
  const username = "tarang07q";
  const repoName = params.repo;

  let repo: any = null;
  let readme: string | null = null;
  try {
    repo = await fetchGitHubRepoDetails(username, repoName);
    readme = await fetchGitHubRepoReadme(username, repoName);
  } catch (e) {
    return <div className="max-w-2xl mx-auto py-16 text-center text-red-500">Project not found or failed to load.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-2">
              <ArrowLeftIcon className="mr-1" /> Back to Projects
            </Link>
          </div>
          <h1 className="text-4xl font-bold mb-2">{repo.name.replace(/[-_]/g, ' ')}</h1>
          <p className="text-muted-foreground mb-2">{repo.description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {repo.topics?.map((topic: string) => (
              <span key={topic} className="inline-block bg-primary/10 px-3 py-1 rounded text-primary text-xs font-medium">{topic}</span>
            ))}
            {repo.language && (
              <span className="inline-block bg-primary/10 px-3 py-1 rounded text-primary text-xs font-medium">{repo.language}</span>
            )}
          </div>
          <div className="flex flex-wrap gap-4 items-center text-sm mb-2">
            <span title="Stars" className="flex items-center gap-1"><StarIcon /> {repo.stargazers_count}</span>
            <span title="Forks" className="flex items-center gap-1">🍴 {repo.forks_count}</span>
            <span title="Open Issues" className="flex items-center gap-1">🐞 {repo.open_issues_count}</span>
            {repo.license && <span title="License" className="flex items-center gap-1">📄 {repo.license.name}</span>}
            <span title="Last Updated" className="flex items-center gap-1">🕒 {new Date(repo.updated_at).toLocaleDateString()}</span>
          </div>
          <div className="flex flex-wrap gap-3 mb-2">
            {repo.homepage && (
              <Link href={repo.homepage} target="_blank" className="text-blue-600 underline text-sm">Live Demo</Link>
            )}
            <Link href={repo.html_url} target="_blank" className="text-primary underline text-sm">View on GitHub</Link>
          </div>
        </div>
        <div className="w-full md:w-48 h-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden border border-primary/10">
          <OptimizedImage
            src="/Portfolio/images/project-placeholder.svg"
            alt={repo.name}
            fill
            className="object-cover"
            fallbackSrc="/Portfolio/images/project-placeholder.svg"
          />
        </div>
      </div>
      <div className="prose dark:prose-invert max-w-none">
        {readme ? <MarkdownRenderer content={readme} /> : <p>No README available.</p>}
      </div>
    </div>
  );
}

// Simple Markdown renderer using next/dynamic to avoid SSR issues
import dynamic from "next/dynamic";
const MarkdownRenderer = dynamic(() => import("@/app/components/markdown-renderer"), { ssr: false }); 
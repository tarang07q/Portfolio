import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Fetch public repositories for a given GitHub username
export async function fetchGitHubRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
  if (!res.ok) throw new Error('Failed to fetch GitHub repos');
  return res.json();
}

// Fetch details for a specific repository
export async function fetchGitHubRepoDetails(username: string, repo: string) {
  const res = await fetch(`https://api.github.com/repos/${username}/${repo}`);
  if (!res.ok) throw new Error('Failed to fetch GitHub repo details');
  return res.json();
}

// Fetch README for a specific repository
export async function fetchGitHubRepoReadme(username: string, repo: string) {
  const res = await fetch(`https://api.github.com/repos/${username}/${repo}/readme`, {
    headers: { Accept: 'application/vnd.github.v3.raw' }
  });
  if (!res.ok) return null;
  return res.text();
}

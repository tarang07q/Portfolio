import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./styles.css"
import type React from "react"
import { SidebarLayout } from "./components/sidebar-layout"
import ClientWrapper from "./components/client-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tarang Bhargava - Full Stack Developer",
  description: "Full stack developer portfolio showcasing projects and skills"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href={process.env.NODE_ENV === 'production' ? '/Portfolio/images/about-image.jpg' : '/images/about-image.jpg'} as="image" />
        <link rel="preload" href={process.env.NODE_ENV === 'production' ? '/Portfolio/images/profile.png' : '/images/profile.png'} as="image" />
        <link rel="preload" href={process.env.NODE_ENV === 'production' ? '/Portfolio/images/amazer.jpg' : '/images/amazer.jpg'} as="image" />
        <link rel="preload" href={process.env.NODE_ENV === 'production' ? '/Portfolio/images/fintrack.jpg' : '/images/fintrack.jpg'} as="image" />
        <link rel="preload" href={process.env.NODE_ENV === 'production' ? '/Portfolio/images/sustainable.jpg' : '/images/sustainable.jpg'} as="image" />

        {/* Add inline styles for GitHub Pages */}
        <style dangerouslySetInnerHTML={{ __html: `
          @import url('${process.env.NODE_ENV === 'production' ? '/Portfolio/globals.css' : '/globals.css'}');
          @import url('${process.env.NODE_ENV === 'production' ? '/Portfolio/styles.css' : '/styles.css'}');

          /* Fallback styles in case CSS files don't load */
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
            color: #333;
          }

          .dark body {
            background-color: #1a1a1a;
            color: #f5f5f5;
          }

          a { color: #0070f3; text-decoration: none; }
          a:hover { text-decoration: underline; }

          .dark a { color: #3b82f6; }
        `}} />

        {/* Add direct CSS links and base tag only for GitHub Pages */}
        {process.env.GITHUB_PAGES === 'true' && (
          <>
            <link rel="stylesheet" href="/Portfolio/globals.css" />
            <link rel="stylesheet" href="/Portfolio/styles.css" />
            <base href="/Portfolio/" />
          </>
        )}
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ClientWrapper>
            <SidebarLayout>
              {children}
            </SidebarLayout>
          </ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
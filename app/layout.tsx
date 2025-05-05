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
        <link rel="preload" href="/images/about-image.png" as="image" />
        <link rel="preload" href="/images/profile.png" as="image" />
        <link rel="preload" href="/images/amazer.jpg" as="image" />
        <link rel="preload" href="/images/fintrack.jpg" as="image" />
        <link rel="preload" href="/images/sustainable.jpg" as="image" />
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
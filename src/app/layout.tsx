import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-Portfolio | Your Name',
  description: 'Professional portfolio showcasing my work, skills, and experience as a developer.',
  keywords: ['portfolio', 'web developer', 'full stack', 'react', 'nextjs'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'E-Portfolio | Your Name',
    description: 'Professional portfolio showcasing my work, skills, and experience as a developer.',
    siteName: 'Your Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-Portfolio | Your Name',
    description: 'Professional portfolio showcasing my work, skills, and experience as a developer.',
    creator: '@yourusername',
  },
}

/**
 * Root layout component that wraps all pages
 * Provides consistent structure and metadata across the application
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {/* Main content wrapper */}
        <div className="min-h-screen bg-white dark:bg-gray-900">
          {children}
        </div>
      </body>
    </html>
  )
}

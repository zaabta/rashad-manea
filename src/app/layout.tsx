import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'رشاد مانع | مستشار وقيادي تنفيذي',
  description: 'الموقع التنفيذي للمستشار والقيادي رشاد مانع في التخطيط الاستراتيجي والنظم المعلوماتية وإدارة العمليات.',
  keywords: ['رشاد مانع', 'استشارات إدارية', 'تخطيط استراتيجي', 'نظم معلومات', 'إدارة المستشفيات'],
  authors: [{ name: 'رشاد مانع' }],
  creator: 'رشاد مانع',
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    title: 'رشاد مانع | مستشار وقيادي تنفيذي',
    description: 'الخبرة التنفيذية في التخطيط الاستراتيجي والنظم المعلوماتية وإدارة العمليات.',
    siteName: 'رشاد مانع',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'رشاد مانع | مستشار وقيادي تنفيذي',
    description: 'الخبرة التنفيذية في التخطيط الاستراتيجي والنظم المعلوماتية وإدارة العمليات.',
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
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className="antialiased">
        {/* Main content wrapper */}
        <div className="min-h-screen bg-slate-50 text-slate-900">
          {children}
        </div>
      </body>
    </html>
  )
}

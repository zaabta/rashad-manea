import './globals.css'
import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rashadmane.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'رشاد مانع | مستشار وقيادي تنفيذي | تخطيط استراتيجي وإدارة مستشفيات',
    template: '%s | رشاد مانع - مستشار وقيادي تنفيذي',
  },
  description: 'الموقع الرسمي للمستشار والقيادي التنفيذي رشاد مانع. خبرة تتجاوز 30 عاماً في التخطيط الاستراتيجي، النظم الإحصائية والمعلوماتية، إدارة المستشفيات، والعلاقات الحكومية للمنظمات الدولية (Save the Children).',
  keywords: [
    'رشاد مانع', 'مستشار إداري الرياض', 'قيادي تنفيذي السعودية', 'تخطيط استراتيجي ومؤشرات أداء',
    'إدارة مستشفيات ومراكز صحية', 'نظم معلومات وإحصاء', 'علاقات حكومية INGOs', 'Rashad Mane',
    'Executive Consultant Riyadh', 'Strategic Planning Consultant', 'Hospital Management Consultant Saudi Arabia',
    'INGO Compliance Yemen Saudi',
  ],
  authors: [{ name: 'رشاد مانع' }],
  creator: 'رشاد مانع',
  alternates: {
    canonical: siteUrl,
    languages: {
      'ar-SA': siteUrl,
      'en-US': `${siteUrl}/?lang=en`,
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    locale: 'ar_SA',
    title: 'رشاد مانع | مستشار وقيادي تنفيذي',
    description: '30+ عاماً من الريادة في التخطيط الاستراتيجي، القيادة التشغيلية للمستشفيات، والنظم الإحصائية.',
    siteName: 'رشاد مانع',
    images: [{ url: '/images/og-banner.jpg', width: 1200, height: 630, alt: 'رشاد مانع - مستشار وقيادي تنفيذي' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'رشاد مانع | مستشار وقيادي تنفيذي',
    description: '30+ عاماً من الريادة في التخطيط الاستراتيجي، القيادة التشغيلية للمستشفيات، والنظم الإحصائية.',
    images: ['/images/og-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'رشاد مانع',
  alternateName: 'Rashad Mane',
  jobTitle: 'مستشار وقيادي تنفيذي',
  url: siteUrl,
  email: 'mailto:Rashadmane@gmail.com',
  telephone: '+966595342015',
  address: { '@type': 'PostalAddress', addressLocality: 'الرياض', addressCountry: 'SA' },
  worksFor: { '@type': 'Organization', name: 'المعهد الوطني للعلوم الإدارية' },
  knowsAbout: ['Strategic Planning', 'Hospital Administration', 'Information Systems', 'Statistical Analysis', 'INGO Compliance'],
  sameAs: ['https://www.linkedin.com/in/rashad-manea-a7224b2b7/'],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'رشاد مانع | مستشار وقيادي تنفيذي',
  alternateName: 'Rashad Mane Executive Consultant',
  url: siteUrl,
  inLanguage: ['ar-SA', 'en-US'],
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
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
    <html lang="ar" dir="rtl" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, websiteSchema]) }}
        />
        {/* Main content wrapper */}
        <div className="min-h-screen bg-slate-50 text-slate-900">
          {children}
        </div>
      </body>
    </html>
  )
}

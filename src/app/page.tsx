import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

/**
 * Main portfolio page component
 * Renders all sections of the portfolio in sequence
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation Header */}
      <Header />
      
      {/* Main Content Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}

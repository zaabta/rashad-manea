'use client'

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo, contactInfo } from '@/data'
import Image from 'next/image'

/**
 * Hero section component
 * Main landing section with introduction and call-to-action
 */
export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-400 rounded-full animate-bounce-gentle" />
        <div className="absolute top-32 right-20 w-16 h-16 bg-accent-400 rounded-full animate-bounce-gentle" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-primary-600 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-accent-300 rounded-full animate-bounce-gentle" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container-max-width section-padding relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in">
              <h2 className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-medium mb-4">
                Hello, I&apos;m
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
                <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <h3 className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-medium mb-6">
                {personalInfo.title}
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
                {personalInfo.bio}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a href="#projects" className="btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn-secondary">
                  Discuss Opportunities
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-6">
                {contactInfo.github && (
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                )}
                {contactInfo.linkedin && (
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                )}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-slide-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                <Image
                  src={personalInfo.image}
                  alt={personalInfo.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-primary-400 opacity-20 scale-110 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <button
            onClick={scrollToAbout}
            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}

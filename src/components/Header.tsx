'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslation } from '@/contexts/I18nContext'
import LanguageSwitcher from './LanguageSwitcher'
import DownloadCvButton from '@/components/ui/DownloadCvButton'

/**
 * Header component with responsive navigation and i18n support
 * Includes mobile menu, scroll-based styling, and language switcher
 */
export default function Header() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Navigation menu items with translations
  const navItems = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.skills'), href: '#skills' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.contact'), href: '#contact' },
  ]

  // Handle scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container-max-width section-padding">
        <nav className="flex items-center justify-between py-4">
          {/* Logo/Name */}
          <div className="flex items-center flex-shrink-0">
            <div className="text-xl font-bold gradient-text" aria-label={t('ui.name')}>
              {t('ui.name')}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-end gap-4 lg:gap-5 flex-1 min-w-0">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm lg:text-base text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
            
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Resume Download Button */}
            <DownloadCvButton variant="primary" className="shrink-0" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={t('ui.toggleMenu')}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
            <div className="py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium"
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="py-3 border-t border-gray-200 dark:border-gray-700 mt-3">
                <LanguageSwitcher />
              </div>
              
              {/* Mobile Resume Button */}
              <div className="mt-4" onClick={handleNavClick}>
                <DownloadCvButton variant="primary" className="w-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

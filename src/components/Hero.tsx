'use client'

import { Linkedin, Mail, MapPin } from 'lucide-react'
import { useTranslation } from '@/contexts/I18nContext'
import { personalInfo, contactInfo } from '@/data'
import Image from 'next/image'
import DownloadCvButton from '@/components/ui/DownloadCvButton'

/**
 * Hero section component with i18n support
 * Main landing section with introduction and call-to-action
 */
export default function Hero() {
  const { t, language } = useTranslation()
  
  return (
    <section
      id="home"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
      className="min-h-screen pt-24 lg:pt-32 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-400 rounded-full animate-bounce-gentle" />
        <div className="absolute top-32 right-20 w-16 h-16 bg-accent-400 rounded-full animate-bounce-gentle" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-primary-600 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-accent-300 rounded-full animate-bounce-gentle" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container-max-width section-padding z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className={`flex-1 text-center ${language === 'ar' ? 'lg:text-right' : 'lg:text-left'}`}>
            <div className="animate-fade-in">
              <h2 className="text-lg md:text-xl text-accent-600 font-semibold mb-4">
                {t('ui.executive')}
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
                <span className="gradient-text">{t('ui.name')}</span>
              </h1>
              <h3 className="text-xl md:text-2xl lg:text-3xl text-primary-800 font-semibold mb-6">
                {t('hero.title')}
              </h3>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl leading-relaxed">
                {t('hero.subtitle')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a href="#contact" className="btn-primary flex w-full items-center justify-center sm:w-64">
                  {t('hero.cta')}
                </a>
                <DownloadCvButton variant="secondary" className="h-full w-full sm:w-64" />
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 transition-colors hover:text-primary-700"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary-700 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} /> {contactInfo.email}
                </a>
                <span className="flex items-center gap-2 text-gray-600"><MapPin size={20} /> {contactInfo.location}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-10 max-w-2xl">
                {[
                  ['+30', t('ui.stat1')],
                  ['+500', t('ui.stat2')],
                  ['+100', t('ui.stat3')],
                  ['+6', t('ui.stat4')],
                ].map(([value, label]) => (
                  <div key={value} className={`rounded-xl border border-accent-200 bg-white/80 p-4 shadow-sm ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                    <div className="text-2xl font-black text-accent-600">{value}</div>
                    <div className="text-xs text-gray-600 mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 animate-slide-in">
            <div className="relative w-72 h-72 lg:w-[30rem] lg:h-[30rem] rounded-full overflow-hidden border-[12px] border-white shadow-2xl">
              <Image
                src={personalInfo.image}
                alt="رشاد مانع - مستشار وقيادي تنفيذي"
                fill
                priority
                sizes="(max-width: 1024px) 18rem, 30rem"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-accent-400/60" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

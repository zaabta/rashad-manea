'use client'

import { User, Heart, Coffee, Code } from 'lucide-react'
import { useTranslation } from '@/contexts/I18nContext'
import { personalInfo, education } from '@/data'

/**
 * About section component with i18n support
 * Personal introduction and education background
 */
export default function About() {
  const { t } = useTranslation()
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-max-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <User className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Personal Story</h3>
              </div>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {t('about.intro')}
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {t('about.approach')}
                </p>
              </div>
            </div>

            {/* Fun Facts */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Fun Facts</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                  <Coffee className="text-primary-600 dark:text-primary-400 mx-auto mb-2" size={32} />
                  <p className="font-semibold text-2xl text-primary-600 dark:text-primary-400">500+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Students Taught</p>
                </div>
                <div className="text-center p-4 bg-accent-50 dark:bg-accent-900/20 rounded-xl">
                  <Code className="text-accent-600 dark:text-accent-400 mx-auto mb-2" size={32} />
                  <p className="font-semibold text-2xl text-accent-600 dark:text-accent-400">1000+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Hours of Teaching</p>
                </div>
                <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                  <Heart className="text-red-500 mx-auto mb-2" size={32} />
                  <p className="font-semibold text-2xl text-red-500">∞</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Love for Education</p>
                </div>
                <div className="text-center p-4 bg-accent-50 dark:bg-accent-900/20 rounded-xl">
                  <User className="text-accent-600 dark:text-accent-400 mx-auto mb-2" size={32} />
                  <p className="font-semibold text-2xl text-accent-600 dark:text-accent-400">24/7</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Always Learning</p>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Achievements */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">Education & Certifications</h3>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.id} className="border-l-4 border-primary-400 pl-6 pb-6 last:pb-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">{edu.institution}</p>
                    <p className="text-gray-500 dark:text-gray-500 mb-2">{edu.field}</p>
                    {edu.gpa && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">GPA: {edu.gpa}</p>
                    )}
                    {edu.description && (
                      <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* What I Do */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-primary-100 dark:bg-primary-900 rounded-lg mt-1">
                    <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">Curriculum Development</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Designing engaging, standards-aligned curricula that meet diverse student needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-primary-100 dark:bg-primary-900 rounded-lg mt-1">
                    <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">Student Assessment & Data Analysis</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Using formative and summative assessments to track progress and inform instruction
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-1 bg-primary-100 dark:bg-primary-900 rounded-lg mt-1">
                    <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">Educational Technology Integration</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Leveraging technology tools to enhance learning experiences and student engagement
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

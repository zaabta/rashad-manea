'use client'

import { Calendar, MapPin, Building } from 'lucide-react'
import { useTranslation } from '@/contexts/I18nContext'
import { experience } from '@/data'

/**
 * Experience section component with i18n support
 * Displays work experience in a timeline format
 */
export default function Experience() {
  const { t } = useTranslation()
  
  return (
    <section id="experience" className="py-20">
      <div className="container-max-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('experience.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute right-2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-400 to-accent-400"></div>

            {experience.map((job, index) => (
              <div key={job.id} className="relative pr-8 pb-8 sm:pr-20 sm:pb-12 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute right-0.5 top-2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>

                {/* Experience card */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg card-hover">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {job.position}
                      </h3>
                      <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium mb-1">
                        <Building size={16} />
                        {job.company}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {job.startDate}{job.endDate ? ` - ${job.endDate}` : ` - ${t('ui.present')}`}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium capitalize">
                        {job.type === 'contract' ? t('ui.contract') : t('ui.executiveType')}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Key Responsibilities */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      {t('ui.responsibilities')}
                    </h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                      {t('ui.workAreas')}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-accent-100 dark:bg-accent-900 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Career Highlights */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-center mb-8">{t('ui.careerHighlights')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">+30</div>
              <div className="text-gray-600 dark:text-gray-400">{t('ui.leadershipYears')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400">{t('ui.trainedShort')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-400">{t('ui.reportsShort')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">+6</div>
              <div className="text-gray-600 dark:text-gray-400">{t('ui.internationalCompliance')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { skills } from '@/data'
import { useTranslation } from '@/contexts/I18nContext'
import { Code, Database, Server, Wrench } from 'lucide-react'

/**
 * Skills section component with i18n support
 * Displays technical skills organized by category with progress bars
 */
export default function Skills() {
  const { t } = useTranslation()
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  // Category icons and labels for teaching portfolio
  const categoryInfo = {
    frontend: { icon: Code, label: t('ui.planning'), iconBg: 'bg-primary-100', iconText: 'text-primary-600', bar: 'from-primary-500 to-primary-700' },
    backend: { icon: Server, label: t('ui.systems'), iconBg: 'bg-accent-100', iconText: 'text-accent-600', bar: 'from-accent-500 to-accent-700' },
    database: { icon: Database, label: t('ui.finance'), iconBg: 'bg-primary-100', iconText: 'text-primary-600', bar: 'from-primary-500 to-primary-700' },
    tools: { icon: Wrench, label: t('ui.relations'), iconBg: 'bg-accent-100', iconText: 'text-accent-600', bar: 'from-accent-500 to-accent-700' },
    other: { icon: Code, label: t('ui.competencies'), iconBg: 'bg-primary-100', iconText: 'text-primary-600', bar: 'from-primary-500 to-primary-700' },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container-max-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
            const { icon: Icon, label, iconBg, iconText, bar } = categoryInfo[category as keyof typeof categoryInfo]
            
            return (
              <div key={category} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg card-hover">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 ${iconBg} rounded-xl`}>
                    <Icon className={iconText} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{label}</h3>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-900 dark:text-gray-100">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`bg-gradient-to-r ${bar} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Skills Info */}
        <div className="mt-12 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">{t('ui.executiveMethod')}</h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t('ui.methodText')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">+30</div>
              <div className="text-gray-600 dark:text-gray-400">{t('ui.experienceYears')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400">{t('ui.trainedShort')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">∞</div>
              <div className="text-gray-600 dark:text-gray-400">{t('ui.reportsShort')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

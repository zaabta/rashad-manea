'use client'

import { useState } from 'react'
import { Briefcase, Filter } from 'lucide-react'
import { useTranslation } from '@/contexts/I18nContext'
import { projects } from '@/data'

/**
 * Projects section component with i18n support
 * Showcases portfolio projects with filtering and detailed information
 */
export default function Projects() {
  const { t } = useTranslation()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  // Get unique categories
  const categories = ['all']

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  // Sort projects to show featured ones first
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container-max-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <Filter size={16} />
                {category === 'all' ? t('ui.allServices') : category}
              </div>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {sortedProjects.map((project) => (
            <div
              key={project.id}
              className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {t('ui.consultingService')}
                  </span>
                </div>
              )}

              {/* Service visual */}
              <div className="relative h-40 overflow-hidden bg-primary-900 flex items-center justify-center">
                <Briefcase className="text-accent-400" size={56} strokeWidth={1.2} />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 to-accent-900/30" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* No projects message */}
        {sortedProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">
              {t('ui.noServices')}
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">
              {t('ui.consultationPartner')}
            </h3>
            <p className="mb-6 text-primary-100">
              {t('ui.consultationText')}
            </p>
            <a href="#contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
              {t('ui.requestConsultation')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

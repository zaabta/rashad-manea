'use client'

import { skills } from '@/data'
import { Code, Database, Server, Wrench } from 'lucide-react'

/**
 * Skills section component
 * Displays technical skills organized by category with progress bars
 */
export default function Skills() {
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
    frontend: { icon: Code, label: 'Teaching & Pedagogy', color: 'primary' },
    backend: { icon: Server, label: 'Technology Integration', color: 'accent' },
    database: { icon: Database, label: 'Subject Expertise', color: 'primary' },
    tools: { icon: Wrench, label: 'Professional Skills', color: 'accent' },
    other: { icon: Code, label: 'Other', color: 'primary' },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container-max-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
            const { icon: Icon, label, color } = categoryInfo[category as keyof typeof categoryInfo]
            
            return (
              <div key={category} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg card-hover">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-${color}-100 dark:bg-${color}-900 rounded-xl`}>
                    <Icon className={`text-${color}-600 dark:text-${color}-400`} size={24} />
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
                          className={`bg-gradient-to-r from-${color}-500 to-${color}-600 h-2 rounded-full transition-all duration-1000 ease-out`}
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
            <h3 className="text-2xl font-semibold mb-4">Always Learning</h3>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Education is constantly evolving, and I&apos;m committed to staying current with the latest 
              pedagogical approaches, educational technologies, and research-based practices. I regularly 
              attend conferences, pursue professional development opportunities, and collaborate with 
              fellow educators to continuously improve my teaching effectiveness.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Years Teaching Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-400">Students Taught</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">∞</div>
              <div className="text-gray-600 dark:text-gray-400">Passion for Education</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

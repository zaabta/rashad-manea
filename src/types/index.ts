/**
 * Type definitions for the portfolio application
 */

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  category: 'web' | 'mobile' | 'desktop' | 'other'
}

export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  description: string
  responsibilities: string[]
  technologies: string[]
  location: string
  type: 'full-time' | 'part-time' | 'contract' | 'freelance' | 'internship'
}

export interface Skill {
  id: string
  name: string
  level: number // 1-100
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other'
  icon?: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate: string
  gpa?: string
  description?: string
}

export interface ContactInfo {
  email: string
  phone?: string
  location: string
  linkedin?: string
  github?: string
  twitter?: string
  website?: string
}

export interface PersonalInfo {
  name: string
  title: string
  bio: string
  image: string
  resume?: string
}

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

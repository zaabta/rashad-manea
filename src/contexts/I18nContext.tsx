'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

// Translation data
const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills", 
      projects: "Projects",
      experience: "Experience",
      contact: "Contact"
    },
    hero: {
      title: "Passionate Educator & Learning Facilitator",
      subtitle: "Inspiring minds and fostering growth through innovative teaching methods",
      cta: "View My Work"
    },
    about: {
      title: "About Me",
      subtitle: "Dedicated to transforming education through innovative teaching methods",
      intro: "With over 8 years of experience in education, I am passionate about creating inclusive learning environments that inspire students to reach their full potential. My teaching philosophy centers on student-centered learning, differentiated instruction, and the integration of technology to enhance educational outcomes.",
      philosophy: "Teaching Philosophy",
      philosophyText: "I believe that every student has unique strengths and learning styles. My approach focuses on creating engaging, interactive lessons that cater to diverse learning needs while fostering critical thinking and creativity.",
      approach: "My Approach", 
      approachText: "I integrate modern pedagogical techniques with traditional teaching methods, utilizing technology and hands-on activities to create meaningful learning experiences that prepare students for the 21st century."
    },
    skills: {
      title: "Teaching Skills & Expertise",
      subtitle: "Core competencies that drive effective education"
    },
    projects: {
      title: "Educational Projects & Achievements", 
      subtitle: "Innovative teaching initiatives and curriculum development"
    },
    experience: {
      title: "Teaching Experience",
      subtitle: "Professional journey in education"
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Ready to make a difference in education together",
      namePlaceholder: "Your Name",
      emailPlaceholder: "your.email@example.com", 
      messagePlaceholder: "Tell me about your educational needs or opportunities...",
      send: "Send Message"
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Building bridges to knowledge and success."
    },
    language: {
      english: "English",
      chinese: "中文", 
      french: "Français"
    }
  },
  zh: {
    nav: {
      about: "关于我",
      skills: "技能",
      projects: "项目", 
      experience: "经验",
      contact: "联系"
    },
    hero: {
      title: "充满激情的教育工作者与学习促进者",
      subtitle: "通过创新教学方法启发心智，促进成长",
      cta: "查看我的作品"
    },
    about: {
      title: "关于我",
      subtitle: "致力于通过创新教学方法变革教育",
      intro: "拥有8年以上的教育经验，我热衷于创造包容性的学习环境，激励学生发挥其全部潜力。我的教学理念以学生为中心，注重差异化教学，并整合技术来提升教育成果。",
      philosophy: "教学理念",
      philosophyText: "我相信每个学生都有独特的优势和学习方式。我的方法专注于创造引人入胜的互动课程，满足多样化的学习需求，同时培养批判性思维和创造力。",
      approach: "我的方法",
      approachText: "我将现代教学技术与传统教学方法相结合，利用技术和实践活动创造有意义的学习体验，为学生适应21世纪做好准备。"
    },
    skills: {
      title: "教学技能与专长",
      subtitle: "推动有效教育的核心能力"
    },
    projects: {
      title: "教育项目与成就",
      subtitle: "创新教学倡议和课程开发"
    },
    experience: {
      title: "教学经验", 
      subtitle: "教育领域的职业历程"
    },
    contact: {
      title: "联系我",
      subtitle: "准备好一起在教育领域发挥作用",
      namePlaceholder: "您的姓名",
      emailPlaceholder: "your.email@example.com",
      messagePlaceholder: "告诉我您的教育需求或机会...",
      send: "发送消息"
    },
    footer: {
      rights: "版权所有。",
      tagline: "架起通往知识与成功的桥梁。"
    },
    language: {
      english: "English",
      chinese: "中文",
      french: "Français"
    }
  },
  fr: {
    nav: {
      about: "À propos",
      skills: "Compétences", 
      projects: "Projets",
      experience: "Expérience",
      contact: "Contact"
    },
    hero: {
      title: "Éducateur Passionné & Facilitateur d'Apprentissage",
      subtitle: "Inspirer les esprits et favoriser la croissance grâce à des méthodes d'enseignement innovantes",
      cta: "Voir Mon Travail"
    },
    about: {
      title: "À Propos de Moi",
      subtitle: "Dédié à transformer l'éducation grâce à des méthodes d'enseignement innovantes",
      intro: "Avec plus de 8 ans d'expérience dans l'éducation, je suis passionné par la création d'environnements d'apprentissage inclusifs qui inspirent les étudiants à atteindre leur plein potentiel. Ma philosophie d'enseignement se centre sur l'apprentissage centré sur l'étudiant, l'instruction différenciée, et l'intégration de la technologie pour améliorer les résultats éducatifs.",
      philosophy: "Philosophie d'Enseignement",
      philosophyText: "Je crois que chaque étudiant a des forces uniques et des styles d'apprentissage. Mon approche se concentre sur la création de leçons engageantes et interactives qui répondent aux besoins d'apprentissage divers tout en favorisant la pensée critique et la créativité.",
      approach: "Mon Approche",
      approachText: "J'intègre les techniques pédagogiques modernes avec les méthodes d'enseignement traditionnelles, utilisant la technologie et les activités pratiques pour créer des expériences d'apprentissage significatives qui préparent les étudiants pour le 21ème siècle."
    },
    skills: {
      title: "Compétences & Expertise Pédagogiques",
      subtitle: "Compétences clés qui favorisent une éducation efficace"
    },
    projects: {
      title: "Projets Éducatifs & Réalisations",
      subtitle: "Initiatives d'enseignement innovantes et développement de programmes"
    },
    experience: {
      title: "Expérience d'Enseignement",
      subtitle: "Parcours professionnel dans l'éducation"
    },
    contact: {
      title: "Contactez-Moi",
      subtitle: "Prêt à faire une différence dans l'éducation ensemble",
      namePlaceholder: "Votre Nom", 
      emailPlaceholder: "votre.email@exemple.com",
      messagePlaceholder: "Parlez-moi de vos besoins éducatifs ou opportunités...",
      send: "Envoyer le Message"
    },
    footer: {
      rights: "Tous droits réservés.",
      tagline: "Construire des ponts vers la connaissance et le succès."
    },
    language: {
      english: "English",
      chinese: "中文",
      french: "Français"
    }
  }
}

type Language = 'en' | 'zh' | 'fr'
type Translations = typeof translations.en

interface I18nContextType {
  language: Language
  t: (key: string) => string
  changeLanguage: (lang: Language) => void
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Load saved language from localStorage or detect browser language
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && ['en', 'zh', 'fr'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    } else {
      // Detect browser language
      const browserLang = navigator.language.slice(0, 2)
      if (['en', 'zh', 'fr'].includes(browserLang)) {
        setLanguage(browserLang as Language)
      }
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  return (
    <I18nContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useTranslation must be used within an I18nProvider')
  }
  return context
}

'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

const translations = {
  en: {
    nav: { home: 'Home', about: 'About', skills: 'Competencies', projects: 'Advisory Services', experience: 'Professional Experience', contact: 'Contact' },
    hero: { title: 'Executive Consultant - 30+ Years in Strategic Planning, Statistical Systems, Facilities and International Organizations', subtitle: 'Executive leader with three decades of experience automating data for strategic decisions, leading hospital operations, and managing compliance and government relations for Save the Children International.', cta: 'Contact Me / Request Consultation' },
    about: {
      title: 'Executive Profile', subtitle: 'Strategic leadership grounded in data, operations and institutional performance',
      intro: 'Executive consultant with more than 30 years of experience in strategic planning, information and statistical systems, financial control and operations management across government, healthcare facilities and international organizations.',
      philosophy: 'Data-Driven Decision Making', philosophyText: 'Leading centralized data processing and strategic reporting systems to provide decision-makers with accurate, timely and actionable information.',
      approach: 'Areas of Excellence', approachText: 'Hospital management, government relations and international compliance, executive training and institutional development.',
    },
    skills: { title: 'Executive Competencies', subtitle: 'Practical expertise for institutional performance and decision-making' },
    projects: { title: 'Advisory Services', subtitle: 'Executive solutions in strategy, data, operations and compliance' },
    experience: { title: 'Professional Experience', subtitle: 'A leadership career spanning more than three decades' },
    contact: { title: 'Request Consultation / Direct Contact', subtitle: 'Discuss your institutional needs with an executive consultant', namePlaceholder: 'Full name', emailPlaceholder: 'Email address', messagePlaceholder: 'Describe your consultation request or message...', send: 'Send Request' },
    footer: { rights: 'All rights reserved.', tagline: 'Experience that creates lasting impact.' },
    ui: {
      name: 'Rashad Manea', executive: 'Executive Consultant and Leader', resume: 'Download CV PDF', cvButton: 'Download CV', cvArabic: 'Arabic CV (PDF)', cvEnglish: 'English Executive Resume (PDF)', cvHubTitle: 'CV Download Hub', cvHubText: 'Download the executive profile in Arabic or English.', close: 'Close', email: 'Email', location: 'Location', planning: 'Planning & Leadership', systems: 'Information Systems & Statistics', finance: 'Finance & Operations', relations: 'Government Relations & Training', competencies: 'Executive Competencies',
      stat1: 'Years in leadership and administrative planning', stat2: 'Executives and staff trained', stat3: 'Strategic and statistical reports for decision-makers', stat4: 'Leading compliance for international organizations',
      executiveSummary: 'Executive Summary', strengths: 'Core Strengths', trained: 'Staff trained and qualified', reports: 'Reports for decision-makers', experienceYears: 'Years of experience', internationalCompliance: 'Years of international compliance', credentials: 'Credentials & Certifications', excellence: 'Areas of Excellence', highlightSystems: 'Information systems and statistics leadership', highlightSystemsText: 'Automating centralized data processing and structuring strategic reporting.', highlightHospitals: 'Hospital management', highlightHospitalsText: 'Operational, administrative and financial leadership of Dar Al Shifa Hospital and a team of more than 40 staff.', highlightTraining: 'Institutional training and development', highlightTrainingText: 'Designing training programs and qualifying hundreds of staff in accounting and administration.',
      consultingService: 'Advisory service', allServices: 'All services', noServices: 'No services found.', responsibilities: 'Key Responsibilities & Achievements', workAreas: 'Work areas', careerHighlights: 'Career Highlights', leadershipYears: 'Years of leadership', consultationPartner: 'Looking for a strategic partner?', consultationText: 'Supporting organizations in planning, operational transformation and decision-making.', requestConsultation: 'Request consultation', directContact: 'Request Consultation / Direct Contact', fullName: 'Full name', phone: 'Phone number', consultationType: 'Consultation type', message: 'Message', send: 'Send request', contactIntro: 'For strategic planning, data automation, healthcare facilities management, compliance and government relations, I welcome your message.', contactDetails: 'Contact details', quickLinks: 'Quick links', backTop: 'Back to top', toggleMenu: 'Toggle menu', present: 'Present', executiveMethod: 'Impact-driven executive methodology', methodText: 'Combining strategic vision, operational discipline and data to build measurable institutional solutions while continuously developing leaders and teams.', trainedShort: 'Staff trained', reportsShort: 'Decision-making reports', thankYou: 'Thank you for contacting us. We will respond shortly.', consultationPlaceholder: 'e.g. Strategic planning, information systems, facilities management...', contract: 'Contract', executiveType: 'Executive', grade: 'Grade',
    },
    language: { english: 'English', arabic: 'العربية' },
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'نبذة عني', skills: 'الكفاءات', projects: 'الخدمات الاستشارية', experience: 'الخبرات المهنية', contact: 'تواصل معي' },
    hero: { title: 'مستشار وقيادي تنفيذي - خبرة +30 عاماً في التخطيط الاستراتيجي والنظم الإحصائية وإدارة المنشآت والمنظمات الدولية', subtitle: 'قيادي تنفيذي يسخّر أكثر من 3 عقود في أتمتة البيانات لدعم القرار الاستراتيجي، القيادة التشغيلية للمستشفيات، وإدارة الامتثال والعلاقات الحكومية لمنظمة Save the Children الدولية.', cta: 'تواصل معي / طلب استشارة' },
    about: {
      title: 'نبذة تنفيذية', subtitle: 'خبرة قيادية تجمع بين الاستراتيجية والبيانات والتشغيل المؤسسي',
      intro: 'قيادي واستشاري إداري ذو مسيرة مهنية تتجاوز 30 عاماً في التخطيط الاستراتيجي، النظم المعلوماتية والإحصائية، الرقابة المالية والمحاسبية، وإدارة العمليات عبر القطاعات الحكومية، المنشآت الصحية، والمنظمات الدولية.',
      philosophy: 'أتمتة البيانات وصناعة القرار', philosophyText: 'قيادة النظم والإحصاء من خلال أتمتة معالجة البيانات المركزية وتأطير منظومة التقارير الاستراتيجية بالمعهد الوطني لدعم القيادات بالمعلومة الدقيقة.',
      approach: 'مجالات التميز', approachText: 'إدارة المستشفيات، العلاقات الحكومية والامتثال الدولي، والتدريب والتطوير المؤسسي وتأهيل القيادات والكوادر.',
    },
    skills: { title: 'الكفاءات التنفيذية', subtitle: 'خبرات عملية لدعم الأداء المؤسسي وصناعة القرار' },
    projects: { title: 'الخدمات الاستشارية', subtitle: 'حلول تنفيذية في التخطيط والبيانات والتشغيل والامتثال' },
    experience: { title: 'الخبرات المهنية', subtitle: 'مسيرة قيادية تمتد لأكثر من ثلاثة عقود' },
    contact: { title: 'طلب استشارة / تواصل مباشر', subtitle: 'ناقش احتياجك المؤسسي مع مستشار وقيادي تنفيذي', namePlaceholder: 'الاسم الكامل', emailPlaceholder: 'البريد الإلكتروني', messagePlaceholder: 'اكتب تفاصيل الاستشارة أو الرسالة...', send: 'إرسال الطلب' },
    footer: { rights: 'جميع الحقوق محفوظة.', tagline: 'خبرة تصنع أثراً مستداماً.' },
    ui: {
      name: 'رشاد مانع', executive: 'مستشار وقيادي تنفيذي', resume: 'تحميل السيرة الذاتية PDF', cvButton: 'تحميل السيرة الذاتية', cvArabic: 'تحميل السيرة الذاتية بالعربية (PDF)', cvEnglish: 'تحميل السيرة التنفيذية بالإنجليزية (PDF)', cvHubTitle: 'مركز تحميل السيرة الذاتية', cvHubText: 'حمّل الملف التنفيذي باللغة العربية أو الإنجليزية.', close: 'إغلاق', email: 'البريد الإلكتروني', location: 'المقر', planning: 'التخطيط والقيادة', systems: 'النظم والإحصاء', finance: 'المالية والعمليات', relations: 'العلاقات والتدريب', competencies: 'كفاءات تنفيذية',
      stat1: 'عاماً من الخبرة في القيادة والتخطيط الإداري', stat2: 'كادر وقيادي تم تدريبهم وتأهيلهم', stat3: 'تقرير استراتيجي وإحصائي لصناع القرار', stat4: 'قيادة الامتثال لمنظمات دولية',
      executiveSummary: 'الملخص التنفيذي', strengths: 'أبرز نقاط القوة', trained: 'كادر تم تدريبهم وتأهيلهم', reports: 'تقرير لصناع القرار', experienceYears: 'عاماً من الخبرة', internationalCompliance: 'سنوات امتثال دولي', credentials: 'المؤهلات والشهادات', excellence: 'مجالات التميز', highlightSystems: 'قيادة النظم والإحصاء', highlightSystemsText: 'أتمتة معالجة البيانات المركزية وتأطير منظومة التقارير الاستراتيجية.', highlightHospitals: 'إدارة المستشفيات', highlightHospitalsText: 'القيادة التشغيلية والإدارية والمالية لمستشفى دار الشفاء وفريق يتجاوز 40 كادراً.', highlightTraining: 'التدريب والتطوير المؤسسي', highlightTrainingText: 'تصميم الحقائب التدريبية وتأهيل مئات الكوادر في المحاسبة والتطوير الإداري.',
      consultingService: 'خدمة استشارية', allServices: 'جميع الخدمات', noServices: 'لا توجد خدمات في هذا التصنيف.', responsibilities: 'أبرز المسؤوليات والإنجازات', workAreas: 'مجالات العمل', careerHighlights: 'محطات مهنية بارزة', leadershipYears: 'عاماً من القيادة', consultationPartner: 'هل تبحث عن شريك استراتيجي؟', consultationText: 'أدعم المؤسسات في التخطيط والتحول التشغيلي وصناعة القرار.', requestConsultation: 'طلب استشارة', directContact: 'طلب استشارة / تواصل مباشر', fullName: 'الاسم الكامل', phone: 'رقم الهاتف', consultationType: 'نوع الاستشارة', message: 'نص الرسالة', send: 'إرسال الطلب', contactIntro: 'للاستشارات في التخطيط الاستراتيجي، أتمتة البيانات، إدارة المنشآت الصحية، الامتثال والعلاقات الحكومية، يسعدني استقبال رسالتك.', contactDetails: 'بيانات التواصل', quickLinks: 'روابط سريعة', backTop: 'العودة إلى الأعلى', toggleMenu: 'فتح القائمة', present: 'حتى الآن', executiveMethod: 'منهجية تنفيذية قائمة على الأثر', methodText: 'أجمع بين الرؤية الاستراتيجية والانضباط التشغيلي واستخدام البيانات لبناء حلول مؤسسية قابلة للقياس، مع تطوير مستمر للقيادات والكوادر.', trainedShort: 'كادر تم تدريبهم', reportsShort: 'تقرير لصناعة القرار', thankYou: 'شكراً لتواصلك. سيتم الرد عليك في أقرب وقت.', consultationPlaceholder: 'مثال: تخطيط استراتيجي، نظم معلومات، إدارة منشآت...', contract: 'تعاقدي', executiveType: 'تنفيذي', grade: 'التقدير',
    },
    language: { english: 'الإنجليزية', arabic: 'العربية' },
  },
}

type Language = 'en' | 'ar'
type Translations = typeof translations.en

interface I18nContextType {
  language: Language
  t: (key: string) => string
  changeLanguage: (lang: Language) => void
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    const browserLanguage = navigator.language.slice(0, 2) as Language
    const nextLanguage: Language = savedLanguage === 'ar' || savedLanguage === 'en'
      ? savedLanguage
      : browserLanguage === 'ar' ? 'ar' : 'en'

    setLanguage(nextLanguage)
  }, [])

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    const value = key.split('.').reduce<unknown>((current, part) => {
      return (current as Record<string, unknown> | undefined)?.[part]
    }, translations[language])

    return typeof value === 'string' ? value : key
  }

  return (
    <I18nContext.Provider value={{ language, t, changeLanguage }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} lang={language} className="min-h-screen">
        {children}
      </div>
    </I18nContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useTranslation must be used within an I18nProvider')
  return context
}

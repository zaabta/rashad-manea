'use client'

import { useState } from 'react'
import { Check, ChevronDown, Download, FileText } from 'lucide-react'
import { useTranslation } from '@/contexts/I18nContext'

interface DownloadCvButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

export default function DownloadCvButton({ variant = 'primary', className = '' }: DownloadCvButtonProps) {
  const { t, language } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const variants = {
    primary: 'bg-[#9a7b38] hover:bg-[#b59143] text-white shadow-md shadow-[#9a7b38]/20',
    secondary: 'bg-[#0f2942] hover:bg-[#183858] text-white shadow-md shadow-[#0f2942]/20',
    outline: 'border-2 border-[#9a7b38] text-[#9a7b38] hover:bg-[#9a7b38] hover:text-white',
  }

  return (
    <div className={`relative inline-block ${className}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className={`group inline-flex items-center justify-center gap-2.5 rounded-xl px-5 py-3 text-xs font-bold transition-all hover:-translate-y-0.5 ${variants[variant]} ${className}`}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <Download className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
        <span>{t('ui.cvButton')}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label={t('ui.close')}
            className="fixed inset-0 z-40 h-full w-full cursor-default"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 z-50 mt-2 w-72 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 text-right shadow-xl" role="menu">
            <a
              href="/cv-rashad-mane-ar.pdf"
              download="السيرة_الذاتية_رشاد_مانع.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-[#0f2942] transition-colors hover:bg-slate-50 hover:text-[#9a7b38]"
              role="menuitem"
            >
              <span className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-[#9a7b38]" />
                {t('ui.cvArabic')}
              </span>
              <Check className="h-4 w-4 text-[#9a7b38]" />
            </a>
            <a
              href="/cv-rashad-mane-en.pdf"
              download="Rashad_Mane_Executive_CV.pdf"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between gap-3 border-t border-slate-100 px-4 py-3 text-sm font-semibold text-[#0f2942] transition-colors hover:bg-slate-50 hover:text-[#9a7b38]"
              role="menuitem"
            >
              <span className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-slate-400" />
                {t('ui.cvEnglish')}
              </span>
              <span className="text-xs text-slate-400">PDF</span>
            </a>
          </div>
        </>
      )}
    </div>
  )
}

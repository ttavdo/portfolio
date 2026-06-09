import { createContext, useState, useCallback, type ReactNode } from 'react'
import { translations, type Lang } from '../data/translations'

type TranslationSet = (typeof translations)[Lang]

interface LanguageContextType {
  lang: Lang
  toggle: () => void
  t: TranslationSet
}

export const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  const toggle = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ka' : 'en'))
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

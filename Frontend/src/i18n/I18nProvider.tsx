import { createContext, useContext, useMemo, useState } from 'react'

export type Lang = 'es' | 'en'

type Dict = Record<string, string>

type I18nContextType = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const es: Dict = {
  brand: 'Mentor-IA Platform',
  nav_login: 'Iniciar sesión',
  nav_cta: 'Comenzar gratis',
  hero_title: 'Transforma el aprendizaje con inteligencia artificial',
  hero_sub: 'Una plataforma educativa que analiza el pensamiento crítico, ofrece retroalimentación personalizada y adapta las actividades según el estilo de cada estudiante.',
  hero_primary: 'Empezar ahora',
  hero_secondary: 'Ver demostración',
  features_title: '¿Por qué elegir Mentor-IA?',
  features_sub: 'Una plataforma completa para docentes, estudiantes y administradores.',
  cta_title: 'Comienza a transformar la educación hoy',
  cta_sub: 'Únete a miles de educadores que ya están usando Mentor-IA Platform.',
  cta_button: 'Crear cuenta gratuita',
  footer_rights: '© 2025 Mentor-IA Platform.',
  footer_tag: 'Transformando la educación con inteligencia artificial.',
}

const en: Dict = {
  brand: 'Mentor-AI Platform',
  nav_login: 'Sign in',
  nav_cta: 'Get started',
  hero_title: 'Transform learning with artificial intelligence',
  hero_sub: 'An educational platform that analyzes critical thinking, offers personalized feedback, and adapts activities to each student’s style.',
  hero_primary: 'Start now',
  hero_secondary: 'Watch demo',
  features_title: 'Why choose Mentor-AI?',
  features_sub: 'A complete platform for teachers, students, and administrators.',
  cta_title: 'Start transforming education today',
  cta_sub: 'Join thousands of educators already using Mentor-AI Platform.',
  cta_button: 'Create free account',
  footer_rights: '© 2025 Mentor-AI Platform.',
  footer_tag: 'Transforming education with artificial intelligence.',
}

const dicts: Record<Lang, Dict> = { es, en }

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')
  const value = useMemo<I18nContextType>(() => ({
    lang,
    setLang,
    t: (key: string) => dicts[lang][key] ?? key,
  }), [lang])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

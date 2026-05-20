import { createContext, useState, useEffect } from 'react'
import { translations } from './translations.js'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [language, setLang] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('language')
            return saved || 'es'
        }
        return 'es'
    })

    useEffect(() => {
        localStorage.setItem('language', language)
    }, [language])

    const t = (key) => {
        const keys = key.split('.')
        let value = translations[language]
        for (const k of keys) {
            value = value?.[k]
        }
        return value || key
    }

    const toggleLanguage = () => {
        setLang(prev => prev === 'es' ? 'en' : 'es')
    }

    const setLanguage = (lang) => {
        if (lang === 'es' || lang === 'en') {
            setLang(lang)
        }
    }

    return (
        <LanguageContext.Provider value={{ language, t, toggleLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContext
import { useState } from 'react'
import styles from './Header.module.css'
import { useLanguage } from '../i18n/useLanguage.js'

export function Header() {
    const { language, setLanguage, t } = useLanguage()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleLinkClick = () => {
        setIsMenuOpen(false)
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <h1>Ramiro Zarate</h1>
                
                <nav className={styles.nav}>
                    <a className={styles.link} href="#inicio">{t('nav.inicio')}</a>
                    <a className={styles.link} href="#about">{t('nav.sobreMi')}</a>
                    <a className={styles.link} href="#tecnologias">{t('nav.tecnologias')}</a>
                    <a className={styles.link} href="#proyectos">{t('nav.proyectos')}</a>
                    <a className={styles.link} href="#contact">{t('nav.contacto')}</a>
                </nav>

                <div className={styles.actions}>
                    <div className={styles.langToggle}>
                        <span
                            className={`${styles.langOption} ${language === 'en' ? styles.active : styles.inactive}`}
                            onClick={() => setLanguage('en')}
                        >
                            en
                        </span>
                        <span className={styles.separator}>/</span>
                        <span
                            className={`${styles.langOption} ${language === 'es' ? styles.active : styles.inactive}`}
                            onClick={() => setLanguage('es')}
                        >
                            es
                        </span>
                    </div>
                    <a href="/CV_RamiroZarate.pdf" download className={styles.downloadBtn}>{t('header.downloadCV')}</a>
                </div>

                <button 
                    className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {isMenuOpen && (
                <div className={styles.mobileOverlay} onClick={handleLinkClick}>
                    <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
                        <nav className={styles.mobileNav}>
                            <a className={styles.mobileLink} href="#inicio" onClick={handleLinkClick}>{t('nav.inicio')}</a>
                            <a className={styles.mobileLink} href="#about" onClick={handleLinkClick}>{t('nav.sobreMi')}</a>
                            <a className={styles.mobileLink} href="#tecnologias" onClick={handleLinkClick}>{t('nav.tecnologias')}</a>
                            <a className={styles.mobileLink} href="#proyectos" onClick={handleLinkClick}>{t('nav.proyectos')}</a>
                            <a className={styles.mobileLink} href="#contact" onClick={handleLinkClick}>{t('nav.contacto')}</a>
                        </nav>
                        <div className={styles.mobileActions}>
                            <div className={styles.langToggle}>
                                <span
                                    className={`${styles.langOption} ${language === 'en' ? styles.active : styles.inactive}`}
                                    onClick={() => setLanguage('en')}
                                >
                                    en
                                </span>
                                <span className={styles.separator}>/</span>
                                <span
                                    className={`${styles.langOption} ${language === 'es' ? styles.active : styles.inactive}`}
                                    onClick={() => setLanguage('es')}
                                >
                                    es
                                </span>
                            </div>
                            <a href="/CV_RamiroZarate.pdf" download className={styles.downloadBtn}>{t('header.downloadCV')}</a>
                        </div>
                        <button className={styles.closeBtn} onClick={() => setIsMenuOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}
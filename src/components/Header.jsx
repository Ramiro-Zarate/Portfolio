import styles from './Header.module.css'
import { useLanguage } from '../i18n/useLanguage.js'

export function Header() {
    const { language, setLanguage, t } = useLanguage()

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
            </div>
        </header>
    )
}
import styles from './Hero.module.css'
import { useLanguage } from '../i18n/useLanguage.js'

export function Hero() {
    const { t } = useLanguage()

    return (
        <section className={styles.hero} id="inicio">
            <div className={styles.heroContent}>
                <small className={styles.heroSubtitle}>{t('hero.subtitle')} <span>{t('hero.name')}</span></small>
                <h1 className={styles.heroTitle}>{t('hero.title')}</h1>
                <p className={styles.heroDescription}>{t('hero.description')}</p>
                <div className={styles.buttonsContainer}>
                    <a href="/CV_RamiroZarate.pdf" download className={styles.downloadBtn}>{t('hero.downloadCV')}</a>
                    <a href="#contact" className={styles.contactButton}>{t('hero.contact')}</a>
                </div>
            </div>
        </section>
    )
}
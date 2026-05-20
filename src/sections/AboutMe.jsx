import styles from './AboutMe.module.css'
import { useLanguage } from '../i18n/useLanguage.js'

export function AboutMe() {
    const { t } = useLanguage()
    const details = t('about.details')

    return (
        <section id="about" className={styles.about}>
            <div className={styles.aboutContent}>
                <h2 className={styles.sectionTitle}>{t('about.title')}</h2>
                <div className={styles.aboutGrid}>
                    <div className={styles.mainColumn}>
                        <p className={styles.description}>{t('about.description')}</p>
                    </div>
                    <div className={styles.detailsColumn}>
                        {details.map((item, index) => (
                            <div key={index} className={styles.detailRow}>
                                <h3 className={styles.detailSubtitle}>{item.subtitle}</h3>
                                <p className={styles.detailContent}>{item.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
import styles from './Hero.module.css'

export function Hero() {
    return (
        <section className={styles.hero} id="inicio">
            <div className={styles.heroContent}>
                <small className={styles.heroSubtitle}>Hola, soy <span>ramiro zarate</span></small>
                <h1 className={styles.heroTitle}>Fullstack Developer</h1>
                <p className={styles.heroDescription}>Estudiante de Sistemas UNLa (Universidad Nacional de Lanús) enfocado en el desarrollo web moderno y escalable.</p>
                <div className={styles.buttonsContainer}>
                    <a href="/CV_RamiroZarate.pdf" download className={styles.downloadBtn}>Descargar CV</a>
                    <a href="#contact" className={styles.contactButton}>Contactame</a>
                </div>
            </div>
        </section>
    )
}
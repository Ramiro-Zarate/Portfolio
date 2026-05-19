import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <h1>Ramiro Zarate</h1>
                <nav className={styles.nav}>
                    <a className={styles.link} href="#inicio">Inicio</a>
                    <a className={styles.link} href="#tecnologias">Tecnologias</a>
                    <a className={styles.link} href="#proyectos">Proyectos</a>
                    <a className={styles.link} href="#contact">Contacto</a>
                </nav>
                <a href="/CV_RamiroZarate.pdf" download className={styles.downloadBtn}>Descargar CV</a>
            </div>
        </header>
    )
}
import styles from './Header.module.css'
import { Link } from 'react-router'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <h1>Ramiro Zarate</h1>
                <nav className={styles.nav}>
                    <Link className={styles.link} to="/">Inicio</Link>
                    <Link className={styles.link} to="/tech">Tecnologias</Link>
                    <Link className={styles.link} to="/projects">Proyectos</Link>
                    <Link className={styles.link} to="/contact">Contacto</Link>
                </nav>
                <button className={styles.downloadBtn}>Descargar CV</button>
            </div>
        </header>
    )
}
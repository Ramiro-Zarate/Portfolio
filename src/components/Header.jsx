import styles from './Header.module.css'
import { Link } from 'react-router'

export function Header() {
    return (
        <header>
            <h1>Ramiro Zarate</h1>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/tech">Tecnologias</Link>
                <Link to="/projects">Proyectos</Link>
                <Link to="/contact">Contacto</Link>
            </nav>
        </header>
    )
}
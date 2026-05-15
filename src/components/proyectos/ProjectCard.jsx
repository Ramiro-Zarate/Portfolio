import { Carousel } from './Carousel'
import styles from './ProjectCard.module.css'

export function ProjectCard({ proyecto, onImageClick }) {
    const hasMultipleImages = proyecto.imagenes && proyecto.imagenes.length > 0

    const handleClick = (imagen, index) => {
        onImageClick(proyecto.imagenes || [proyecto.imagen], index)
    }

    return (
        <article className={styles.card}>
            <div className={styles.cardImage}>
                {hasMultipleImages ? (
                    <Carousel
                        imagenes={proyecto.imagenes}
                        titulo={proyecto.titulo}
                        onImageClick={handleClick}
                    />
                ) : (
                    <img
                        src={proyecto.imagen}
                        alt={proyecto.titulo}
                        loading="lazy"
                        onClick={() => onImageClick([proyecto.imagen], 0)}
                    />
                )}
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{proyecto.titulo}</h3>
                <p className={styles.cardDescription}>{proyecto.descripcion}</p>
                <div className={styles.tags}>
                    {proyecto.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                </div>
                {proyecto.link && (
                    <a
                        href={proyecto.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkButton}
                    >
                        Ver proyecto
                    </a>
                )}
            </div>
        </article>
    )
}
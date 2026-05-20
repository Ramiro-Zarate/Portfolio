import { Carousel } from './Carousel'
import styles from './ProjectCard.module.css'

export function ProjectCard({ proyecto, language, onImageClick, t }) {
    const hasMultipleImages = proyecto.imagenes && proyecto.imagenes.length > 0
    const titulo = proyecto.titulo[language] || proyecto.titulo.es
    const descripcion = proyecto.descripcion[language] || proyecto.descripcion.es

    const handleClick = (imagen, index) => {
        onImageClick(proyecto.imagenes || [proyecto.imagen], index)
    }

    return (
        <article className={styles.card}>
            <div className={styles.cardImage}>
                {hasMultipleImages ? (
                    <Carousel
                        imagenes={proyecto.imagenes}
                        titulo={titulo}
                        onImageClick={handleClick}
                    />
                ) : (
                    <img
                        src={proyecto.imagen}
                        alt={titulo}
                        loading="lazy"
                        onClick={() => onImageClick([proyecto.imagen], 0)}
                    />
                )}
            </div>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{titulo}</h3>
                <p className={styles.cardDescription}>{descripcion}</p>
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
                        {t ? t('proyectos.verProyecto') : 'Ver proyecto'}
                    </a>
                )}
            </div>
        </article>
    )
}
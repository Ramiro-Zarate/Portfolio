import { useState, useRef } from 'react'
import styles from './Proyectos.module.css'
import devjobs1 from '../assets/proyectos/devjobs1.png'
import devjobs2 from '../assets/proyectos/devjobs2.png'
import devjobs3 from '../assets/proyectos/devjobs3.png'

const proyectosClientes = [
    {
        id: 1,
        titulo: 'Landing Page - Estudio Contable SZ',
        descripcion: 'Landing page informativa con formulario de contacto funcional para recepción de consultas por email.',
        tags: ['React', 'HTML', 'CSS'],
        link: null,
        imagen: '/src/assets/proyectos/sz-landing.jpg'
    },
    {
        id: 2,
        titulo: 'Automatización - Estudio Contable SZ',
        descripcion: 'Automatización de procesos contables integrando APIs de ARCA con librerías Playwright y Pandas.',
        tags: ['Python', 'Playwright', 'Pandas'],
        link: null,
        imagen: '/src/assets/proyectos/sz-automatizacion.jpg'
    },
    {
        id: 3,
        titulo: 'E-commerce Camisetas de Fútbol',
        descripcion: 'Tienda online completa con gestión de base de datos, catálogo de productos y procesamiento de pedidos.',
        tags: ['React', 'Node', 'Express', 'SQLite'],
        link: null,
        imagen: '/src/assets/proyectos/sz-ecommerce.jpg'
    }
]

const proyectosPersonales = [
    {
        id: 4,
        titulo: 'DevJobs',
        descripcion: 'Buscador de empleos con filtros avanzados por ubicación, experiencia y tecnología. API REST propia.',
        tags: ['React', 'Express', 'React Router', 'Zustand'],
        link: 'https://github.com',
        imagenes: [
            devjobs1,
            devjobs2,
            devjobs3
        ]
    },
    {
        id: 5,
        titulo: 'To Do List (Challenge Forti)',
        descripcion: 'Challenge de programación con lista de tareas. Stack completo React + Express.',
        tags: ['React', 'Express'],
        link: 'https://github.com',
        imagen: '/src/assets/proyectos/todo-forti.jpg'
    },
    {
        id: 6,
        titulo: 'Telemetry F1 Colapinto',
        descripcion: 'Interfaz de telemetría en tiempo real de Fórmula 1. consume datos de API OpenF1.',
        tags: ['Python', 'React'],
        link: 'https://github.com',
        imagen: '/src/assets/proyectos/telemetry-f1.jpg'
    }
]

function Carousel({ imagenes, titulo, onImageClick }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)

    const showArrows = imagenes.length > 1

    const prevSlide = (e) => {
        e.stopPropagation()
        setCurrentIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1))
    }

    const nextSlide = (e) => {
        e.stopPropagation()
        setCurrentIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1))
    }

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].clientX
        const diff = touchStartX.current - touchEndX.current

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide(e)
            } else {
                prevSlide(e)
            }
        }
    }

    return (
        <div
            className={styles.carousel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className={styles.carouselImageContainer}>
                <img
                    src={imagenes[currentIndex]}
                    alt={`${titulo} - Slide ${currentIndex + 1}`}
                    loading="lazy"
                    onClick={() => onImageClick(imagenes[currentIndex], titulo)}
                />
            </div>

            {showArrows && (
                <>
                    <button
                        className={`${styles.carouselArrow} ${styles.carouselArrowLeft}`}
                        onClick={prevSlide}
                    >
                        ‹
                    </button>
                    <button
                        className={`${styles.carouselArrow} ${styles.carouselArrowRight}`}
                        onClick={nextSlide}
                    >
                        ›
                    </button>
                    <div className={styles.carouselDots}>
                        {imagenes.map((_, index) => (
                            <span
                                key={index}
                                className={`${styles.carouselDot} ${index === currentIndex ? styles.carouselDotActive : ''}`}
                                onClick={(e) => {
                                    e.stopPropagation()
                                    setCurrentIndex(index)
                                }}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

function ImageModalCarousel({ imagenes, titulo, initialIndex, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)

    const showNavigation = imagenes.length > 1

    const prevSlide = (e) => {
        e.stopPropagation()
        setCurrentIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1))
    }

    const nextSlide = (e) => {
        e.stopPropagation()
        setCurrentIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1))
    }

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].clientX
        const diff = touchStartX.current - touchEndX.current

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextSlide(e)
            } else {
                prevSlide(e)
            }
        }
    }

    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.modalClose} onClick={onClose}>X</button>

                <div
                    className={styles.modalCarousel}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <img
                        src={imagenes[currentIndex]}
                        alt={`${titulo} - Slide ${currentIndex + 1}`}
                    />

                    {showNavigation && (
                        <>
                            <button
                                className={`${styles.modalArrow} ${styles.modalArrowLeft}`}
                                onClick={prevSlide}
                            >
                                ‹
                            </button>
                            <button
                                className={`${styles.modalArrow} ${styles.modalArrowRight}`}
                                onClick={nextSlide}
                            >
                                ›
                            </button>
                            <div className={styles.modalDots}>
                                {imagenes.map((_, index) => (
                                    <span
                                        key={index}
                                        className={`${styles.modalDot} ${index === currentIndex ? styles.modalDotActive : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setCurrentIndex(index)
                                        }}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <p className={styles.modalCaption}>{titulo}</p>
            </div>
        </div>
    )
}

function ProjectCard({ proyecto, onImageClick }) {
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
                        onImageClick={(img, idx) => handleClick(img, idx)}
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

export function Proyectos() {
    const [modalData, setModalData] = useState({ imagenes: [], index: 0, titulo: '' })

    const handleImageClick = (imagenes, index) => {
        setModalData({ imagenes, index, titulo: proyectosPersonales.find(p => p.imagenes?.includes(imagenes[0]))?.titulo || proyectosClientes.find(p => p.imagen === imagenes[0])?.titulo || '' })
    }

    const handleCloseModal = () => {
        setModalData({ imagenes: [], index: 0, titulo: '' })
    }

    return (
        <section className={styles.proyectos}>
            <h2 className={styles.sectionTitle}>Proyectos</h2>

            <div className={styles.projectGroup}>
                <h3 className={styles.groupTitle}>Para clientes</h3>
                <div className={styles.grid}>
                    {proyectosClientes.map((proyecto) => (
                        <ProjectCard
                            key={proyecto.id}
                            proyecto={proyecto}
                            onImageClick={handleImageClick}
                        />
                    ))}
                </div>
            </div>

            <div className={styles.projectGroup}>
                <h3 className={styles.groupTitle}>Proyectos personales</h3>
                <div className={styles.grid}>
                    {proyectosPersonales.map((proyecto) => (
                        <ProjectCard
                            key={proyecto.id}
                            proyecto={proyecto}
                            onImageClick={handleImageClick}
                        />
                    ))}
                </div>
            </div>

            {modalData.imagenes.length > 0 && (
                <ImageModalCarousel
                    imagenes={modalData.imagenes}
                    titulo={modalData.titulo}
                    initialIndex={modalData.index}
                    onClose={handleCloseModal}
                />
            )}
        </section>
    )
}
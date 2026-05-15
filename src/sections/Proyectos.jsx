import { useState } from 'react'
import styles from './Proyectos.module.css'
import { Carousel, ImageModalCarousel, ProjectCard } from '../components/proyectos'
import devjobs1 from '../assets/proyectos/devjobs1.png'
import devjobs2 from '../assets/proyectos/devjobs2.png'
import devjobs3 from '../assets/proyectos/devjobs3.png'
import challenge1 from '../assets/proyectos/challenge1.png'
import challenge2 from '../assets/proyectos/challenge2.png'
import estudioSZ1 from '../assets/proyectos/estudioSZ1.png'
import proximamente from '../assets/proyectos/proximamente.png'


const proyectosClientes = [
    {
        id: 1,
        titulo: 'Landing Page - Estudio Contable SZ',
        descripcion: 'Landing page informativa con formulario de contacto funcional para recepción de consultas por email.',
        tags: ['React', 'CSS', 'Astro', 'Vercel'],
        link: null,
        imagen: [estudioSZ1]
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
        titulo: 'E-commerce Camisetas de Fútbol (En desarrollo)',
        descripcion: 'Tienda online completa con gestión de base de datos, catálogo de productos y procesamiento de pedidos.',
        tags: ['React', 'Node', 'Express', 'SQLite'],
        link: null,
        imagen: [proximamente]
    }
]

const proyectosPersonales = [
    {
        id: 4,
        titulo: 'DevJobs',
        descripcion: 'Buscador de empleos con filtros avanzados por ubicación, experiencia y tecnología. API REST propia.',
        tags: ['React', 'Express', 'React Router', 'Zustand'],
        link: 'https://github.com/Ramiro-Zarate/Dev-Jobs-React',
        imagenes: [devjobs1, devjobs2, devjobs3]
    },
    {
        id: 5,
        titulo: 'To Do List (Challenge Forti)',
        descripcion: 'Challenge de programación con lista de tareas. Stack completo React + Express.',
        tags: ['React', 'Express'],
        link: 'https://github.com/Ramiro-Zarate/Challenge-ForIT',
        imagenes: [challenge1, challenge2]
    },
    {
        id: 6,
        titulo: 'Telemetry F1 Colapinto (En desarrollo)',
        descripcion: 'Interfaz de telemetría en tiempo real de Fórmula 1. consume datos de API OpenF1.',
        tags: ['Python', 'React'],
        link: 'https://github.com',
        imagen: [proximamente]
    }
]

export function Proyectos() {
    const [modalData, setModalData] = useState({ imagenes: [], index: 0, titulo: '' })

    const handleImageClick = (imagenes, index) => {
        setModalData({
            imagenes,
            index,
            titulo: proyectosPersonales.find(p => p.imagenes?.includes(imagenes[0]))?.titulo ||
                    proyectosClientes.find(p => p.imagen === imagenes[0])?.titulo ||
                    ''
        })
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
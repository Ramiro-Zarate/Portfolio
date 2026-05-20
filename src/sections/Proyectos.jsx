import { useState } from 'react'
import styles from './Proyectos.module.css'
import { ImageModalCarousel, ProjectCard } from '../components/proyectos'
import { useLanguage } from '../i18n/useLanguage.js'
import devjobs1 from '../assets/proyectos/devjobs1.png'
import devjobs2 from '../assets/proyectos/devjobs2.png'
import devjobs3 from '../assets/proyectos/devjobs3.png'
import challenge1 from '../assets/proyectos/challenge1.png'
import challenge2 from '../assets/proyectos/challenge2.png'
import estudioSZ1 from '../assets/proyectos/estudioSZ1.png'
import automatizacion1 from '../assets/proyectos/automatizacion1.png' 
import proximamente from '../assets/proyectos/proximamente.png'


const proyectosClientes = [
    {
        id: 1,
        titulo: 'Landing Page - Estudio Contable SZ',
        descripcion: 'Landing page institucional diseñada para maximizar la visibilidad online y la captación de clientes. Desarrollada con React y Astro, optimizada para SEO y rendimiento. Implementación de diseño responsivo para una experiencia fluida en dispositivos móviles.',
        tags: ['React', 'CSS', 'Astro', 'Vercel'],
        link: null,
        imagen: [estudioSZ1]
    },
    {
        id: 2,
        titulo: 'Automatización - Estudio Contable SZ',
        descripcion: 'Solución de software personalizada para la automatización de tareas administrativas y fiscales, eliminando procesos manuales repetitivos. Integración con APIs de ARCA usando librerías Playwright y Pandas. Interfaz gráfica con CustomTkinter.',
        tags: ['Python', 'Playwright', 'Pandas', 'CustomTkinter'],
        link: null,
        imagen: [automatizacion1]
    },
    {
        id: 3,
        titulo: 'E-commerce - Vak Store (En desarrollo)',
        descripcion: 'Tienda online escalable para la comercialización de indumentaria deportiva, con foco en una experiencia de compra fluida. Desarrollo de un catálogo dinámico y gestión de base de datos para control de stock en tiempo real. Actualmente en fase de integración de pasarela de pagos. ',
        tags: ['React', 'Node', 'Express', 'SQLite'],
        link: null,
        imagen: [proximamente]
    }
]

const proyectosPersonales = [
    {
        id: 4,
        titulo: 'DevJobs',
        descripcion: 'Aplicación Fullstack que simula una plataforma de búsqueda de empleo técnica, gestionando grandes volúmenes de datos de forma eficiente. El frontend se desarrolló con React, utilizando React Router para la navegación y Zustand para el manejo de estado global. El backend se implementó con Express, proporcionando una API RESTful para gestionar las ofertas de empleo y las solicitudes de los usuarios.',
        tags: ['React','Node.js', 'Express', 'React Router', 'Zustand', ],
        link: 'https://github.com/Ramiro-Zarate/Dev-Jobs-React',
        imagenes: [devjobs1, devjobs2, devjobs3]
    },
    {
        id: 5,
        titulo: 'To Do List - Challenge ForIT',
        descripcion: 'Resolución de un desafío técnico de alto nivel, cumpliendo con requerimientos específicos de arquitectura y funcionalidad. El proyecto se desarrolló utilizando React para el frontend, con un enfoque en la creación de componentes reutilizables y una gestión eficiente del estado. El backend se implementó con Node.js y Express, proporcionando una API RESTful para manejar las operaciones CRUD de las tareas.',
        tags: ['React', 'Node', 'Express'],
        link: 'https://github.com/Ramiro-Zarate/Challenge-ForIT',
        imagenes: [challenge1, challenge2]
    },
    {
        id: 6,
        titulo: 'Telemetría F1 Colapinto (En desarrollo)',
        descripcion: 'Herramienta de análisis de datos en tiempo real diseñada para procesar y visualizar la telemetría oficial de Fórmula 1, con foco específico en el desempeño de Franco Colapinto. Integración con APIs de telemetría para la extracción de métricas de velocidad, marchas, uso de batería y tiempos de vuelta. Desarrollo de un dashboard interactivo utilizando React para la visualización de datos, con gráficos dinámicos y filtros personalizables para el análisis detallado del rendimiento del piloto.',
        tags: ['Python', 'Pandas', 'React'],
        link: 'https://github.com',
        imagen: [proximamente]
    }
]

export function Proyectos() {
    const { t } = useLanguage()
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
        <section id="proyectos" className={styles.proyectos}>
            <h2 className={styles.sectionTitle}>{t('proyectos.title')}</h2>

            <div className={styles.projectGroup}>
                <h3 className={styles.groupTitle}>{t('proyectos.paraClientes')}</h3>
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
                <h3 className={styles.groupTitle}>{t('proyectos.personales')}</h3>
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
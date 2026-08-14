import { useState } from 'react'
import styles from './Proyectos.module.css'
import { ImageModalCarousel, ProjectCard } from '../components/proyectos'
import { useLanguage } from '../i18n/useLanguage.js'
import devjobs1 from '../assets/proyectos/devjobs1.webp'
import devjobs2 from '../assets/proyectos/devjobs2.webp'
import devjobs3 from '../assets/proyectos/devjobs3.webp'
import challenge1 from '../assets/proyectos/challenge1.webp'
import challenge2 from '../assets/proyectos/challenge2.webp'
import estudioSZ1 from '../assets/proyectos/estudioSZ1.webp'
import estudioSZ2 from '../assets/proyectos/estudioSZ2.webp'
import estudioSZ3 from '../assets/proyectos/estudioSZ3.webp' 
import automatizacion1 from '../assets/proyectos/automatizacion1.webp' 
import vakstore1 from '../assets/proyectos/vakstore1.webp'
import vakstore2 from '../assets/proyectos/vakstore2.webp'
import vakstore3 from '../assets/proyectos/vakstore3.webp'
import vakstore4 from '../assets/proyectos/vakstore4.webp'
import proximamente from '../assets/proyectos/proximamente.webp'


const proyectosClientes = [
    {
        id: 1,
        titulo: {
            es: 'E-commerce - Vak Store',
            en: 'E-commerce - Vak Store'
        },
        descripcion: {
            es: 'Plataforma e-commerce en funcionamiento para marca de indumentaria deportiva. Incluye catálogo con filtrado dinámico, gestión de usuarios (autenticación/login) y carrito con control de stock en tiempo real. Checkout integrado con Mercado Pago (webhooks y reembolsos automáticos) y logística automatizada con Correo Argentino (cotización por CP, generación de etiquetas e historial de envíos). Implementación de Google Analytics 4 (GA4) para analítica de ventas y embudo de conversión.',
            en: 'Fully operational e-commerce platform for a sportswear brand. Features dynamic catalog filtering, user authentication/login, and real-time inventory management. Full Mercado Pago integration (webhooks, automatic refunds) and automated shipping via Correo Argentino (postal code calculation, label printing, order tracking). Google Analytics 4 (GA4) integration for sales analytics and conversion funnel tracking.'

        },
        tags: ['Astro', 'React', 'TypeScript', 'Supabase', 'Mercado Pago'],
        link: 'https://github.com/Ramiro-Zarate/VakStore',
        demoLink: 'https://vakstoree.com',
        imagenes: [vakstore1, vakstore2, vakstore3, vakstore4]
    },
    {
        id: 2,
        titulo: {
            es: 'Automatización - Estudio Contable SZ',
            en: 'Automation - Accounting Firm SZ'
        },
        descripcion: {
            es: 'Solución de software personalizada para la automatización de tareas administrativas y fiscales, eliminando procesos manuales repetitivos. Integración con APIs de ARCA usando librerías Playwright y Pandas. Interfaz gráfica con CustomTkinter. Redujo el tiempo de procesamiento un 35% y se usa a diario en el estudio.',
            en: 'Custom software solution for automating administrative and tax tasks, eliminating repetitive manual processes. Integration with ARCA APIs using Playwright and Pandas libraries. Graphic interface with CustomTkinter. Cut processing time by 35% and is in daily use at the firm.'
        },
        tags: ['Python', 'Playwright', 'Pandas', 'CustomTkinter'],
        link: null,
        imagen: [automatizacion1]
    },
    {
        id: 3,
        titulo: {
            es: 'Sistema de Punto de Venta',
            en: 'Point of Sale System'
        },
        descripcion: {
            es: 'Sistema de punto de venta para un comercio, en uso diario. Control de stock en tiempo real, registro de ventas y reportes, con integración de lector de código de barras y ticketeadora.',
            en: 'Point of sale system for a shop, in daily use. Real-time stock control, sales tracking and reports, with barcode scanner and receipt printer integration.'
        },
        tags: ['React', 'TypeScript', 'PostgreSQL', 'Prisma'],
        link: null,
        demoLink: null,
        imagen: [proximamente]
    },
    {
        id: 4,
        titulo: {
            es: 'Landing Page - Estudio Contable SZ',
            en: 'Landing Page - Accounting Firm SZ'
        },
        descripcion: {
            es: 'Landing page institucional diseñada para maximizar la visibilidad online y la captación de clientes. Desarrollada con React y Astro, optimizada para SEO y rendimiento responsivo. Integración con Google Analytics 4 (GA4) para el seguimiento de tráfico, comportamiento de usuarios y medición de conversiones.',
            en: 'Institutional landing page designed to maximize online visibility and lead generation. Developed with React and Astro, optimized for SEO and responsive performance. Google Analytics 4 (GA4) integration for traffic tracking, user behavior analysis, and conversion measurement.'
        },
        tags: ['React', 'CSS', 'Astro', 'Vercel'],
        link: null,
        demoLink: 'https://www.estudiocontablesz.com/',
        imagenes: [estudioSZ1, estudioSZ2, estudioSZ3]
    }
]

const proyectosPersonales = [
    {
        id: 4,
        titulo: {
            es: 'DevJobs',
            en: 'DevJobs'
        },
        descripcion: {
            es: 'Aplicación Fullstack que simula una plataforma de búsqueda de empleo técnica, gestionando grandes volúmenes de datos de forma eficiente. El frontend se desarrolló con React, utilizando React Router para la navegación y Zustand para el manejo de estado global. El backend se implementó con Express, proporcionando una API RESTful para gestionar las ofertas de empleo y las solicitudes de los usuarios.',
            en: 'Fullstack application that simulates a technical job search platform, efficiently managing large volumes of data. The frontend was developed with React, using React Router for navigation and Zustand for global state management. The backend was implemented with Express, providing a RESTful API to manage job postings and user applications.'
        },
        tags: ['React','Node.js', 'Express', 'React Router', 'Zustand', ],
        link: 'https://github.com/Ramiro-Zarate/Dev-Jobs-React',
        demoLink: 'https://dev-jobs-react-ten.vercel.app/',
        imagenes: [devjobs1, devjobs2, devjobs3]
    },
    {
        id: 5,
        titulo: {
            es: 'To Do List - Challenge ForIT',
            en: 'To Do List - Challenge ForIT'
        },
        descripcion: {
            es: 'Resolución de un desafío técnico de alto nivel, cumpliendo con requerimientos específicos de arquitectura y funcionalidad. El proyecto se desarrolló utilizando React para el frontend, con un enfoque en la creación de componentes reutilizables y una gestión eficiente del estado. El backend se implementó con Node.js y Express, proporcionando una API RESTful para manejar las operaciones CRUD de las tareas.',
            en: 'High-level technical challenge resolution, meeting specific architecture and functionality requirements. The project was developed using React for the frontend, focusing on creating reusable components and efficient state management. The backend was implemented with Node.js and Express, providing a RESTful API to handle CRUD operations for tasks.'
        },
        tags: ['React', 'Node', 'Express'],
        link: 'https://github.com/Ramiro-Zarate/Challenge-ForIT',
        imagenes: [challenge1, challenge2]
    },
    {
        id: 6,
        titulo: {
            es: 'Telemetría F1 Colapinto (En desarrollo)',
            en: 'F1 Telemetry Colapinto (In development)'
        },
        descripcion: {
            es: 'Herramienta de análisis de datos en tiempo real diseñada para procesar y visualizar la telemetría oficial de Fórmula 1, con foco específico en el desempeño de Franco Colapinto. Integración con APIs de telemetría para la extracción de métricas de velocidad, marchas, uso de batería y tiempos de vuelta. Desarrollo de un dashboard interactivo utilizando React para la visualización de datos, con gráficos dinámicos y filtros personalizables para el análisis detallado del rendimiento del piloto.',
            en: 'Real-time data analysis tool designed to process and visualize official Formula 1 telemetry, with specific focus on Franco Colapinto performance. Integration with telemetry APIs for extracting speed, gear, battery usage and lap time metrics. Interactive dashboard development using React for data visualization, with dynamic charts and customizable filters for detailed driver performance analysis.'
        },
        tags: ['Python', 'Pandas', 'React'],
        link: null,
        imagen: [proximamente]
    }
]

export function Proyectos() {
    const { language, t } = useLanguage()
    const [modalData, setModalData] = useState({ imagenes: [], index: 0, titulo: '' })

    const handleImageClick = (imagenes, index, titulo) => {
        setModalData({
            imagenes,
            index,
            titulo: titulo?.[language] || ''
        })
    }

    const handleCloseModal = () => {
        setModalData({ imagenes: [], index: 0, titulo: '' })
    }

    return (
        <section id="proyectos" className={styles.proyectos}>
            <div className={styles.sectionProyectos}>
                <h2 className={styles.sectionTitle}>{t('proyectos.title')}</h2>
                <div className={styles.projectGroup}>
                    <h3 className={styles.groupTitle}>{t('proyectos.paraClientes')}</h3>
                    <div className={styles.grid}>
                        {proyectosClientes.map((proyecto) => (
                            <ProjectCard
                                key={proyecto.id}
                                proyecto={proyecto}
                                language={language}
                                onImageClick={handleImageClick}
                                t={t}
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
                                language={language}
                                onImageClick={handleImageClick}
                                t={t}
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
            </div>
            
        </section>
    )
}
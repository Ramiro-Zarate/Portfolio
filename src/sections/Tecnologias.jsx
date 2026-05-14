import styles from './Tecnologias.module.css'

const tecnologias = [
    {
        titulo: 'React',
        icono : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732" /></svg>
        )
    },
    {
        titulo: 'Css',
        icono : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-css3"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5l16 0" /><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" /></svg>
        )
    },
    {
        titulo: 'Bootstrap',
        icono: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-bootstrap"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2" /><path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2" /><path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4" /></svg>
        ) 
    },{
        titulo: 'JavaScript',
        icono: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-javascript"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5l16 0" /><path d="M7.5 8h3v8l-2 -1" /><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" /></svg>
        )
    },{
        titulo: 'Node.js',
        icono: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-nodejs"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" /><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" /></svg>
        )
    },
    {
        titulo: 'Express.js',
        icono: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-express"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12h.01" /><path d="M12 16h.01" /><path d="M12 8h.01" /></svg>
        )
    },
    {
        titulo: 'SQLite',
        icono: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-sqlite"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c-4.97 0 -9 4.03 -9 9s4.03 9 9 9s9 -4.03 9 -9s-4.03 -9 -9 -9z" /><path d="M10 8h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1z" /></svg>
        )
    },
    {
        titulo: 'Python',
        icono: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-python"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 9h-7a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h3" /><path d="M12 15h7a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-3" /><path d="M8 9v-4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-4a2 2 0 0 0 -2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-4" /><path d="M11 6l0 .01" /><path d="M13 18l0 .01" /></svg>
        )
    },
    {
        titulo: 'Git',
        icono: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-git"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M11 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M11 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M12 15v-6" /><path d="M15 11l-2 -2" /><path d="M11 7l-1.9 -1.9" /><path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0" /></svg>
        )
    },
    {
        titulo: 'GitHub',
        icono: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
        )
    },
    {
        titulo: 'Astro',
        icono: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-astro"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14.972 3.483c.163 .196 .247 .46 .413 .987l3.64 11.53a15.5 15.5 0 0 0 -4.352 -1.42l-2.37 -7.723a.31 .31 0 0 0 -.296 -.213a.31 .31 0 0 0 -.295 .214l-2.342 7.718a15.5 15.5 0 0 0 -4.37 1.422l3.657 -11.53c.168 -.527 .251 -.79 .415 -.986c.144 -.172 .331 -.306 .544 -.388c.242 -.094 .527 -.094 1.099 -.094h2.612c.572 0 .858 0 1.1 .094c.213 .082 .4 .217 .545 .39" /><path d="M9 18c0 1.5 2 3 3 4c1 -1 3 -3 3 -4q -3 1.5 -6 0" /></svg>
        )
    },
    {
        titulo: 'Vercel',
        icono: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-vercel"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 19h18l-9 -15l-9 15" /></svg>
        )
    }
]

export function Tecnologias() {
    return (
        <section className={styles.tecnologias}>
            <div className={styles.tecnologiasContent}>
                <h2 className={styles.tecnologiasTitle}>Tecnologías</h2>
                <div className={styles.techList}>
                    {tecnologias.map((t) => (
                        <article key={t.titulo} className={styles.techCard}>
                            <div className={styles.techIcon}>{t.icono}</div>  
                            <h3 className={styles.techTitle}>{t.titulo}</h3>  
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
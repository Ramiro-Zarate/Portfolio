import styles from './CodeBlock.module.css'

export function CodeBlock() {
    return (
        <div className={styles.codeWindow}>
            <div className={styles.codeHeader}>
                <span className={`${styles.dot} ${styles.dotRed}`} />
                <span className={`${styles.dot} ${styles.dotYellow}`} />
                <span className={`${styles.dot} ${styles.dotGreen}`} />
                <span className={styles.codeTitle}>~/ramiro-zarate.js</span>
            </div>
            <pre className={styles.codeBody}>
                <code>
                    <span className={styles.comment}>{'// who am i?'}</span>{'\n'}
                    <span className={styles.keyword}>const</span>{' '}
                    <span className={styles.variable}>dev</span>{' = {'}{'\n'}
                    {'  '}name: <span className={styles.string}>'Ramiro Zarate'</span>,{'\n'}
                    {'  '}role: <span className={styles.string}>'Fullstack Developer'</span>,{'\n'}
                    {'  '}stack: [{' '}
                        <span className={styles.string}>'React'</span>,{' '}
                        <span className={styles.string}>'Node'</span>,{' '}
                        <span className={styles.string}>'TypeScript'</span>,{' '}
                        <span className={styles.string}>'Python'</span>,{' '}
                        <span className={styles.string}>'PostgreSQL'</span>{' '}
                    ],{'\n'}
                    {'  '}available: <span className={styles.boolean}>true</span>{'\n'}
                    {'};'}
                </code>
            </pre>
        </div>
    )
}

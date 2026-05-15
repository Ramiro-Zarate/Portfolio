import { useState, useRef } from 'react'
import styles from './ImageModalCarousel.module.css'

export function ImageModalCarousel({ imagenes, titulo, initialIndex, onClose }) {
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
import { useState, useRef } from 'react'
import styles from './Carousel.module.css'

export function Carousel({ imagenes, titulo, onImageClick }) {
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
                    onClick={() => onImageClick(imagenes[currentIndex], currentIndex)}
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
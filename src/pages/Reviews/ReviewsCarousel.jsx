import ReviewCard from './ReviewCard'
import { reviews } from './data'
import { useEffect, useState, useRef } from 'react'
import styles from './Reviews.module.scss'
import { ArrowLeft, ArrowRight } from '@mui/icons-material'

const ReviewsCarousel = () => {
    const [index, setIndex] = useState(0)
    const timerRef = useRef(null)

    const nextIndex = () => {
        setIndex(prev => (prev + 1) % reviews.length)
        resetTimer()
    }

    const prevIndex = () => {
        setIndex(prev => (prev + (reviews.length - 1)) % reviews.length)
        resetTimer()
    }

    const resetTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current)
        timerRef.current = setInterval(() => {
            setIndex(i => (i + 1) % reviews.length)
        }, 5000)
    }

    useEffect(() => {
        resetTimer()
        return () => clearInterval(timerRef.current)
    }, [])

    return (
        <div className={styles.carousel}>
            <ArrowLeft
                onClick={prevIndex}
                sx={{ fontSize: 48, cursor: 'pointer' }}
            />
            <ReviewCard {...reviews[index]} isTyping />
            <ArrowRight
                onClick={nextIndex}
                sx={{ fontSize: 48, cursor: 'pointer' }}
            />
        </div>
    )
}

export default ReviewsCarousel
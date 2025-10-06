import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import ReviewCard from './ReviewCard'
import { reviews } from './data'
import { useEffect, useState } from 'react'

const ReviewsCarousel = () => {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(i => (i + 1) % reviews.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <ReviewCard
            {...reviews[index]}
        />
    )
}

export default ReviewsCarousel
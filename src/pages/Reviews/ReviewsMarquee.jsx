import { useEffect, useRef } from 'react'
import { reviews } from './data'
import styles from './Reviews.module.scss'
import Marquee from 'react-fast-marquee'
import { map } from 'lodash'
import ReviewCard from './ReviewCard'

const ReviewsMarquee = () => {
    return (
        <Marquee
            gradientColor="black"
            gradient
            autoFill
        >
            {
                map(reviews, (review, i) => (
                    <ReviewCard
                        key={i}
                        {...review}
                    />
                ))
            }
        </Marquee>
    )
}

export default ReviewsMarquee
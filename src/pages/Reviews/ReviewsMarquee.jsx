import { reviews } from './data'
import Marquee from 'react-fast-marquee'
import { map } from 'lodash'
import ReviewCard from './ReviewCard'

const ReviewsMarquee = ({
    direction = "left",
}) => {

    return (
        <Marquee
            direction={direction}
            gradientColor="black"
            gradientWidth={50}
            gradient
            autoFill
            pauseOnHover
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
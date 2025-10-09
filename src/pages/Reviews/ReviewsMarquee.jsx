import { reviews } from './data'
import Marquee from 'react-fast-marquee'
import { map } from 'lodash'
import ReviewCard from './ReviewCard'

const ReviewsMarquee = ({
    direction = "left",
}) => {

    const shuffle = (array) => {
        let newArray = [...array]
        let i = newArray.length, j, temp
        while (--i > 0) {
            j = Math.floor(Math.random() * (i + 1))
            temp = newArray[j]
            newArray[j] = newArray[i]
            newArray[i] = temp
        }
        return newArray
    }

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
                map(shuffle(reviews), (review, i) => (
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
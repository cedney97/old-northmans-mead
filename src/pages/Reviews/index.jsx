import useWindowDimensions from "../../hooks/useWindowDimensions"
import ReviewsCarousel from "./ReviewsCarousel"
import ReviewsMarquee from "./ReviewsMarquee"

const ReviewsPage = () => {
    const { width } = useWindowDimensions()
    const isMobile = width < 768

    return (
        <div className="page" style={{ paddingTop: "64px" }}>
            <h1 style={{ fontSize: "64px" }}>Reviews</h1>
            {
                isMobile
                    ? <ReviewsCarousel />
                    : <ReviewsMarquee />
            }
        </div>
    )
}

export default ReviewsPage
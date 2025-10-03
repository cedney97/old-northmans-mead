import ReviewsMarquee from "./ReviewsMarquee"

const ReviewsPage = () => {
    return (
        <div className="page" style={{ paddingTop: "64px" }}>
            <h1 style={{ fontSize: "64px" }}>Reviews</h1>
            <ReviewsMarquee />
        </div>
    )
}

export default ReviewsPage
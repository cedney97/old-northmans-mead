import OurMeadPage from "../pages/OurMead"
import HomePage from "../pages/Home"
import ContactPage from "../pages/Contact"
import ReviewsPage from "../pages/Reviews"

export const routes = [
    {
        path: "/home",
        element: <HomePage />
    }, {
        path: "/",
        element: <HomePage />
    }, {
        path: "/our-mead",
        element: <OurMeadPage />
    }, {
        path: "/contact",
        element: <ContactPage />
    }, {
        path: "/reviews",
        element: <ReviewsPage />
    }
]
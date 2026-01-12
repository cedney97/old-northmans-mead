import OurMeadPage from "../pages/OurMead"
import HomePage from "../pages/Home"
import ContactPage from "../pages/Contact"
import HowItsMadePage from "../pages/HowItsMade"
import ReviewsPage from "../pages/Reviews"
import OrdersPage from "../pages/Orders"

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
        path: "/orders",
        element: <OrdersPage />
    }, {
        path: "/contact",
        element: <ContactPage />
    }, {
        path: "/how-its-made",
        element: <HowItsMadePage />
    }, {
        path: "/reviews",
        element: <ReviewsPage />
    }
]
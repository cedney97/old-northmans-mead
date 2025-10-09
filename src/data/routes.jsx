import OurMeadPage from "../pages/OurMead"
import HomePage from "../pages/Home"
import MeadGuard from "../pages/MeadGuard"
import ContactPage from "../pages/Contact"
import HowItsMadePage from "../pages/HowItsMade"
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
        path: "/mead-guard",
        element: <MeadGuard />
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
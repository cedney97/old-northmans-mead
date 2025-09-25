import OurMeadPage from "../pages/OurMead"
import HomePage from "../pages/Home"
import MeadGuard from "../pages/MeadGuard"
import ContactPage from "../pages/Contact"

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
    }
]
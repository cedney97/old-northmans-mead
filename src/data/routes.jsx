import OurMeadPage from "../pages/OurMead";
import HomePage from "../pages/Home";

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
    }
]
import { BrowserRouter, Route, Routes } from "react-router"
import { routes } from "../data/routes"
import { map } from "lodash"
import { ScrollProvider } from "./ScrollContext"

const Contexts = ({
    children
}) => {
    return (
        <BrowserRouter>
            <ScrollProvider>
                {children}
            </ScrollProvider>
        </BrowserRouter>
    )
}

export default Contexts
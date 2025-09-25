import { BrowserRouter } from "react-router"
import { ScrollProvider } from "./ScrollContext"
import { SidebarProvider } from "./SidebarContext"

const Contexts = ({
    children
}) => {
    return (
        <BrowserRouter>
            <SidebarProvider>
                <ScrollProvider>
                    {children}
                </ScrollProvider>
            </SidebarProvider>
        </BrowserRouter>
    )
}

export default Contexts
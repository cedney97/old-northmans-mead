import { createContext, useRef, useContext, useState } from 'react'
import Sidebar from '../components/template/Sidebar'

const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const openSidebar = () => setOpen(true)
    const closeSidebar = () => setOpen(false)

    return (
        <SidebarContext.Provider value={{ openSidebar, closeSidebar }}>
            <Sidebar
                open={open}
                onClose={closeSidebar}
            />
            {children}
        </SidebarContext.Provider>
    )
}

export const useSidebar = () => useContext(SidebarContext)
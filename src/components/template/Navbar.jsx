import logo from 'assets/logo_sans_words.png'
import styles from './Template.module.scss'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { Icon } from '@mui/material'
import { useSidebar } from '../../contexts/SidebarContext'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)
    const { width } = useWindowDimensions()
    const { openSidebar } = useSidebar()
    const navigate = useNavigate()

    const isMobile = width <= 767.98

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={styles.navbar}>
            {
                isMobile &&
                <Icon onClick={openSidebar} fontSize="large">menu</Icon>
            }
            {
                !isMobile &&
                <div className={styles.side} style={{ alignItems: "start" }}>
                    <h1 onClick={() => navigate("/home")}>Home</h1>
                    <h1 onClick={() => navigate("/our-mead")}>Our Mead</h1>
                    <h1 onClick={() => navigate("/how-its-made")}>How It's Made</h1>
                </div>
            }
            <div className={`${styles.logoContainer} ${scrolled ? styles.scrolled : ""}`}>
                <img src={logo} alt="ONM Logo"></img>
            </div>
            {
                !isMobile &&
                <div className={styles.side} style={{ alignItems: "end" }}>
                    <h1 onClick={() => navigate("/mead-guard")}>Mead+Guard</h1>
                    <h1 onClick={() => navigate("/reviews")}>Reviews</h1>
                    <h1 onClick={() => navigate("/contact")}>Contact</h1>
                </div>
            }
        </nav>
    )
}

export default Navbar
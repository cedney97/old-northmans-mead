import logo from 'assets/logo_sans_words.png'
import knot from 'assets/knot.png'
import styles from './Template.module.scss'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={styles.side}>
                <h1 onClick={() => navigate("/home")}>Home</h1>
                <h1>Foundation</h1>
            </div>
            <div className={`${styles.logoContainer} ${scrolled ? styles.scrolled : ""}`}>
                <img src={logo} alt="ONM Logo"></img>
            </div>
            <div className={styles.side}>
                <h1>Mead</h1>
                <h1>Contact</h1>
            </div>
        </nav>
    )
}

export default Navbar
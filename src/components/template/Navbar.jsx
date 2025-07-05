import logo from 'assets/logo_sans_words.png'
import knot from 'assets/knot.png'
import styles from './Template.module.scss'
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={styles.navbar}>
            <div className={`${styles.logoContainer} ${scrolled ? styles.scrolled : ""}`}>
                <img src={logo} alt="ONM Logo"></img>
            </div>
        </nav>
    )
}

export default Navbar
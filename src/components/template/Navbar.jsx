import logo from 'assets/logo.png'
import styles from './Template.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <img src={logo} alt="ONM Logo"></img>
        </nav>
    )
}

export default Navbar
import logo from 'assets/logo.png'
import styles from './Template.module.scss'

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div>
                <img src={logo} alt="ONM Logo"></img>
            </div>
        </nav>
    )
}

export default Navbar
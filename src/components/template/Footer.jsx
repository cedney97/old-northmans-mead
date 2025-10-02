import styles from './Template.module.scss'
import banner from 'assets/banner.png'
import logo from 'assets/logo.png'
import ContactForm from './ContactForm'
import viking from 'assets/vikingdarker.jpg'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <img src={banner} alt="Runic Banner" className={styles.banner}></img>
            <h1 className={styles.callToAction}>Greeting of <em>Fara i Viking</em></h1>
            <div className={styles.vikingContainer}>
                <img src={viking} alt="Viking"></img>
            </div>
            <img src={banner} alt="Runic Banner" className={styles.banner}></img>
            <ContactForm />
            <img src={logo} height="128px" width="128px" style={{ marginBottom: "24px" }}></img>
        </div>
    )
}

export default Footer
import styles from './Template.module.scss'
import banner from 'assets/banner.png'
import logo from 'assets/logo.png'
import ContactForm from './ContactForm'
import viking from 'assets/fullwalk.png'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <img src={banner} alt="Runic Banner" className={styles.banner}></img>
            <h1 className={styles.callToAction}><span>If you are looking for something new and invigorating, <br />"Let's go on an adventure" together!</span><br />Fara i Viking!</h1>
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
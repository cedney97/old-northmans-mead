import Hero from './Hero'
import styles from './Home.module.scss'
import Different from './Different'
import banner from 'assets/banner.png'
import logo from 'assets/logo.png'
import ContactForm from './ContactForm'
import Mission from './Mission'
import viking from 'assets/vikingdarker.jpg'

const HomePage = () => {
    return (
        <div className={styles.page}>
            <Hero />
            <Mission />
            <Different />
            <h1 className={styles.callToAction}><span>If you are looking for something new and invigorating, <br />"Let's go on an adventure" together!</span><br />Fara i Viking!</h1>
            <img src={viking} style={{ width: "100%", height: "auto" }}></img>
            <img src={banner} alt="Runic Banner" className={styles.banner}></img>
            <ContactForm />
            <img src={logo} height="128px" width="128px" style={{ marginBottom: "24px" }}></img>
        </div>
    )
}

export default HomePage
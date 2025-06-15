import Navbar from 'components/template/Navbar'
import Notice from 'components/template/Notice'
import Hero from './Hero'
import styles from './Home.module.scss'
import Profiles from './Profiles'
import Different from './Different'
import banner from 'assets/banner.png'
import ContactForm from './ContactForm'
import { useScroll } from '../../contexts/ScrollContext'
import Mission from './Mission'
import viking from 'assets/viking5.jpg'

const HomePage = () => {
    const { handleScroll } = useScroll()

    return (
        <div className={styles.page}>
            <Notice>
                <p>AVAILABLE <b>THIS SUMMER</b> <span style={{ textDecoration: "underline", cursor: "pointer" }} onClick={handleScroll}>PREORDER NOW</span></p>
            </Notice>
            <Navbar />
            <Hero />
            <Mission />
            <Different />
            <Profiles />
            <h1 style={{ fontSize: "64px" }}>Fara i Viking!</h1>
            <img src={viking} style={{ width: "100%", height: "auto" }}></img>
            <img src={banner} alt="Runic Banner" className={styles.banner}></img>
            <ContactForm />
            <Navbar />
        </div>
    )
}

export default HomePage
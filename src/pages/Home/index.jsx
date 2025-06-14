import Navbar from '../../components/template/Navbar'
import Notice from '../../components/template/Notice'
import Hero from './Hero'
import styles from './Home.module.scss'

const HomePage = () => {
    return (
        <div className={styles.page}>
            <Notice>
                <p>AVAILABLE <b>THIS SUMMER</b> <span style={{ textDecoration: "underline"}}>PREORDER NOW</span></p>
            </Notice>
            <Navbar />
            <Hero />
        </div>
    )
}

export default HomePage
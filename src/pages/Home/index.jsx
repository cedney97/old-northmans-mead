import Hero from './Hero'
import styles from './Home.module.scss'
import Different from './Different'
import Mission from './Mission'

const HomePage = () => {
    return (
        <div className={styles.page}>
            <Hero />
            <Mission />
            <Different />
        </div>
    )
}

export default HomePage
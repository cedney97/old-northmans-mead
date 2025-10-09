import divider from "assets/divider.png"
import styles from './Template.module.scss'

const Divider = () => {
    return (
        <img src={divider} className={styles.divider}></img>
    )
}

export default Divider
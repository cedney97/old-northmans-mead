import styles from './Reviews.module.scss'
import parchment from 'assets/parchment.png'

const ReviewCard = ({
    quote,
    name
}) => {

    return (
        <div className={styles.card} style={{ backgroundImage: `url(${parchment})` }}>
            <p className={styles.quote}>{quote}</p>
            <p className={styles.name}>- {name}</p>
        </div>
    )
}

export default ReviewCard
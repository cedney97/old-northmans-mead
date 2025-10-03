import styles from './Reviews.module.scss'

const ReviewCard = ({
    quote,
    name
}) => {
    return (
        <div className={styles.card}>
            <p className={styles.quote}>{quote}</p>
            <p className={styles.name}>- {name}</p>
        </div>
    )
}

export default ReviewCard
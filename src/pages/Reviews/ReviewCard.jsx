import styles from './Reviews.module.scss'
import parchment from 'assets/parchment.png'
import { useMemo } from 'react'

const ReviewCard = ({
    quote,
    name
}) => {

    const sequence = useMemo(() => [quote], [quote])

    return (
        <div className={styles.card} style={{ backgroundImage: `url(${parchment})` }}>
            <p className={styles.quote}>{quote}</p>
            <p className={styles.name}>- {name}</p>
        </div>
    )
}

export default ReviewCard
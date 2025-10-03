import styles from './HowItsMade.module.scss'

const Asset = ({
    type,
    src,
    caption,
    poster
}) => {
    return (
        <div className={styles.asset}>
            {
                type === "image"
                    ? (
                        <img src={src}>
                        </img>
                    )
                    : type === "video"
                        ? (
                            <video controls poster={poster}>
                                <source src={src} type="video/mp4"></source>
                            </video>
                        )
                        : null
            }
            {caption && <p>{caption}</p>}
        </div>
    )
}

export default Asset
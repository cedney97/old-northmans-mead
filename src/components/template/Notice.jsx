import styles from './Template.module.scss'

const Notice = ({
    text
}) => {
    return (
        <div className={styles.notice}>{text}</div>
    )
}

export default Notice
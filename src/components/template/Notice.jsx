import styles from './Template.module.scss'

const Notice = ({
    children
}) => {
    return (
        <div className={styles.notice}>
            {children}
        </div>
    )
}

export default Notice
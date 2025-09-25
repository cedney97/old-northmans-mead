import Page from "../../components/template/Page"
import styles from './MeadGuard.module.scss'
import meadguard from 'assets/meadguard.png'
import divider from "assets/divider.png"

const MeadGuard = () => {
    return (
        <Page className={styles.page}>
            <img src={meadguard} className={styles.hero} />
            <h1>Do you want to Join the Adventure and Support Old Northmen's Mead?</h1>
            <h2 style={{ marginTop: "-32px" }}>Sign up for the MEAD + GUARD and receive the First of it's Kind, ONM Shirt and Mug plus discounts and More!</h2>
            <img src={divider} className={styles.divider}></img>
            <h1>Mead + Guard Tiers</h1>
        </Page>
    )
}

export default MeadGuard
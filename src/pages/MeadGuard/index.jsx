import Page from "../../components/template/Page"
import styles from './MeadGuard.module.scss'
import meadguard from 'assets/meadguard.png'
import divider from "assets/divider.png"
import shirt1 from 'assets/shirt1.jpg'
import shirt2 from 'assets/shirt2.jpg'
import tankard from 'assets/tankard.png'

const MeadGuard = () => {
    return (
        <Page className={styles.page}>
            <img src={meadguard} className={styles.hero} />
            <h1>Do you want to Join the Adventure and Support Old Northmen's Mead?</h1>
            <h2 style={{ marginTop: "-32px" }}>Sign up for the MEAD + GUARD and receive the First of it's Kind, ONM Shirt and Mug plus discounts and More!</h2>
            <img src={divider} className={styles.divider}></img>
            <h1>Mead + Guard Tiers</h1>
            <div className={styles.points}>
                <div>
                    <h3>Tier 1: $100+ Donation</h3>
                    <p>Members get a shirt, Mead + Guard Tankard, and $5 off their next selection of Old Northmen's Mead!</p>
                </div>
                <div>
                    <h3>Tier 2: $250+ Donation</h3>
                    <p>Members get a shirt, Mead + Guard Tankard, and their choice of a bottle of Old Northmen's Mead (including the Holiday-Spiced ready for the Holidays)!</p>
                </div>
                <div>
                    <h3>Tier 3: $500+ Donation</h3>
                    <p>Members get a shirt, Mead + Guard Tankard, and a bottle of each profile of Old Northmen's Mead ready for the Holidays!</p>
                </div>
            </div>
            <h1>Mead + Guard Products</h1>
            <div className={styles.products}>
                <div>
                    <h3>T-Shirt</h3>
                    <div className={styles.images}>
                        <img src={shirt1}></img>
                        <img src={shirt2}></img>
                    </div>
                </div>
                <div>
                    <h3>Tankard</h3>
                    <div className={styles.images}>
                        <img src={tankard}></img>
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default MeadGuard
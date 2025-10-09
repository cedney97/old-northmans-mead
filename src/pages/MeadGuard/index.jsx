import Page from "../../components/template/Page"
import styles from './MeadGuard.module.scss'
import meadguard from 'assets/meadguard.png'
import divider from "assets/divider.png"
import shirt1 from 'assets/shirt_1.jpg'
import shirt2 from 'assets/shirt_2.jpg'
import tankard from 'assets/tankard.png'
import profiles from 'assets/profiles.png'

const MeadGuard = () => {
    return (
        <Page className={styles.page}>
            <img src={meadguard} className={styles.hero} />
            <h1>Do you want to Join the Adventure and Support Old Northmen's Mead?</h1>
            <h2 style={{ marginTop: "-32px" }}>Sign up for the Mead+Guard and receive the First of it's Kind, ONM Shirt and Mug plus discounts and More!</h2>
            <img src={divider} className={styles.divider}></img>
            <h1>Mead+Guard Tiers</h1>
            <div className={styles.points}>
                <div>
                    <h3>Level En (One): The Shield Wall</h3>
                    <p className={styles.price}>$100</p>
                    <p>Mead+Guard Shirt | Tankard | $5 off Next Bottle</p>
                </div>
                <div>
                    <h3>Level To (Two): The Brewer's Select</h3>
                    <p className={styles.price}>$250</p>
                    <p>Mead+Guard Shirt | Tankard | 1 Free Bottle (Including Holiday-Spiced)</p>
                </div>
                <div>
                    <h3>Level Tre (Three): The Jarls of ONM</h3>
                    <p className={styles.price}>$500+</p>
                    <p>Mead+Guard Shirt | Tankard | 1 Free Bottle of Each of the 5 Profiles</p>
                </div>
            </div>
            <h1>Mead+Guard Products</h1>
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
                <div>
                    <h3>Mead</h3>
                    <div className={styles.images}>
                        <img src={profiles} />
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default MeadGuard
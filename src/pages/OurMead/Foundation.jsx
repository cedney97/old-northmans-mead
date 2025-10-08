import styles from './OurMead.module.scss'
import divider from "assets/divider.png"
import meadowsweet_1 from "assets/herbs/meadowsweet-1.webp"
import meadowsweet_2 from "assets/herbs/meadowsweet-2.jpeg"
import CyclingImage from '../../components/util/CyclingImage'

const Foundation = () => {
    return (
        <>
            <h1>The Foundation of Old Northmen's Mead</h1>
            <img src={divider} className={styles.divider}></img>
            <h1 className={styles.meadowsweet} style={{ marginTop: "32px" }}>Meadowsweet</h1>
            <p className={styles.titleCaption}>Every Profile of Old Northmens' Mead starts with Meadowsweet and is infused early on in the fermentation process</p>
            <div className={styles.meadowsweetInfo}>
                <div className={styles.text}>
                    <h2>Herbal Benefits:</h2>
                    <p>Meadowsweet is an herb in the rose family. For centuries, it's been found to be used in Scandinavian meads for its healing properties.</p>
                    <p>In traditional medicine, it's been used to treat heartburn, stomach ulcers, colds, joint pain, arthritis, and gout. It's also been administered as a diuretic to increase urine output in people with kidney or bladder infections.</p>
                    <h2 style={{ marginTop: 16 }}>A Cautionary Word:</h2>
                    <p>Meadowsweet contains small amount of a natural compound called Salicylic Acid or <em>Salicylates</em> which has blood-thinning properties like Aspirin. Other natural herbs and botanicals that contain Salicylates include ginger, tumeric, and cayenne pepper.</p>
                </div>
                <div className={styles.image}>
                    <CyclingImage
                        images={[meadowsweet_1, meadowsweet_2]}
                    />
                    <p className={styles.bee}>A Honey Bee's Favorite: The sweet scent of these flowers draws many bees, and other pollinators, to Meadowsweet for its rich pollen.</p>
                </div>
            </div>
            <p className={styles.moreInfo}>For more information on Meadowsweet, <a href="https://www.healthline.com/nutrition/meadowsweet-herb">here is a great resource to start with!</a></p>
            <div className={styles.vikingName}>
                <h3><span className="red">Meadowsweet</span> has been referred to as the "Mead Herb" by many modern-day Scandinavians because of its Old Norse / Danish name:</h3>
                <p className={styles.mjodurt}>Mjodurt</p>
            </div>
        </>
    )
}

export default Foundation
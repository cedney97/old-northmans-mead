import styles from './Home.module.scss'
import divider from "assets/divider.png"
import meadowsweet_1 from "assets/herbs/meadowsweet-1.webp"
import meadowsweet_2 from "assets/herbs/meadowsweet-2.jpeg"
import CyclingImage from '../../components/util/CyclingImage'

const Different = () => {

    return (
        <section className={styles.different}>
            <h1>How ONM Is Different</h1>
            <p>Old Northmen's Mead isn't just another brew, it's an homage to our ancestors and a beverage that comes with nature's source of energy - Honey. Brewed with raw honey, fresh water, and infused fruits, herbs, and spices, our mead honors ancient traditions while embracing a cleaner, more intentional lifestyle. No shortcuts. No additives. Just bold flavor, natural strength, and a story in every bottle.</p>
            <div className={styles.points}>
                <div>
                    <h3>Infused, Not Flavored</h3>
                    <p>Fresh fruits, herbs, and spices. Never artificial extracts.</p>
                </div>
                <div>
                    <h3>Runes of Purpose</h3>
                    <p>Each profile is inspired by a Norse rune that fuels its purpose.</p>
                </div>
                <div>
                    <h3>Clean and Conscious</h3>
                    <p>No added gluten, sulfites, or preservatives. Just pure mead.</p>
                </div>
            </div>
            <h1>The Foundation of Old Northmen's Mead</h1>
            <img src={divider} className={styles.divider}></img>
            <h1 className={styles.meadowsweet}>Meadow&shy;sweet</h1>
            <div className={styles.meadowsweetInfo}>
                <div className={styles.text}>
                    <h2>Herbal Benefits:</h2>
                    <p>Meadowsweet is an herb in the rose family. For centuries, it's been found to be used in Scandinavian meads for its healing properties.</p>
                    <p>In traditional medicine, it's been used to treat heartburn, stomach ulcers, colds, joint pain, arthritis, and gout. It's also been administered as a diuretic to increase urine output in people with kidney or bladder infections.</p>
                </div>
                <CyclingImage
                    images={[meadowsweet_1, meadowsweet_2]}
                    className={styles.image}
                />
            </div>
            <p className={styles.bee}>A Honey Bee's Favorite: The sweet scent of these flowers draws many bees, and other pollinators, to Meadowsweet for its rich pollen.</p>
            <div className={styles.vikingName}>
                <h3><span className="red">Meadowsweet</span> has been referred to as the "Mead Herb" by many modern-day Scandinavians because of its Old Norse / Danish name:</h3>
                <p className={styles.mjodurt}>Mjodurt</p>
            </div>
        </section>
    )
}

export default Different
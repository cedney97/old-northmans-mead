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
        </section>
    )
}

export default Different
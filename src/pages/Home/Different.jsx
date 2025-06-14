import styles from './Home.module.scss'

const Different = () => {
    return (
        <section className={styles.different}>
            <h1>How ONM Is Different</h1>
            <p>Old Northmen's Mead isn't just a drink: it's a return to something real. Brewed with raw honey, fresh water, and infused fruits, herbs, and spices, our mead honors ancient traditions while embracing a cleaner, more intentional lifestyle. No shortcuts. No additives. Just bold flavor, natural strength, and a story in every bottle.</p>
            <div className={styles.points}>
                <div>
                    <h3>Infused, Not Flavored</h3>
                    <p>Real fruit, herbs, and spices. Never artificial extracts.</p>
                </div>
                <div>
                    <h3>Runes of Purpose</h3>
                    <p>Each profile is inspired by a Norse rune that fuels its purpose.</p>
                </div>
                <div>
                    <h3>Clean and Conscious</h3>
                    <p>No gluten. No sulfites. No preservatives. Just pure mead.</p>
                </div>
            </div>
            <h2>We're honoring old traditions and forging one anew.</h2>
        </section>
    )
}

export default Different
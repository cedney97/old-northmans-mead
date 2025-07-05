import { useEffect, useState } from "react"
import { profiles } from "../../data/profiles"
import styles from './ProfileDetails.module.scss'

const Details = ({
    profile
}) => {
    const [imageIndex, setImageIndex] = useState(0)

    useEffect(() => {
        const handleAnimation = () => {
            setImageIndex(prev => (prev + 1) % profile.details_images.length)
        }

        const interval = setInterval(handleAnimation, 5000)
        return () => clearInterval(interval)
    }, [profile.details_images])

    useEffect(() => {
        setImageIndex(0)
    }, [profile])

    return (
        <div className={styles.container}>
            <div className={styles.runeContainer}>
                <img src={profile.rune} alt="rune"></img>
                <div>
                    <h2>{profile.rune_name}</h2>
                    <p>{profile.rune_description}</p>
                </div>
            </div>
            <div className={styles.details}>
                <h2>{profile.name}</h2>
                <h3>{profile.subtitle}</h3>
                {profile.spiel}
            </div>
            <div className={styles.image} style={{ backgroundImage: `url(${profile.details_images[imageIndex]})` }}></div>
        </div>
    )
}

export default Details
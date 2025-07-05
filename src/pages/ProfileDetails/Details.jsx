import { useEffect, useState } from "react"
import { profiles } from "../../data/profiles"
import styles from './ProfileDetails.module.scss'
import CyclingImage from "../../components/util/CyclingImage"

const Details = ({
    profile
}) => {
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
            <CyclingImage
                images={profile.details_images}
                className={styles.image}
                imageStyles={profile.image_styles}
            />
        </div>
    )
}

export default Details
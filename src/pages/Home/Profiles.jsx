import { profiles } from 'data/profiles'
import styles from './Home.module.scss'
import Profile from './Profile'
import { useState } from 'react'
import ProfileInfo from './ProfileInfo'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import { useScroll } from '../../contexts/ScrollContext'

const Profiles = () => {
    const [selectedProfile, setSelectedProfile] = useState(profiles[0])
    const { width } = useWindowDimensions()
    const { handleScroll } = useScroll()

    return (
        <section className={styles.profilesSection}>
            <div
                className={styles.highlight}
                style={{
                    backgroundImage: `url(${selectedProfile.verb_image})`
                }}
            >
                <p><span>{selectedProfile?.verb}</span><br />The Viking Spirit</p>
                <button onClick={handleScroll}>Buy Our Mead</button>
            </div>
            <div className={styles.profiles}>
                {
                    profiles.map((profile) => (
                        <Profile
                            key={profile.name}
                            profile={profile}
                            selectedProfile={selectedProfile}
                            setSelectedProfile={setSelectedProfile}
                        />
                    ))
                }
            </div>
            <div className={styles.profileInfo}>
                <h1>{selectedProfile.rune_name}</h1>
                <p>{selectedProfile.rune_description}</p>
            </div>
        </section>
    )
}

export default Profiles
import { profiles } from 'data/profiles'
import styles from './Home.module.scss'
import Profile from './Profile'
import { useState } from 'react'
import { useScroll } from '../../contexts/ScrollContext'
import BackgroundRotator from '../../components/util/BackgroundRotator'
import Details from '../ProfileDetails/Details'

const Profiles = () => {
    const [selectedProfile, setSelectedProfile] = useState(profiles[0])
    const { handleScroll } = useScroll()

    return (
        <section className={styles.profilesSection}>
            <h1 className={styles.title}><span className="red">O</span>ld <span className="red">N</span>orthmen's <span className="red">5</span> <span className="red">P</span>rofiles</h1>
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
            <div className={styles.highlight}>
                <BackgroundRotator image={selectedProfile.verb_image} />
                <div className={styles.highlightContent}>
                    <p>
                        <span>{selectedProfile?.verb}</span>
                        <br />
                        The Viking Spirit
                    </p>
                    <button onClick={handleScroll}>Buy Our Mead</button>
                </div>
            </div>
            <Details
                profile={selectedProfile}
            />
            {/* <div className={styles.profileInfo}>
                <h1>{selectedProfile.rune_name}</h1>
                <p>{selectedProfile.rune_description}</p>
            </div> */}
        </section>
    )
}

export default Profiles
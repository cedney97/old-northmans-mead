import styles from './Home.module.scss'
import { profiles } from "data/profiles"
import MobileProfile from './MobileProfile'
import { useScroll } from '../../contexts/ScrollContext'

const MobileProfiles = ({
    selectedProfile,
    setSelectedProfile
}) => {
    const { handleScroll } = useScroll()

    return (
        <section className={styles.mobileProfiles}>
            {
                profiles.map((profile) => (
                    <MobileProfile 
                        key={profile.name}
                        profile={profile}
                        selectedProfile={selectedProfile}
                        setSelectedProfile={setSelectedProfile}
                    />
                ))
            }
            <button onClick={handleScroll}>Preorder</button>
        </section>
    )
}

export default MobileProfiles
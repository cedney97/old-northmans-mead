import { profiles } from 'data/profiles'
import styles from './Home.module.scss'
import DesktopProfile from './DesktopProfile'
import { useState } from 'react'
import ProfileInfo from './ProfileInfo'
import DesktopProfiles from './DesktopProfiles'
import MobileProfiles from './MobileProfiles'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const Profiles = () => {
    const [selectedProfile, setSelectedProfile] = useState(null)
    const { width } = useWindowDimensions()

    return (
        <section className={styles.profilesSection}>
            <h1>The Five <span style={{ color: "#ED2E24"}}>Original</span> Profiles</h1>
            {
                width > 1330 
                ?
                <DesktopProfiles 
                    selectedProfile={selectedProfile}
                    setSelectedProfile={setSelectedProfile}
                />
                :
                <MobileProfiles 
                    selectedProfile={selectedProfile}
                    setSelectedProfile={setSelectedProfile}
                />
            }
        </section>
    )
}

export default Profiles
import { profiles } from "data/profiles"
import styles from './Home.module.scss'
import DesktopProfile from './DesktopProfile'
import ProfileInfo from './ProfileInfo'

const DesktopProfiles = ({
    selectedProfile,
    setSelectedProfile
}) => {
    return (
        <>
        <div className={styles.profiles}>
                {
                    profiles.map((profile) => (
                        <DesktopProfile 
                            key={profile.name}
                            profile={profile}
                            selectedProfile={selectedProfile}
                            setSelectedProfile={setSelectedProfile}
                        />
                    ))
                }
            </div>
            <ProfileInfo
                profile={selectedProfile}
            />
        </>
    )
}

export default DesktopProfiles
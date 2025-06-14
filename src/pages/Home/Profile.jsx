import styles from './Home.module.scss'
import { useScroll } from '../../contexts/ScrollContext'

const Profile = ({
    profile,
    selectedProfile,
    setSelectedProfile
}) => {
    const { handleScroll } = useScroll()

    return (
        <div className={styles.profile}>
            <div
                className={styles.runeContainer}
                style={{
                    backgroundColor: selectedProfile === profile ? profile.brightColor : "transparent"
                }}
                onClick={() => setSelectedProfile(profile)}
            >
                <img
                    src={profile.rune}
                    className={styles.rune}
                    alt={`${profile.name} Rune`}
                />
            </div>
            <img src={profile.mockup} className={styles.mockup} alt={`${profile.name} Bottle`}></img>
            <p>{profile.name}</p>
            <div className={styles.buttons}>
                <button onClick={handleScroll}>Preorder Now</button>
                <button onClick={() => setSelectedProfile(profile)}>View Flavor Profile</button>
            </div>
        </div>
    )
}

export default Profile
import styles from './Home.module.scss'
import { useScroll } from '../../contexts/ScrollContext'
import { useEffect, useState } from 'react'

const Profile = ({
    profile,
    selectedProfile,
    setSelectedProfile
}) => {
    const { handleScroll } = useScroll()
    const [hover, setHover] = useState(selectedProfile === profile)

    useEffect(() => {
        setHover(selectedProfile === profile)
    }, [selectedProfile])

    return (
        <div className={styles.profile}>
            <div
                className={styles.runeContainer}
                style={{
                    backgroundColor: selectedProfile === profile ? profile.brightColor : "transparent",
                }}
                onClick={() => setSelectedProfile(profile)}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(selectedProfile === profile)}
            >
                <img
                    src={profile.rune}
                    className={styles.rune}
                    alt={`${profile.name} Rune`}
                    style={{
                        filter: hover ? `drop-shadow(0px 0px 8px ${profile.brightColor}) drop-shadow(0px 0px 10px white)` : "none"
                    }}
                />
            </div>
            <img
                src={profile.mockup}
                className={styles.mockup} alt={`${profile.name} Bottle`}
                style={{
                    filter: hover ? `drop-shadow(0px 0px 8px ${profile.brightColor}) drop-shadow(0px 0px 10px white)` : "none"
                }}
            ></img>
            <p>{profile.name}</p>
            <div className={styles.buttons}>
                <button onClick={handleScroll}>Preorder <span className="mobile-gone">Now</span></button>
            </div>
        </div>
    )
}

export default Profile
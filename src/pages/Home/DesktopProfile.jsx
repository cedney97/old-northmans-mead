import { useState } from 'react'
import styles from './Home.module.scss'
import { useScroll } from '../../contexts/ScrollContext'

const DesktopProfile = ({
    profile,
    selectedProfile,
    setSelectedProfile
}) => {
    const { handleScroll } = useScroll()

    const [hover, setHover] = useState(false)

    return (
        <div
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={styles.profile}
            style={{
                background: (selectedProfile === profile || hover) ? profile.brightColor : profile.color
            }}
        >
            <img src={profile.rune} className={styles.rune} alt={`${profile.name} Rune`}></img>
            <img src={profile.mockup} className={styles.mockup} alt={`${profile.name} Bottle`}></img>
            <p>{profile.name}</p>
            <div className={styles.buttons}>
                <button onClick={handleScroll}>Preorder Now</button>
                <button onClick={() => setSelectedProfile(profile)}>View Flavor Profile</button>
            </div>
        </div>
    )
}

export default DesktopProfile
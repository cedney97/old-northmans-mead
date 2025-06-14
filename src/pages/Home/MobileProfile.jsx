import styles from './Home.module.scss'
import dropdown from 'assets/dropdown.png'

const MobileProfile = ({
    profile,
    selectedProfile,
    setSelectedProfile
}) => {
    return (
        <div
            className={`${styles.mobileProfile} ${selectedProfile === profile ? styles.open : ""}`}
            style={{
                backgroundColor: selectedProfile === profile ? profile.brightColor : profile.color
            }}
            onClick={() => setSelectedProfile(profile)}
        >
            <div className={styles.header}>
                <img src={profile.rune} alt="Rune"></img>
                <h1>{profile.name}</h1>
                <img
                    src={dropdown}
                    alt="Dropdown Arrow"
                    className={styles.dropdown}
                />
            </div>
            <div className={styles.content}>
                <div className={styles.runeInfo}>
                    <h3>{profile.rune_name}</h3>
                    <p>{profile.rune_description}</p>
                </div>
                    <p style={{ width: "75%" }}>{profile.description}</p>
            </div>
        </div>
    )
}

export default MobileProfile
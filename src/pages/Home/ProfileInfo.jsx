import styles from './Home.module.scss'

const ProfileInfo = ({
    profile
}) => {
    return (
        <div
            className={styles.profileInfo}
            style={{
                borderColor: profile?.brightColor,
                ...(
                    profile
                    ?
                    {backgroundImage: "none"}
                    :
                    {}
                )
            }}
        >
            {
                profile
                    ?
                    <>
                        <div className={styles.runeInfo}>
                            <h3>{profile.rune_name}</h3>
                            <p>{profile.rune_description}</p>
                            <img src={profile.crest} className={styles.crest} alt={`${profile.name} Crest`}></img>
                        </div>
                        <div className={styles.description}>
                            <h2>{profile.name}</h2>
                            <p>{profile.description}</p>
                        </div>
                        <div className={styles.decoration} style={{ background: profile.brightColor }}></div>
                    </>
                    :
                    <p>Learn More<br /> View The Flavor Profiles</p>
            }
        </div>
    )
}

export default ProfileInfo
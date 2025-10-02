import styles from './OurMead.module.scss'
import Profiles from './Profiles'
import Page from '../../components/template/Page'
import Foundation from './Foundation'

const OurMeadPage = () => {
    return (
        <Page className={styles.page}>
            <Profiles />
            <Foundation />
        </Page>
    )
}

export default OurMeadPage
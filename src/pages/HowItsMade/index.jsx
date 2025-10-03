import { map } from 'lodash'
import styles from './HowItsMade.module.scss'
import { assets } from './data'
import Asset from './Asset'

const HowItsMadePage = () => {
    return (
        <div className={"page " + styles.page}>
            <h1>How It's Made</h1>
            <div className={styles.assets}>
                {
                    map(assets, (asset, i) => (
                        <Asset
                            key={i}
                            {...asset}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default HowItsMadePage
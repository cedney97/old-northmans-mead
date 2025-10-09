import { map } from 'lodash'
import styles from './HowItsMade.module.scss'
import { assets, steps } from './data'
import Asset from './Asset'
import Step from './Step'

const HowItsMadePage = () => {
    return (
        <div className={"page " + styles.page}>
            <h1>How It's Made</h1>
            <div className={styles.steps}>
                {
                    map(steps, (step, i) => (
                        <Step
                            index={i}
                            key={i}
                            {...step}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default HowItsMadePage
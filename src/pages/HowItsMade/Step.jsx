import { map } from "lodash"
import Divider from "../../components/template/Divider"
import styles from "./HowItsMade.module.scss"
import Asset from "./Asset"

const Step = ({
    index,
    title,
    text,
    assets
}) => {
    return (
        <div className={styles.step}>
            {index !== 0 && <Divider />}
            <h1>{title}</h1>
            <h2 dangerouslySetInnerHTML={{ __html: text }}></h2>
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

export default Step
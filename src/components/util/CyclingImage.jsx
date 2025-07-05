import { useEffect, useMemo, useState } from "react"
import styles from './Util.module.scss'

const CyclingImage = ({
    images,
    className,
    imageStyles
}) => {
    const [imageIndex, setImageIndex] = useState(0)
    const imageStyle = useMemo(() => {
        if (imageStyles?.length > 0) {
            return imageStyles[imageIndex]
        }
        return {}
    }, [imageIndex])

    useEffect(() => {
        setImageIndex(0)

        const handleAnimation = () => {
            setImageIndex(prev => (prev + 1) % images.length)
        }

        const interval = setInterval(handleAnimation, 5000)
        return () => clearInterval(interval)
    }, [images])

    return (
        <div className={`${className} ${styles.cyclingImage}`} style={{ backgroundImage: `url(${images[imageIndex]})`, transition: "0.25s ease all", ...imageStyle }}></div>
    )
}

export default CyclingImage
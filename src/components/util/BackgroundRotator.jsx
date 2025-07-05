import { useEffect, useState } from 'react';
import styles from './Util.module.scss';

const BackgroundRotator = ({ image }) => {
    const [currentImage, setCurrentImage] = useState(image);
    const [nextImage, setNextImage] = useState(null);

    useEffect(() => {
        if (image !== currentImage) {
            setNextImage(image);

            const timeout = setTimeout(() => {
                setCurrentImage(image);
                setNextImage(null);
            }, 500); // duration matches CSS transition

            return () => clearTimeout(timeout);
        }
    }, [image, currentImage]);

    return (
        <div className={styles.backgroundContainer}>
            <div
                className={styles.bgLayer}
                style={{ backgroundImage: `url(${currentImage})` }}
            />
            {nextImage && (
                <div
                    className={`${styles.bgLayer} ${styles.fadeIn}`}
                    style={{ backgroundImage: `url(${nextImage})` }}
                />
            )}
        </div>
    );
};

export default BackgroundRotator;
import styles from './Template.module.scss'

const TexturedBorder = ({ children }) => {
    return (
        <div className={styles.borderWrapper}>
            <svg className={styles.borderSVG} viewBox="0 0 100 100" preserveAspectRatio="none">
                <filter id="roughen" x="0" y="0">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                </filter>
                <rect
                    x="2.5"
                    y="2.5"
                    width="95"
                    height="95"
                    stroke="goldenrod"
                    strokeWidth="5"
                    fill="none"
                    filter="url(#roughen)"
                />
            </svg>
            <div className={styles.borderContent}>
                {children}
            </div>
        </div>
    );
};

export default TexturedBorder;
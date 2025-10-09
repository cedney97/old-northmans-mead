import Hero from './Hero'
import styles from './Home.module.scss'
import Different from './Different'
import Mission from './Mission'
import { useScroll } from '../../contexts/ScrollContext'
import { useEffect } from 'react'
import Page from '../../components/template/Page'

const HomePage = () => {

    return (
        <Page>
            <Hero />
            <Mission />
            <Different />
        </Page>
    )
}

export default HomePage
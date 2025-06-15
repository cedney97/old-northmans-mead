import { useScroll } from '../../contexts/ScrollContext'
import styles from './Home.module.scss'

const ContactForm = () => {
    const { scrollTargetRef } = useScroll()

    return (
        <div className={styles.contactForm} ref={scrollTargetRef} id="contact">
            <h1>Send Us A Blast Any Time</h1>
            <form action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="6d182fb6-bb22-4f2a-90c6-b9cdf0de51b5"></input>

                <div className={styles.formRow}>
                    <input name="name" id="name" placeholder="John Doe" type="text"></input>
                    <input name="email" id="email" placeholder="example@email.com" type="email"></input>
                </div>
                <textarea
                    name="message"
                    id="message"
                    placeholder="Feel free to contact us for more information"
                />
                <button type="submit">SEND</button>
            </form>
        </div>
    )
}

export default ContactForm
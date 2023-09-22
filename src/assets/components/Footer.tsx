import { Link } from 'react-router-dom';

import styles from 'src/styles/footer.module.scss';
import IconInstagram from 'src/assets/icons/instagram';
import IconX from 'src/assets/icons/x'
import IconFacebook from 'src/assets/icons/facebook'
import IconLocation from 'src/assets/icons/location'
import IconLinkedIn from 'src/assets/icons/linkedin'
import IconPhone from 'src/assets/icons/phone'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__navigation}>
                {/* --- one --- */}
                <section>
                    <div className={styles.footer__header}>
                        get<span data-color="primary">Linked</span>
                    </div>
                    <div style={{ lineHeight: '172.4%' }}>
                        Getlinked Tech Hackathon is a technology innovation
                        program established by a group of organizations with the
                        aim of showcasing young and talented individuals in the
                        field of technology
                    </div>

                    <div className={styles.footer__use}>
                        <div>Terms of Use </div> <div> Privacy Policy</div>
                    </div>
                </section>

                {/* --- Two ---  */}
                <section>
                    <div className={styles.footer__header}>Useful Links</div>
                    <div className={styles.footer__link}>
                        <Link to="/">Overview</Link>
                    </div>
                    <div className={styles.footer__link}>
                        <Link to="/">Timeline</Link>
                    </div>
                    <div className={styles.footer__link}>
                        <Link to="/">FAQs</Link>
                    </div>
                    <div className={styles.footer__link}>
                        <Link to="/">Register</Link>
                    </div>
                    <div className={styles.footer__link}>
                        <div>Follow us</div>
                        <IconInstagram/>
                        <IconX/>
                        <IconFacebook/>
                        <IconLinkedIn/>
                    </div>
                </section>

                {/* --- Three ---  */}
                <section className={styles.footer__contact}>
                    <div className={styles.footer__header}><IconPhone/> <span>Contact Us</span></div>
                    <div className={styles.footer__item}>
                        <IconLocation/>
                        <span>+234 6707653444</span>
                    </div>

                    <div className={styles.footer__item}>
                        <div>27,Alara Street Yaba 100012 Lagos State</div>
                    </div>
                </section>
            </div>

            <div style={{ marginTop: '3.78rem' }}>
                All rights reserved. © getlinked Ltd.
            </div>
        </div>
    );
};

export default Footer;

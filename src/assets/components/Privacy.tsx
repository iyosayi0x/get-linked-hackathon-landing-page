import styles from 'src/styles/security.module.scss';

import images from '../images';
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <div className={styles.security}>
            <section>
                <div className={styles.security__header}>
                    <div>Privacy Policy and</div>
                    <div data-color="primary">Terms</div>
                </div>

                <div className={styles.security__date}>
                    Last updated on September 12, 2023
                </div>

                <div style={{ lineHeight: '188.4%' }}>
                    Below are our privacy & policy, which outline a lot of
                    goodies.
                    <br /> it's our aim to always take of our participant
                </div>

                <div className={styles.security__boxWrapper}>
                    <div
                        className={styles.security__description}
                        style={{ lineHeight: '216.4%' }}
                    >
                        At getlinked tech Hackathon 1.0, we value your privacy
                        and are committed to protecting your personal
                        information. This Privacy Policy outlines how we
                        collect, use, disclose, and safeguard your data when you
                        participate in our tech hackathon event. By
                        participating in our event, you consent to the practices
                        described in this policy.
                    </div>

                    <div className={styles.security__policyHeader}>
                        Licensing Policy
                    </div>

                    <div className={styles.security__listHeader}>
                        Here are terms of our Standard License:
                    </div>
                    <ul className={styles.security__list}>
                        <li>
                            The Standard License grants you a non-exclusive
                            right to navigate and register for our event
                        </li>
                        <li>
                            You are licensed to use the item available at any
                            free source sites, for your project developement
                        </li>
                    </ul>

                    <div style={{ display: 'grid', placeItems: 'center' }}>
                        <Link to="/register">
                            <button>Register</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section>
                <img src={images.security} alt="security" />
            </section>
        </div>
    );
};

export default Privacy;

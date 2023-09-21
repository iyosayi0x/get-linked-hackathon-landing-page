import styles from 'src/styles/security.module.scss';

import images from '../images';
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <div className={styles.security}>
            <section>
                <div>
                    <div>Privacy Policy and</div>
                    <div>Terms</div>
                </div>

                <div>Last updated on September 12, 2023</div>

                <div>
                    Below are our privacy & policy, which outline a lot of
                    goodies. it's our aim to always take of our participant
                </div>

                <div>
                    <div>
                        At getlinked tech Hackathon 1.0, we value your privacy
                        and are committed to protecting your personal
                        information. This Privacy Policy outlines how we
                        collect, use, disclose, and safeguard your data when you
                        participate in our tech hackathon event. By
                        participating in our event, you consent to the practices
                        described in this policy.
                    </div>

                    <div>Licensing Policy</div>

                    <div>Here are terms of our Standard License:</div>
                    <ul>
                        <li>
                            The Standard License grants you a non-exclusive
                            right to navigate and register for our event
                        </li>
                        <li>
                            You are licensed to use the item available at any
                            free source sites, for your project developement
                        </li>
                    </ul>

                    <div>
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

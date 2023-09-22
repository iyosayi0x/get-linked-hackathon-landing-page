import Header from 'src/assets/components/Header';
import styles from 'src/styles/register.module.scss';

import formStyles from 'src/styles/form.module.scss';

import images from 'src/assets/images';
import Success from 'src/assets/components/modals/Success';
import { useState } from 'react';

const Register = () => {
    const [visible] = useState(false);
    const resetClose = () => {};
    return (
        <>
            <div>
                <Header showBorder={false} />

                <main className={styles.register__main}>
                    <aside className={styles.register__aside}>
                        <img src={images.gdesigner} alt="graphics designer" />
                    </aside>
                    <form className={styles.register__form}>
                        <section>
                            <div className={styles.register__formName}>
                                Register
                            </div>
                            <div className={styles.register__ctaSecondary}>
                                <div>Be part of this movement!</div>
                                <div>
                                    <img src={images.girl} alt="Girl walk" />
                                    <img src={images.boy2} alt="boy walk" />
                                </div>
                            </div>

                            <div className={styles.register__cta}>
                                CREATE YOUR ACCOUNT
                            </div>
                        </section>

                        <div className={formStyles.form__dualFormField}>
                            <div>
                                <div className={formStyles.form__labelWrapper}>
                                    <label className={formStyles.form__label}>
                                        Team's Name
                                    </label>
                                </div>
                                <input
                                    className={formStyles.form__input}
                                    type="text"
                                    placeholder="Enter the name of your group"
                                />
                            </div>

                            <div>
                                <div>
                                    <label className={formStyles.form__label}>
                                        Phone
                                    </label>
                                </div>
                                <input
                                    className={formStyles.form__input}
                                    type="text"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>

                        <div className={formStyles.form__dualFormField}>
                            <div>
                                <div className={formStyles.form__labelWrapper}>
                                    <label className={formStyles.form__label}>
                                        Email
                                    </label>
                                </div>
                                <input
                                    className={formStyles.form__input}
                                    type="text"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            <div>
                                <div>
                                    <label className={formStyles.form__label}>
                                        Project Topic
                                    </label>
                                </div>
                                <input
                                    className={formStyles.form__input}
                                    type="text"
                                    placeholder="What is your group project topic"
                                />
                            </div>
                        </div>

                        <div className={formStyles.form__dualFormField}>
                            <div>
                                <div className={formStyles.form__labelWrapper}>
                                    <label className={formStyles.form__label}>
                                        Category
                                    </label>
                                </div>
                                <input
                                    className={formStyles.form__input}
                                    type="text"
                                    placeholder="Name"
                                />
                            </div>

                            <div>
                                <div className={formStyles.form__labelWrapper}>
                                    <label className={formStyles.form__label}>
                                        Group Size
                                    </label>
                                </div>
                                <input
                                    className={formStyles.form__input}
                                    type="text"
                                    placeholder="Name"
                                />
                            </div>
                        </div>

                        <div className={styles.register__consent}>
                            <div>
                                Please review your registration details before
                                submitting
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    className={styles.register__consentAgree}
                                />{' '}
                                <span>
                                    I agreed with the event terms and conditions
                                    and privacy policy
                                </span>
                            </div>
                        </div>

                        <div style={{ display: 'grid', placeItems: 'center' }}>
                            <button>Register Now</button>
                        </div>
                    </form>
                </main>
            </div>
            <Success {...{ visible, onClose: resetClose }} />
        </>
    );
};

export default Register;

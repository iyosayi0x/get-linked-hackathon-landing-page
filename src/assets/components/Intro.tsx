import styles from 'src/styles/home.module.scss';

import images from 'src/assets/images';

import Line from 'src/assets/illustration/line';

const Intro = () => {
    return (
        <section className={styles.home__main_section} data-index="one">
            <div className={styles.home__main__overviewCtaSumWrapper}>
                <div className={styles.home__main__overviewCtaSum}>
                    Igniting a Revolution in HR Innovation
                </div>
                <div>
                    <Line />
                </div>
            </div>

            <section className={styles.home__main__overview}>
                <div className={styles.home__main__overviewInfo}>
                    <div>
                        <div className={styles.home__main__overviewCta}>
                            getlinked Tech
                        </div>
                        <div className={styles.home__main__overviewCta}>
                            Hackathon{' '}
                            <span
                                data-color="primary"
                                className={styles.home__main__overviewCta}
                            >
                                1.0
                            </span>
                        </div>
                        <div className={styles.home__main__overviewDesc}>
                            Participate in getlinked tech Hackathon 2023
                            <br />
                            stand a chance to win a Big prize
                        </div>
                    </div>

                    <div className={styles.home__main__overviewButtonWrapper}>
                        <button>Register</button>
                    </div>

                    <div className={styles.home__main__overviewTimer}>
                        <div>
                            <span>00</span>
                            <span>H</span>
                        </div>
                        <div>
                            <span>00</span>
                            <span>M</span>
                        </div>
                        <div>
                            <span>00</span>
                            <span>S</span>
                        </div>
                    </div>
                </div>

                <div className={styles.home__main__overviewImages}>
                    <img
                        src={images.boy}
                        alt="boy"
                        className={styles.home__image_boy}
                    />
                    {/* <img src={images.globe} alt='globe' className={styles.home__image_globe}/> */}
                </div>
            </section>
        </section>
    );
};

export default Intro;

import { useMemo } from 'react';
import { Link } from 'react-router-dom';

import Line from 'src/assets/illustration/line';

import styles from 'src/styles/home.module.scss';

import images from 'src/assets/images';

const Home = () => {
    const navigation = useMemo(() => {
        return [
            {
                href: '#timeline',
                name: 'Timeline',
            },
            {
                href: '#overview',
                name: 'Overview',
            },
            {
                href: '#faqs',
                name: 'FAQs',
            },
            {
                href: '#contact',
                name: 'Contact',
            },
        ];
    }, []);
    return (
        <div className={styles.home}>
            {/* Header  */}
            <header className={styles.home__header}>
                <div className={styles.home__logo}>
                    get<span>linked</span>
                </div>

                <nav className={styles.home__navigation_wrapper}>
                    <ul className={styles.home__navigation}>
                        {navigation.map((navPath) => (
                            <li key={navPath.href}>
                                <Link to={navPath.href}>{navPath.name}</Link>
                            </li>
                        ))}
                    </ul>

                    <div>
                        <button>Register</button>
                    </div>
                </nav>
            </header>
            {/* End Of Header  */}

            <main className={styles.home__main}>
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
                                        className={
                                            styles.home__main__overviewCta
                                        }
                                    >
                                        1.0
                                    </span>
                                </div>
                                <div
                                    className={styles.home__main__overviewDesc}
                                >
                                    Participate in getlinked tech Hackathon 2023
                                    <br />
                                    stand a chance to win a Big prize
                                </div>
                            </div>

                            <div style={{ marginTop: '2.12rem' }}>
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

                <section
                    className={styles.home__main__overviewItem}
                    style={{ paddingLeft: '16.42rem', gap: '7.7rem' }}
                >
                    <div className={styles.home__main__overviewItem_ilstr}>
                        <img
                            src={images.big_idea}
                            alt="big-idea"
                            style={{ width: '35rem', height: '34.07rem' }}
                        />
                    </div>

                    <div className={styles.home__main__overviewItem__metaData}>
                        <div
                            className={
                                styles.home__main__overviewItem_metaData_header
                            }
                        >
                            <div>Introduction to getlinked</div>
                            <div data-color="primary">tech Hackathon 1.0</div>
                        </div>
                        <div
                            className={
                                styles.home__main_overviewItem_metaData_description
                            }
                        >
                            Our tech hackathon is a melting pot of visionaries,
                            and its purpose is as clear as day: to shape the
                            future. Whether you're a coding genius, a design
                            maverick, or a concept wizard, you'll have the
                            chance to transform your ideas into reality. Solving
                            real-world problems, pushing the boundaries of
                            technology, and creating solutions that can change
                            the world, that's what we're all about!
                        </div>
                    </div>
                </section>

                <section
                    className={styles.home__main__overviewItem}
                    data-reversed
                    style={{ gap: '3.42rem' }}
                >
                    <div className={styles.home__main__overviewItem_ilstr}>
                        <img
                            src={images.woman}
                            alt="woman"
                            style={{ width: '47.42rem', height: '47.42rem' }}
                        />
                    </div>

                    <div className={styles.home__main__overviewItem__metaData}>
                        <div
                            className={
                                styles.home__main__overviewItem_metaData_header
                            }
                        >
                            <div>Rules and</div>
                            <div data-color="primary">Guidelines</div>
                        </div>
                        <div
                            className={
                                styles.home__main_overviewItem_metaData_description
                            }
                        >
                            Our tech hackathon is a melting pot of visionaries,
                            and its purpose is as clear as day: to shape the
                            future. Whether you're a coding genius, a design
                            maverick, or a concept wizard, you'll have the
                            chance to transform your ideas into reality. Solving
                            real-world problems, pushing the boundaries of
                            technology, and creating solutions that can change
                            the world, that's what we're all about!
                        </div>
                    </div>
                </section>

                <section
                    className={styles.home__main__overviewItem}
                    style={{ paddingLeft: '4.71rem', gap: '3.78rem' }}
                >
                    <div className={styles.home__main__overviewItem_ilstr}>
                        <img
                            src={images.worker}
                            alt="worker"
                            style={{ width: '50.71rem', height: '51rem' }}
                        />
                    </div>

                    <div className={styles.home__main__overviewItem__metaData}>
                        <div
                            className={
                                styles.home__main__overviewItem_metaData_header
                            }
                        >
                            <div>Introduction to getlinked</div>
                            <div data-color="primary">tech Hackathon 1.0</div>
                        </div>
                        <div
                            className={
                                styles.home__main_overviewItem_metaData_description
                            }
                        >
                            Our tech hackathon is a melting pot of visionaries,
                            and its purpose is as clear as day: to shape the
                            future. Whether you're a coding genius, a design
                            maverick, or a concept wizard, you'll have the
                            chance to transform your ideas into reality. Solving
                            real-world problems, pushing the boundaries of
                            technology, and creating solutions that can change
                            the world, that's what we're all about!
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;

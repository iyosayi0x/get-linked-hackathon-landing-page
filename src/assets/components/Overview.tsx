import styles from 'src/styles/home.module.scss';

import images from 'src/assets/images';

const Overview = () => {
    return (
        <>
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
                        Our tech hackathon is a melting pot of visionaries, and
                        its purpose is as clear as day: to shape the future.
                        Whether you're a coding genius, a design maverick, or a
                        concept wizard, you'll have the chance to transform your
                        ideas into reality. Solving real-world problems, pushing
                        the boundaries of technology, and creating solutions
                        that can change the world, that's what we're all about!
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
                        Our tech hackathon is a melting pot of visionaries, and
                        its purpose is as clear as day: to shape the future.
                        Whether you're a coding genius, a design maverick, or a
                        concept wizard, you'll have the chance to transform your
                        ideas into reality. Solving real-world problems, pushing
                        the boundaries of technology, and creating solutions
                        that can change the world, that's what we're all about!
                    </div>
                </div>
            </section>
        </>
    );
};

export default Overview;

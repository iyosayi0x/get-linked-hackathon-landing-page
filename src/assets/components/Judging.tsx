import styles from 'src/styles/home.module.scss';

import images from 'src/assets/images';

const Judging = () => {
    return (
        <section
            className={styles.home__main__overviewItem}
            style={{ paddingLeft: '4.71rem', gap: '3.78rem' }}
        >
            <div
                className={styles.home__main__overviewItem_ilstr}
                data-ilstr="worker"
            >
                <img
                    src={images.worker}
                    alt="worker"
                    style={{ width: '50.71rem', height: '51rem' }}
                />
            </div>

            <div
                className={styles.home__main__overviewItem__metaData}
                style={{ maxWidth: '40.28rem' }}
            >
                <div
                    className={styles.home__main__overviewItem_metaData_header}
                >
                    <div>Judging Criteria</div>
                    <div data-color="primary">Key attributes</div>
                </div>

                <div
                    className={
                        styles.home__main_overviewItem_metaData_description
                    }
                >
                    <span
                        data-color="secondary"
                        className={
                            styles.home__main_overviewItem_metaData_description
                        }
                        data-bold
                    >
                        Innovation and Creativity:
                    </span>{' '}
                    Evaluate the uniqueness and creativity of the solution.
                    Consider whether it addresses a real-world problem in a
                    novel way or introduces innovative features.
                </div>

                <div
                    className={
                        styles.home__main_overviewItem_metaData_description
                    }
                    style={{ marginTop: '1.57rem' }}
                >
                    <span
                        data-color="secondary"
                        className={
                            styles.home__main_overviewItem_metaData_description
                        }
                        data-bold
                    >
                        Functionality:
                    </span>{' '}
                    Assess how well the solution works. Does it perform its
                    intended functions effectively and without major issues?
                    Judges would consider the completeness and robustness of the
                    solution.
                </div>

                <div
                    className={
                        styles.home__main_overviewItem_metaData_description
                    }
                    style={{ marginTop: '1.57rem' }}
                >
                    <span
                        data-color="secondary"
                        className={
                            styles.home__main_overviewItem_metaData_description
                        }
                        data-bold
                    >
                        Impact and Relevance:
                    </span>{' '}
                    Determine the potential impact of the solution in the real
                    world. Does it address a significant problem, and is it
                    relevant to the target audience? Judges would assess the
                    potential social, economic, or environmental benefits.
                </div>

                <div
                    className={
                        styles.home__main_overviewItem_metaData_description
                    }
                    style={{ marginTop: '1.57rem' }}
                >
                    <span
                        data-color="secondary"
                        className={
                            styles.home__main_overviewItem_metaData_description
                        }
                        data-bold
                    >
                        Technical Complexity:
                    </span>{' '}
                    Evaluate the technical sophistication of the solution.
                    Judges would consider the complexity of the code, the use of
                    advanced technologies or algorithms, and the scalability of
                    the solution.
                </div>

                <div
                    className={
                        styles.home__main_overviewItem_metaData_description
                    }
                    style={{ marginTop: '1.57rem' }}
                >
                    <span
                        data-color="secondary"
                        className={
                            styles.home__main_overviewItem_metaData_description
                        }
                        data-bold
                    >
                        Adherence to Hackathon Rules:
                    </span>{' '}
                    Judges will Ensure that the team adhered to the rules and
                    guidelines of the hackathon, including deadlines, use of
                    specific technologies or APIs, and any other
                    competition-specific requirements.
                </div>

                <div style={{ marginTop: '3.92rem' }} className="desktop-only">
                    <button>Read More</button>
                </div>

                <div
                    style={{
                        marginTop: '3.92rem',
                        display: 'grid',
                        placeItems: 'center',
                    }}
                    className="mobile-only"
                >
                    <button>Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Judging;

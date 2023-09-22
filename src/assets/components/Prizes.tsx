import { useMemo } from 'react';
import styles from 'src/styles/prizes.module.scss';

import images from '../images';

const Prizes = () => {
    const prizesMapping = useMemo(() => {
        return [
            {
                reward: 300_000,
                title: '2nd',
                image: images.second,
            },
            {
                reward: 500_000,
                title: '1st',
                image: images.first,
            },
            {
                reward: 150_000,
                title: '3rd',
                image: images.third,
            },
        ];
    }, []);
    return (
        <div className={styles.prizes}>
            <div className={styles.prizes__awardWrapper}>
                <img src={images.award} alt="award" />
            </div>
            <div>
                <div className={styles.prizes__header}>
                    <div> Prizes and</div>
                    <div data-color="primary">Rewards</div>
                </div>

                <div className={styles.prizes__description}>
                    Highlight of the prizes or rewards for winners and <br />
                    for participants.
                </div>

                <div className={styles.prizes__prizes}>
                    {prizesMapping.map((prize, index) => {
                        return (
                            <div
                                className={styles.prizes__prize}
                                key={index}
                                data-large={index === 1 ? '' : undefined}
                            >
                                <img src={prize.image} alt="prize" />
                                <div
                                    className={
                                        styles.prizes__prize_titleWrapper
                                    }
                                >
                                    <div>{prize.title}</div>
                                    <div
                                        className={styles.prizes__prize__label}
                                    >
                                        Runner
                                    </div>
                                </div>
                                <div className={styles.prizes__prize__reward}>
                                    {prize.reward}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Prizes;

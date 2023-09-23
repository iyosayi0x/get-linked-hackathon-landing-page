import styles from 'src/styles/sponsor.module.scss';
import images from '../images';

const Sponsors = () => {
    return (
        <div className={styles.sponsor}>
            <div className={styles.sponsor__title}>Partners and Sponsors</div>
            <div className={styles.sponsor__desc}>
                Getlinked Hackathon 1.0 is honored to have the following major
                companies as its partners and sponsors
            </div>

            <div className={styles.sponsor__grid}>
                <div className={styles.sponsor__wrapper}>
                    <img src={images.sponsor_liberty} alt="sponsor" />
                </div>

                <div className={styles.sponsor__wrapper}>
                    <img src={images.sponsor_liberty_pay} alt="sponsor" />
                </div>

                <div className={styles.sponsor__wrapper}>
                    <img src={images.sponsor_winwise} alt="sponsor" />
                </div>

                <div className={styles.sponsor__wrapper}>
                    <img src={images.sponsor_whisper} alt="sponsor" />
                </div>

                <div className={styles.sponsor__wrapper}>
                    <img src={images.sponsor_paybox} alt="sponsor" />
                </div>

                <div className={styles.sponsor__wrapper}>
                    <img src={images.sponsor_plus} alt="sponsor" />
                </div>
            </div>
        </div>
    );
};

export default Sponsors;

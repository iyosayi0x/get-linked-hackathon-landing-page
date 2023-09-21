import styles from 'src/styles/home.module.scss';

import Judging from 'src/assets/components/Judging';
import Faq from 'src/assets/components/Faq';
import Overview from 'src/assets/components/Overview';
import Intro from 'src/assets/components/Intro';
import Timeline from 'src/assets/components/Timeline';
import Header from 'src/assets/components/Header';

const Home = () => {
    return (
        <div className={styles.home}>
            {/* Header  */}
            <Header />
            {/* End Of Header  */}

            <main className={styles.home__main}>
                <Intro />
                <Overview />
                <Judging />
                <Faq />
                <Timeline />
            </main>
        </div>
    );
};

export default Home;

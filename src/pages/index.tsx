import styles from 'src/styles/home.module.scss';

import Judging from 'src/assets/components/Judging';
import Faq from 'src/assets/components/Faq';
import Overview from 'src/assets/components/Overview';
import Intro from 'src/assets/components/Intro';
import Timeline from 'src/assets/components/Timeline';
import Header from 'src/assets/components/Header';
import Prizes from 'src/assets/components/Prizes';
import Sponsors from 'src/assets/components/Sponsors';
import Privacy from 'src/assets/components/Privacy';
import Footer from 'src/assets/components/Footer';

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
                <Prizes />
                <Sponsors />
                <Privacy />
                <Footer />
            </main>
        </div>
    );
};

export default Home;

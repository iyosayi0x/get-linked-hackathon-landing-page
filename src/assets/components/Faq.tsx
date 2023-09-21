import styles from 'src/styles/home.module.scss';
import faqStyles from 'src/styles/faq.module.scss';

import images from 'src/assets/images';
import { useMemo } from 'react';

const Faq = () => {
    const questions = useMemo(() => {
        return [
            'Can I work on a project I started before the hackathon?',
            'What happens if I need help during the hackathon?',
            "What happens if I don't have an idea for a project?",
            'Can I join a team or do I have to come with one?',
            'What happens after the hackathon ends?',
        ];
    }, []);
    return (
        <section
            className={styles.home__main__overviewItem}
            style={{ paddingLeft: '4.71rem', gap: '1.17rem' }}
            data-reversed
        >
            <div className={styles.home__main__overviewItem_ilstr}>
                <img
                    src={images.man}
                    alt="worker"
                    style={{ width: '52.98rem', height: '57.5ren' }}
                />
            </div>

            <div className={styles.home__main__overviewItem__metaData}>
                <div
                    className={styles.home__main__overviewItem_metaData_header}
                >
                    <div>Frequently Ask</div>
                    <div data-color="primary">Question</div>
                </div>
                <div
                    className={
                        styles.home__main_overviewItem_metaData_description
                    }
                >
                    We got answers to the questions that you might want to ask
                    about getlinked Hackathon 1.0
                </div>

                <div className={faqStyles.faq__wrapper}>
                    {questions.map((question) => (
                        <div key={question} className={faqStyles.faq}>
                            <div>{question}</div>
                            <div className={faqStyles.faq__expand}>+</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;

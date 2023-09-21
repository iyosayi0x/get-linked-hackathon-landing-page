import { useMemo } from 'react';
import timelineStyles from 'src/styles/timeline.module.scss';
import { v4 as uuid } from 'uuid';

const Timeline = () => {
    const timelines = useMemo(() => {
        return [
            {
                title: 'Hackathon Announcement',
                desc: 'The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register',
                date: 'November 18, 2023',
            },
            {
                title: 'Teams Registration begins',
                desc: 'Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register',
                date: 'November 18, 2023',
            },
            {
                title: 'Teams Registration ends',
                desc: 'Interested Participants are no longer Allowed to register',
                date: 'November 18, 2023',
            },
            {
                title: 'Announcement of the accepted teams and ideas',
                desc: 'All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced',
                date: 'December 20th, 2023',
            },
            {
                title: 'Getlinked Hackathon 1.0 Offically Begins',
                desc: 'Accepted teams can now proceed to build their groundbreaking skill-driven solutions',
                date: 'November 18, 2023',
            },
            {
                title: 'Demo Day',
                desc: 'Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day',
                date: 'April 19, 2023',
            },
        ];
    }, []);
    return (
        <section className={timelineStyles.timeline__wrapper}>
            <div className={timelineStyles.timeline__header}>
                <div className={timelineStyles.timeline__header_cta}>
                    Timeline
                </div>
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: '0.85rem',
                        lineHeight: '1.72rem',
                    }}
                >
                    Here is the breakdown of the time we anticipate <br />
                    using for the upcoming event.
                </div>
            </div>

            <div className={timelineStyles.timeline__timelines}>
                {timelines.map((timeline, index) => (
                    <div
                        key={uuid()}
                        className={timelineStyles.timeline__timeline}
                        data-index={index + 1}
                        data-reversed={(index + 1) % 2 == 0}
                    >
                        <div
                            className={
                                timelineStyles.timeline__timeline_metaInfoWrapper
                            }
                        >
                            <div
                                className={
                                    timelineStyles.timeline__timeline_title
                                }
                            >
                                {timeline.title}
                            </div>
                            <div
                                className={
                                    timelineStyles.timeline__timeline_desc
                                }
                            >
                                {timeline.desc}
                            </div>
                        </div>
                        <div className={timelineStyles.timeline__timeline_date}>
                            {timeline.date}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;

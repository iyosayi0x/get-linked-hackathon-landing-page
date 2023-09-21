import React from 'react';

import styles from 'src/styles/footer.module.scss';


const Footer = () => {
    return <div className={styles.footer}>
        <div className={styles.footer__navigation}> 
            <div>one</div>
            <div>two</div>
            <div>three</div>
        </div>

        <div> 
        All rights reserved. © getlinked Ltd.
        </div>
    </div>;
};

export default Footer;

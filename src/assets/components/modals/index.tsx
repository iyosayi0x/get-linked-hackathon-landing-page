import React from 'react';
import styles from 'src/styles/modal.module.scss';

interface IProps {
    children: React.ReactNode;
    visible: boolean;
    onClose: () => void;
}

const Index = ({ visible, children, onClose }: IProps) => {
    if (!visible) return <></>;
    return (
        <div className={styles.modal}>
            <div className={styles.modal__overlay} onClick={onClose}></div>
            <div className={styles.modal__contentContainer__scrollable}>
                <div className={styles.modal__content}>{children}</div>
            </div>
        </div>
    );
};

export default Index;

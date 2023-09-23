import Modal from 'src/assets/components/modals';
import images from 'src/assets/images';

import styles from 'src/styles/modal.module.scss';

interface IProps {
    visible: boolean;
    onClose: () => void;
}
const ContactSuccess = (props: IProps) => {
    return (
        <Modal {...props}>
            <img src={images.congrats} alt="congratulations" />
            <div className={styles.modal__info}>
                Congratulations
                <br /> you form has been submitted
            </div>
            <div className={styles.modal__desc}>
                Support will get back to you shortly <br /> check your mail box for
                next step
            </div>

            <div className={styles.modal__button}>
                <button onClick={props.onClose}>Back</button>
            </div>
        </Modal>
    );
};

export default ContactSuccess;

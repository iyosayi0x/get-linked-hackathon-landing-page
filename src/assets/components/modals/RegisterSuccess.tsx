import Modal from 'src/assets/components/modals';
import images from 'src/assets/images';

import styles from 'src/styles/modal.module.scss';

interface IProps {
    visible: boolean;
    onClose: () => void;
}
const RegisterSuccess = (props: IProps) => {
    return (
        <Modal {...props}>
            <img src={images.congrats} alt="congratulations"  className={styles.modal__ilstr}/>
            <div className={styles.modal__info}>
                Congratulations
                <br /> you have successfully Registered!
            </div>
            <div className={styles.modal__desc}>
                Yes, it was easy and you did it! <br /> check your mail box for
                next step <img src={images.wink} alt="wink" />
            </div>

            <div className={styles.modal__button}>
                <button onClick={props.onClose}>Back</button>
            </div>
        </Modal>
    );
};

export default RegisterSuccess;

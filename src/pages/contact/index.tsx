import Header from 'src/assets/components/Header';
import styles from 'src/styles/contact.module.scss';

import formStyles from 'src/styles/form.module.scss';

import IconInstagram from 'src/assets/icons/instagram';
import IconX from 'src/assets/icons/x';
import IconFacebook from 'src/assets/icons/facebook';
import IconLinkedIn from 'src/assets/icons/linkedin';
import { BaseSyntheticEvent, useState } from 'react';
import { handleContact } from 'src/adapters/contact';

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState<ContactFormArguments>({
        first_name: '',
        email: '',
        message: '',
        phone_number: '',
    });

    const handleFormChange = (e: BaseSyntheticEvent) => {
        setForm((currForm) => ({
            ...currForm,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmitForm = async (e: BaseSyntheticEvent) => {
        e.preventDefault();
        if (
            !form.email ||
            !form.message ||
            !form.phone_number ||
            !form.first_name
        )
            return;
        try {
            setIsLoading(true);
            await handleContact(form);
        } catch (err) {
            // do something
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div>
            <Header showBorder={false} />

            <main className={styles.contact__main}>
                <aside className={styles.contact__aside}>
                    <div>Get in touch</div>
                    <div>
                        Contact
                        <br /> Information
                    </div>

                    <div>
                        27,Alara Street
                        <br /> Yaba 100012
                        <br /> Lagos State
                    </div>

                    <div>Call Us : 07067981819</div>

                    <div>
                        we are open from Monday-Friday
                        <br /> 08:00am - 05:00pm
                    </div>

                    <section className={styles.contact__share}>
                        <div>Share on</div>

                        <div>
                            <IconInstagram />
                            <IconX />
                            <IconFacebook />
                            <IconLinkedIn />
                        </div>
                    </section>
                </aside>
                <form
                    className={styles.contact__form}
                    onSubmit={handleSubmitForm}
                >
                    <section className={styles.contact__form_header}>
                        <div>Questions or need assistance?</div>
                        <div>Let us know about it!</div>
                    </section>

                    <div className={formStyles.form__field}>
                        <input
                            className={formStyles.form__input}
                            type="text"
                            placeholder="Name"
                            name="first_name"
                            onChange={handleFormChange}
                            value={form.first_name}
                        />
                    </div>

                    <div className={formStyles.form__field}>
                        <input
                            className={formStyles.form__input}
                            type="text"
                            placeholder="Mail"
                            name="email"
                            onChange={handleFormChange}
                            value={form.email}
                        />
                    </div>

                    <div className={formStyles.form__field}>
                        <input
                            className={formStyles.form__input}
                            type="text"
                            placeholder="Phone Number"
                            name="phone_number"
                            onChange={handleFormChange}
                            value={form.phone_number}
                        />
                    </div>

                    <div className={formStyles.form__field}>
                        <input
                            className={formStyles.form__input}
                            type="text"
                            placeholder="Message"
                            name="message"
                            onChange={handleFormChange}
                            value={form.message}
                        />
                    </div>

                    <div style={{ display: 'grid', placeItems: 'center' }}>
                        <button>
                            {isLoading ? 'Submitting...' : 'Loading...'}
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default Contact;

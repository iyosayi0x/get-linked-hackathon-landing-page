import Header from 'src/assets/components/Header';
import styles from 'src/styles/register.module.scss';

import formStyles from 'src/styles/form.module.scss';

import images from 'src/assets/images';
import Success from 'src/assets/components/modals/RegisterSuccess';
import {
    BaseSyntheticEvent,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import ChevronDown from 'src/assets/icons/chevron-down';
import { handleFetchCategoryList, handleRegister } from 'src/adapters/register';

const Register = () => {
    const [visible, setIsVisible] = useState(false);

    const [categories, setCategories] = useState<Category[]>([]);
    const groupSizes = useMemo(() => {
        return Array.from(Array(11).keys()).slice(1);
    }, []);
    const [isLoading, setIsLoading] = useState(false);
    const groupSizeRef = useRef<HTMLDivElement | null>(null);
    const categoryRef = useRef<HTMLDivElement | null>(null);

    const [form, setForm] = useState<
        Omit<RegisterArguments, 'category'> & { category: Category }
    >({
        team_name: '',
        phone_number: '',
        email: '',
        project_topic: '',
        category: {
            name: '',
            id: 0,
        },
        group_size: 0,
        privacy_poclicy_accepted: false,
    });

    const handleFormChange = (e: BaseSyntheticEvent) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        handleFetchCategoryList().then((data) => {
            setCategories(data);
        });
    }, []);

    const resetClose = () => {
        setIsVisible(false);
        setForm({
            team_name: '',
            phone_number: '',
            email: '',
            project_topic: '',
            category: {
                name: '',
                id: 0,
            },
            group_size: 0,
            privacy_poclicy_accepted: false,
        })
    };

    const handleSubmit = async (e: BaseSyntheticEvent) => {
        e.preventDefault();
        if (
            !form.category ||
            !form.team_name ||
            !form.email ||
            !form.phone_number ||
            !form.project_topic ||
            form.category.id === 0 ||
            form.group_size === 0
        )
            return;
        try {
            setIsLoading(true);
            await handleRegister({ ...form, category: form.category.id });
            setIsVisible(true)
        } catch (err) {
            /// do something
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div>
                <Header showBorder={false} />

                <main className={styles.register__main}>
                    <aside className={styles.register__aside}>
                        <img src={images.gdesigner} alt="graphics designer" />
                    </aside>
                    <form
                        className={styles.register__form}
                        onSubmit={handleSubmit}
                    >
                        <section>
                            <div className={styles.register__formName}>
                                Register
                            </div>
                            <div className={styles.register__ctaSecondary}>
                                <div>Be part of this movement!</div>
                                <div>
                                    <img src={images.girl} alt="Girl walk" />
                                    <img src={images.boy2} alt="boy walk" />
                                </div>
                            </div>

                            <div className={styles.register__cta}>
                                CREATE YOUR ACCOUNT
                            </div>
                        </section>

                        <div className={formStyles.form__dualFormField}>
                            <div>
                                <div className={formStyles.form__labelWrapper}>
                                    <label className={formStyles.form__label}>
                                        Team's Name
                                    </label>
                                </div>
                                <input
                                    className={formStyles.form__input}
                                    type="text"
                                    placeholder="Enter the name of your group"
                                    name="team_name"
                                    value={form.team_name}
                                    onChange={handleFormChange}
                                />
                            </div>

                            <div>
                                <div>
                                    <label className={formStyles.form__label}>
                                        Phone
                                    </label>
                                </div>
                                <input
                                    className={formStyles.form__input}
                                    type="text"
                                    placeholder="Enter your phone number"
                                    name="phone_number"
                                    value={form.phone_number}
                                    onChange={handleFormChange}
                                />
                            </div>
                        </div>

                        <div className={formStyles.form__dualFormField}>
                            <div>
                                <div className={formStyles.form__labelWrapper}>
                                    <label className={formStyles.form__label}>
                                        Email
                                    </label>
                                </div>
                                <input
                                    className={formStyles.form__input}
                                    type="text"
                                    placeholder="Enter your email address"
                                    name="email"
                                    value={form.email}
                                    onChange={handleFormChange}
                                />
                            </div>

                            <div>
                                <div className={formStyles.form__labelWrapper}>
                                    <label className={formStyles.form__label}>
                                        Project Topic
                                    </label>
                                </div>
                                <input
                                    className={formStyles.form__input}
                                    type="text"
                                    placeholder="What is your group project topic"
                                    name="project_topic"
                                    value={form.project_topic}
                                    onChange={handleFormChange}
                                />
                            </div>
                        </div>

                        <div className={formStyles.form__dualFormField} data-no-block>
                            <div style={{flex:.7}}>
                                <div className={formStyles.form__labelWrapper}>
                                    <label className={formStyles.form__label}>
                                        Category
                                    </label>
                                </div>
                                <div
                                    className={formStyles.form__inputWithIcon}
                                    tabIndex={0}
                                >
                                    <input
                                        className={formStyles.form__input}
                                        type="text"
                                        placeholder="category"
                                        readOnly={true}
                                        value={
                                            form.category.id === 0
                                                ? 'Select your category'
                                                : form.category.name
                                        }
                                    />
                                    <ChevronDown />

                                    {/* ---- drop down ----  */}
                                    <div
                                        className={
                                            formStyles.form__dropdownWrapper
                                        }
                                        tabIndex={0}
                                        ref={categoryRef}
                                    >
                                        {categories.map((category) => (
                                            <div
                                                key={category.id}
                                                className={
                                                    formStyles.form__dropdownItem
                                                }
                                                onClick={() => {
                                                    setForm((currForm) => ({
                                                        ...currForm,
                                                        category,
                                                    }));
                                                    categoryRef.current?.blur();
                                                }}
                                            >
                                                {' '}
                                                {category.name}{' '}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div style={{flex:.3}}>
                                <div className={formStyles.form__labelWrapper}>
                                    <label className={formStyles.form__label}>
                                        Group Size
                                    </label>
                                </div>
                                <div className={formStyles.form__inputWithIcon}>
                                    <input
                                        className={formStyles.form__input}
                                        type="text"
                                        placeholder="group size"
                                        readOnly={true}
                                        value={form.group_size || 'Select'}
                                    />
                                    <ChevronDown />

                                    {/* ---- drop down ----  */}
                                    <div
                                        className={
                                            formStyles.form__dropdownWrapper
                                        }
                                        tabIndex={0}
                                        ref={groupSizeRef}
                                    >
                                        {groupSizes.map((groupSize) => (
                                            <div
                                                key={groupSize}
                                                className={
                                                    formStyles.form__dropdownItem
                                                }
                                                onClick={() => {
                                                    setForm((currForm) => ({
                                                        ...currForm,
                                                        group_size: groupSize,
                                                    }));
                                                    groupSizeRef.current?.blur();
                                                }}
                                            >
                                                {' '}
                                                {groupSize}{' '}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.register__consent}>
                            <div>
                                Please review your registration details before
                                submitting
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    className={styles.register__consentAgree}
                                    onChange={(e) => {
                                        setForm((currForm) => ({
                                            ...currForm,
                                            privacy_poclicy_accepted:
                                                e.target.checked,
                                        }));
                                    }}
                                />{' '}
                                <span>
                                    I agreed with the event terms and conditions
                                    and privacy policy
                                </span>
                            </div>
                        </div>

                        <div style={{ display: 'grid', placeItems: 'center' }}>
                            <button>
                                {isLoading ? 'Loading...' : 'Register Now'}
                            </button>
                        </div>
                    </form>
                </main>
            </div>
            <Success {...{ visible, onClose: resetClose }} />
        </>
    );
};

export default Register;

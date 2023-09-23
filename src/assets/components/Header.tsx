import { useMemo } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import styles from 'src/styles/home.module.scss';
import ArrowBack from '../icons/arrow-back';

const Header = ({ showBorder }: { showBorder?: boolean }) => {
    const location = useLocation();
    const navigation = useMemo(() => {
        return [
            {
                href: '/#timeline',
                name: 'Timeline',
            },
            {
                href: '/#overview',
                name: 'Overview',
            },
            {
                href: '/#faqs',
                name: 'FAQs',
            },
            {
                href: '/contact',
                name: 'Contact',
            },
        ];
    }, []);
    return (
        <>
            <div className="desktop-only">
                <header
                    className={`${styles.home__header}`}
                    style={showBorder === false ? { borderBottom: 'None' } : {}}
                >
                    <div className={styles.home__logo}>
                        <Link to="/">
                            get<span>linked</span>
                        </Link>
                    </div>

                    <nav className={styles.home__navigation_wrapper}>
                        <ul className={styles.home__navigation}>
                            {navigation.map((navPath) => (
                                <li key={navPath.href}>
                                    <NavLink
                                        to={navPath.href}
                                        className={({ isActive }) =>
                                            isActive &&
                                            !navPath.href.includes('#')
                                                ? styles.home__navigation_active
                                                : ''
                                        }
                                    >
                                        {navPath.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <Link to="/register">
                            <button
                                className={
                                    location.pathname === '/register'
                                        ? 'active-link-btn'
                                        : ''
                                }
                            >
                                Register
                            </button>
                        </Link>
                    </nav>
                </header>
            </div>

            {location.pathname === '/register' && (
                <div className="mobile-only">
                    <header className={`${styles.home__header_register_mobile}`}>
                        Register
                    </header>
                </div>
            )}

            {location.pathname === '/contact' && (
                <div className="mobile-only">
                    <header
                        className={`${styles.home__header_contact_mobile}`}
                    >
                        <Link to='/'>
                       <ArrowBack/>
                        </Link>
                      
                    </header>
                </div>
            )}

            {location.pathname !== '/register' &&
                location.pathname !== '/contact' && (
                    <div className="mobile-only">
                        <header
                            className={`${styles.home__header_mobile}`}
                        ></header>
                    </div>
                )}
        </>
    );
};

export default Header;

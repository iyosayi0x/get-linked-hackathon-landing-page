import { useMemo } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import styles from 'src/styles/home.module.scss';

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
        <header
            className={styles.home__header}
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
                                    isActive && !navPath.href.includes('#')
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
    );
};

export default Header;

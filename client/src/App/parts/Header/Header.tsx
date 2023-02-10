import React from "react";
import styles from './Header.scss';
import rootStyles from  '../../assets/styles/main.scss';
import helpers from '../../assets/styles/helpers.scss';
import Button from "../../components/Button/Button";
import Icons from "../../components/Icons/Icons";

const Header = () => {
    return(
        <header className={styles['header']}>
            <div className={`${rootStyles['main-wrapper']} ${helpers['d-flex']}`}>
                <a href="/" className={styles['header__company']}>
                    <Icons type="logo" width="28" height="28" />
                    <h1 className={styles['header__company-name']}>RollingBoard</h1>
                </a>
                <nav className={styles['header-nav']}>
                    <ul className={styles['header-nav__list']}>
                        <li className={styles['header-nav__item']}>About</li>
                        <li className={styles['header-nav__item']}>Contacts</li>
                    </ul>
                </nav>
                <div className={`${styles['header__control']} ${helpers['d-flex']}`}>
                    <Button type="login" text="Login" />
                    <Button type="signup" text="Sign in" />
                </div>
            </div>
        </header>
    )
}

export default Header
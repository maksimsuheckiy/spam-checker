import React from "react";
import Icons from "../../components/Icons/Icons";
import styles from './Footer.scss';
import rootStyles from '../../assets/styles/main.scss';

const Footer = () => {
    return(
        <footer className={styles['footer']}>
            <div className={rootStyles['main-wrapper']}>
                <div className={styles['footer__row']}>
                    <Icons type="rs" width="32" height="24" />
                    <div className={styles['social-links']}>
                        <a href="/" className={styles['social-links__item']}>GeoBo</a>
                        <a href="/" className={styles['social-links__item']}>Mrdoker</a>
                        <a href="/" className={styles['social-links__item']}>MaksymSukhetckiy</a>
                    </div>
                </div>
                <p className={styles['footer__copyright']}>© 2023. React 2023Q1</p>
            </div>
        </footer>
    )
}

export default Footer
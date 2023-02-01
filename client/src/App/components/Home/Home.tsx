import React from "react";
import styles from './Home.modules.scss';
import logo from '../../assets/images/logo.png';

const Home = () => {
    return(
        <>
            <img src={logo} alt="" width="100" height="auto"/>
            <div className={styles.container}>Home page</div>
            <div className={styles['container__header']}>Home page header</div>
        </>
    )
}

export default Home
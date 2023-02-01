import React from "react";
import styles from './Home.modules.scss';
import logo from '../../assets/images/logo.png';

const Home = () => {
    return(
        <>
            <img src={logo} alt="" width="100" height="auto"/>
            <div className={styles.container}>Home page</div>
        </>
    )
}

export default Home
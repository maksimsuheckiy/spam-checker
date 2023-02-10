import React from "react";
import styles from './Button.scss';

type Types = {
    type: string;
    text: string;
}

const Button = (props : Types) => {
    const { type, text } = props;

    switch (type) {
        case 'default':
            return <button className={styles['button']}>{text}</button>
        case 'signup':
            return <button className={`${styles['button']} ${styles['button--primary']}`}>{text}</button>
        case 'login':
            return <button className={`${styles['button']} ${styles['button--secondary']}`}>{text}</button>
        default:
            return null
    }
}

export default Button
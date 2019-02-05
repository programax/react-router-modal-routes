import React from 'react';
import styles from '../styles.module.css';

const Modal = (props) => (
    <div className={styles.modalContainer}>
        <div className={styles.modal}>
            {props.children}
        </div>
    </div>
);

export default Modal;

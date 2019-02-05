import React from 'react';
import Header from '../components/header';
import styles from '../styles.module.css';

const Layout = (props) => (
    <React.Fragment>
        <Header />
        <div className={styles.container}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    </React.Fragment>
);

export default Layout;

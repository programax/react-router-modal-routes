import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles.module.css';

const Header = () => (
    <ul className={styles.ul}>
        <li className={styles.li}><Link to="/users">Users</Link></li>
        <li className={styles.li}><Link to="/posts">Posts</Link></li>
        <li className={styles.li}><Link to="/settings">Settings</Link></li>
        <li className={styles.li}><Link to="/options">Options</Link></li>
    </ul>
);

export default Header;

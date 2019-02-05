import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../components/layout';
import Modal from '../components/modal';
import styles from '../styles.module.css';

const Settings = (props) => {
    const nodes = (
        <React.Fragment>
            <h1>Settings</h1>

            <form className={styles.form}>
                <input type="text" placeholder="E-mail" />
                <input type="password" placeholder="Password" />

                <label>Accept Terms & Conditions</label><input type="checkbox" />

                <button
                    onClick={(e) => {
                        e.preventDefault();

                        if (props.history.action !== 'POP') {
                            props.history.goBack();
                        } else {
                            props.history.push('/');
                        }
                    }}
                >
                    Back
                </button>
            </form>
        </React.Fragment>
    );

    const { isMobile } = props;

    if (!isMobile) {
        return <Layout>{nodes}</Layout>;
    }

    return ReactDOM.createPortal(<Modal>{nodes}</Modal>, document.getElementById('modal-root'));
};

export default Settings;

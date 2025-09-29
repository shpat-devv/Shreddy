import React from 'react';
import styles from "../styles/pages/Settings.module.css";

function Settings() {
    return ( 
        <div className={styles.settingsContainer}>
            <h2>Shreddy Settings</h2>
            <div className={styles.settingSection}>
                <div className={styles.settingHeader}>
                    <h3>Profile</h3>
                </div>
                <div className={styles.settingContent}>
                    <p>Username, email, password change</p>
                </div>
            </div>
            <div className={styles.settingSection}>
                <div className={styles.settingHeader}>
                    <h3>Notifications</h3>
                </div>
                <div className={styles.settingContent}>
                    <p>Notification preferences</p>
                </div>
            </div>
            <div className={styles.settingSection}>
                <div className={styles.settingHeader}>
                    <h3>Profile</h3>
                </div>
                <div className={styles.settingContent}>
                    <p>Username, email, password change</p>
                </div>
            </div>
        </div>
    )
}

export default Settings;


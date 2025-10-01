import React from 'react';
import api from "../api.js";
import { ACCESS_TOKEN} from '../constants';
import styles from "../styles/pages/Settings.module.css";

const getSettings = async () => {
    try {
        const accessToken = localStorage.getItem(ACCESS_TOKEN);
        if (!accessToken) {
            throw new Error("No access token found");
        }
        const response = await api.get("/api/user/settings/",{ 
            headers: { Authorization: `Bearer ${accessToken}` } // Django's rest framework ensures the user is authenticated
        });

        if (response.status === 200) {
            return response.data;
            console.log("Settings fetched:", response.data);
        } else {
            throw new Error("Failed to fetch settings");
        }
    } catch (error) {
        console.error("Failed to fetch settings:", error);
    }
    return null;
}

function Settings() {
    React.useEffect(() => {
        getSettings();
    }, []);
    
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


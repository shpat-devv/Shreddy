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
            headers: { Authorization: `Bearer ${accessToken}` }
        });

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error("Failed to fetch settings");
        }
    } catch (error) {
        console.error("Failed to fetch settings:", error);
    }
    return null;
}

function saveSettings(settings) {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (!accessToken) {
        throw new Error("No access token found");
    }
    return api.post("/api/user/settings/", settings, { 
        headers: { Authorization: `Bearer ${accessToken}` }
    });
}

function Settings() {
    const [settings, setSettings] = React.useState(null);

    React.useEffect(() => {
        getSettings().then(settings => {
            setSettings(settings);
        });
    }, []);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setSettings(prev => ({
            ...prev,
            [id]: value
        }));
    };

    return ( 
        <div className={styles.settingsContainer}>
            <h2>Shreddy Settings</h2>
            <div className={styles.settingSection}>
                <div className={styles.settingHeader}>
                    <h3>Profile</h3>
                </div>
                <div className={styles.settingContent}>
                    <div className={styles.profileSection}>
                        <img
                            className={styles.profilePicture}
                            src={settings?.pfp_url || "/assets/imgs/default.jpg"}
                            alt="Profile"
                        />
                    </div>

                    <label htmlFor="bio">Bio</label>
                    <input
                        type="text"
                        id="bio"
                        value={settings?.bio || ""}
                        placeholder="Tell us something about yourself"
                        onChange={handleChange}
                    />

                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        value={settings?.country || ""}
                        placeholder="Enter your country"
                        onChange={handleChange}
                    />

                    <label htmlFor="birthday">Birthday</label>
                    <input
                        type="date"
                        id="birthday"
                        value={settings?.birthday || ""}
                        onChange={handleChange}
                    />

                    <button className={styles.saveButton}>Save Settings</button>
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

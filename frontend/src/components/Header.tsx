import React from "react";
import styles from "../styles/components/Header.module.css";

interface ButtonProps {
    iconImg: string;
    onclick?: () => void;
}

interface HeaderProps {
    title?: string;
    button1?: ButtonProps;
    button2?: ButtonProps;
    button3?: ButtonProps;
    button4?: ButtonProps;
    children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
    title,
    button1,
    button2,
    button3,
    button4,
    children,
}) => {
    return (
        <header>
            <div className={styles.leftHeader}>
                {button1 && (
                    <button className={styles.headerButton} onClick={button1.onclick}>
                        <img src={button1.iconImg} alt="" />
                    </button>
                )}
                {button2 && (
                    <button className={styles.headerButton} onClick={button2.onclick}>
                        <img src={button2.iconImg} alt="" />
                    </button>
                )}
            </div>
            {title && <h1>{title}</h1>}
            {children}
            <div className={styles.rightHeader}>
                {button3 && (
                    <button className={styles.headerButton} onClick={button3.onclick}>
                        <img src={button3.iconImg} alt="" />
                    </button>
                )}
                {button4 && (
                    <button className={styles.headerButton} onClick={button4.onclick}>
                        <img src={button4.iconImg} alt="" />
                    </button>
                )}
            </div>
        </header>
    );
};

export function addFriends() {
    console.log("Add Friends clicked");
}

export const gallery = () => {
    console.log("Gallery clicked");
};

export const settings = () => {
    console.log("Settings clicked");
};

export const profile = () => {
    console.log("Profile clicked");
};

export default Header;

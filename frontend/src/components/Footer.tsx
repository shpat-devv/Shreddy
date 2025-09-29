import React from "react";
import styles from "../styles/components/Footer.module.css";

interface ButtonProps {
    iconImg: string;
    onclick?: () => void;
}

interface FooterProps {
    button1?: ButtonProps;
    button2?: ButtonProps;
    button3?: ButtonProps;
    button4?: ButtonProps;
    children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({
    button1,
    button2,
    button3,
    button4,
    children,
}) => {
    return (
        <footer>
            {button1 && (
                <button className={styles.footerButton} onClick={button1.onclick}>
                    <img src={button1.iconImg} alt="" />
                </button>
            )}
            {button2 && (
                <button className={styles.footerButton} onClick={button2.onclick}>
                    <img src={button2.iconImg} alt="" />
                </button>
            )}
            {button3 && (
                <button className={styles.footerButton} onClick={button3.onclick}>
                    <img src={button3.iconImg} alt="" />
                </button>
            )}
            {button4 && (
                <button className={styles.footerButton} onClick={button4.onclick}>
                    <img src={button4.iconImg} alt="" />
                </button>
            )}
        </footer>
    );
};

export function routeMap() {
    console.log("Add Friends clicked");
}

export const routeChat = () => {
    console.log("Chat clicked");
};

export const routeCamera = () => {
    console.log("Camera clicked");
};

export const routeContent = () => {
    console.log("Content clicked");
};

export default Footer;

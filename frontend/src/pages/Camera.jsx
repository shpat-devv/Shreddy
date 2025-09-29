import { useState } from "react";
import Header, { addFriends, settings, profile } from "../components/Header";
import Footer, { routeCamera, routeChat, routeContent, routeMap } from "../components/Footer";
import AddList from "../components/AddList";
import styles from "../styles/pages/Camera.module.css";

export default function Camera() {
  const [showAddList, setShowAddList] = useState(false);

  const headerItems = {
    title: "Camera",
    button1: { 
      iconImg: "/assets/icons/adduser.png", 
      onclick: () => setShowAddList(true)  // 👈 show modal
    },
    button3: { iconImg: "/assets/icons/settings.png", onclick: () => settings() },
    button4: { iconImg: "/assets/icons/profile.png", onclick: () => profile() },
  };

  const footerItems = {
    button1: { iconImg: "/assets/icons/map.png", onclick: () => routeMap() },
    button2: { iconImg: "/assets/icons/chat.png", onclick: () => routeChat() },
    button3: { iconImg: "/assets/icons/camera.png", onclick: () => routeCamera() },
    button4: { iconImg: "/assets/icons/content.png", onclick: () => routeContent() },
  };

  return (
    <div className={styles.cameraContainer}>
      <Header {...headerItems} />
      <Footer {...footerItems} />

      {showAddList && <AddList onClose={() => setShowAddList(false)} />}
    </div>
  );
}

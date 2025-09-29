import React from "react";
import styles from "../styles/components/AddList.module.css";

const peopleList = [
  { username: "alice", location: "New York", pfp: "https://randomuser.me/api/portraits/women/1.jpg" },
  { username: "bob", location: "London", pfp: "https://randomuser.me/api/portraits/men/2.jpg" },
  { username: "charlie", location: "Tokyo", pfp: "https://randomuser.me/api/portraits/men/3.jpg" }
];

function AddList({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.addListContainer}>
      <h2>Find friends</h2>
      <button className={styles.closeButton} onClick={onClose}>×</button>
      <div className={styles.peopleList}>
        {peopleList.map(person => (
          <div key={person.username} className={styles.personItem}>
            <img src={person.pfp} alt={person.username} className={styles.pfp} />
            <div className={styles.personInfo}>
              <span className={styles.username}>{person.username}</span>
              <span className={styles.location}>{person.location}</span>
            </div>
          </div>
        ))}
      </div>
      <form className={styles.addListForm}>
        <input
          type="text"
          placeholder="List Name"
          className={styles.inputField}
        />
        <button type="submit" className={styles.submitButton}>
          Add List
        </button>
      </form>
    </div>
  );
}

export default AddList;

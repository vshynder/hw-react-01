import React from "react";
import styles from "./friends.module.css";

const Friend = ({ data }) => {
  return (
    <li className={styles.item}>
      <span className={styles.status}>{data.isOnline}</span>
      <img className={styles.avatar} src={data.avatar} alt="" width="48" />
      <p className={styles.name}>{data.name}</p>
    </li>
  );
};

export const FriendList = (props) => {
  return (
    <ul className={styles.friendList}>
      {props.data.map((el) => (
        <Friend key={el.id} data={el} />
      ))}
    </ul>
  );
};

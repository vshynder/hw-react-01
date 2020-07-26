import React from "react";
import styles from "./profile.module.css";

import PropTypes from "prop-types";

export const Profile = (props) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={props.avatar} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{props.name}</p>
        <p className={styles.tag}>@{props.tag}</p>
        <p className={styles.location}>{props.location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.profileLi}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{props.stats.followers}</span>
        </li>
        <li className={styles.profileLi}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{props.stats.views}</span>
        </li>
        <li className={styles.profileLi}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

Profile.defaultProps = {
  name: "Vladyslav Shynder",
  tag: "vshynder",
  location: "Kyiv, Ukraine",
  stats: {
    followers: 0,
    views: 0,
    likes: 0,
  },
};

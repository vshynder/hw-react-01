import React from "react";

import PropTypes from "prop-types";
import styles from "./statistics.module.css";

export const Statistics = (props) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{props.title}</h2>

      <ul className={styles.statList}>
        {props.data.map((el) => (
          <Li key={el.id} data={el} />
        ))}
      </ul>
    </section>
  );
};

const Li = ({ data }) => {
  const bgColor = "rgb(" + getRandomColor() + ")";
  return (
    <li style={{ backgroundColor: bgColor }} className={styles.item}>
      <span className={styles.label}>{data.label}</span>
      <span className={styles.percentage}>{data.percentage}%</span>
    </li>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

function getRandomColor() {
  return `${(Math.random() * 255) | 0},${(Math.random() * 255) | 0},${
    (Math.random() * 255) | 0
  }`;
}

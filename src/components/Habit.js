import React from 'react';
import styles from './Habit.module.css';

const Habit = (props) => {
  const habitColor = {
    backgroundColor: props.color,
  };

  return (
    <li className={styles.habit}>
      <div className={styles.habitDescription}>
        <div className={styles.habitColor} style={habitColor}></div>
        <p>{props.description}</p>
      </div>
      <div className={styles.habitActions}>
        <input type="checkbox" checked={props.checked} />
        <p>E</p>
        <p>D</p>
      </div>
    </li>
  );
};

export default Habit;

// `${styles.habitColor} ${background}`

import React from 'react';
import styles from './Habit.module.css';

const Habit = () => {
  return (
    <li className={styles.habit}>
      <div className={styles.habitDescription}>
        <div className={styles.habitColor}></div>
        <p>Habit being tracked</p>
      </div>
      <div className={styles.habitActions}>
        <input type="checkbox" />
        <p>E</p>
        <p>D</p>
      </div>
    </li>
  );
};

export default Habit;

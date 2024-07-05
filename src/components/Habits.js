import React from 'react';
import styles from './Habits.module.css';

const Habits = () => {
  return (
    <div>
      <ul className={styles.habits}>
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
      </ul>
    </div>
  );
};

export default Habits;

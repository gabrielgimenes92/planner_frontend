import React from 'react';
import styles from './page.module.css';
import Calendar from '@/components/Calendar';

const page = () => {
  return (
    <div className={styles.habitsTracker}>
      <h1 className={styles.habitTrackerTitle}>Habit Tracker</h1>
      <div className={styles.monthSelectionWrapper}>
        <p>&lt;</p>
        <h2 className={styles.monthSelection}>February 2020</h2>
        <p>&gt;</p>
      </div>
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
      <Calendar />
    </div>
  );
};

export default page;

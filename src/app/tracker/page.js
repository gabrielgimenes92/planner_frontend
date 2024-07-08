import React from 'react';
import styles from './page.module.css';
import Calendar from '@/components/Calendar';
import Habits from '@/components/Habits';

const page = () => {
  return (
    <div className={styles.habitsTracker}>
      <h1 className={styles.habitTrackerTitle}>Habit Tracker</h1>
      <div className={styles.monthSelectionWrapper}>
        <p>&lt;</p>
        <h2 className={styles.monthSelection}>February 4th 2020</h2>
        <p>&gt;</p>
      </div>
      <Habits />
      <Calendar />
    </div>
  );
};

export default page;

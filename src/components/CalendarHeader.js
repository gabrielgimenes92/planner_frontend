import React from 'react';
import styles from './CalendarHeader.module.css';

const CalendarHeader = () => {
  return (
    <div className={styles.calendarHeader}>
      <div className={styles.calendarHeaderCell}>
        <h2>Sun</h2>
      </div>
      <div className={styles.calendarHeaderCell}>
        <h2>Mon</h2>
      </div>
      <div className={styles.calendarHeaderCell}>
        <h2>Tue</h2>
      </div>
      <div className={styles.calendarHeaderCell}>
        <h2>Wed</h2>
      </div>
      <div className={styles.calendarHeaderCell}>
        <h2>Thu</h2>
      </div>
      <div className={styles.calendarHeaderCell}>
        <h2>Fri</h2>
      </div>
      <div className={styles.calendarHeaderCell}>
        <h2>Sat</h2>
      </div>
    </div>
  );
};

export default CalendarHeader;

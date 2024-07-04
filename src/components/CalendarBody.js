import React from 'react';
import styles from './CalendarBody.module.css';

const CalendarBody = () => {
  return (
    <div className={styles.calendarLine}>
      <div className={styles.calendarCell}>
        <div className="calendar-bubbles"></div>
        <h3>day</h3>
      </div>
      <div className={styles.calendarCell}>
        <div className="calendar-bubbles"></div>
        <h3>day</h3>
      </div>
      <div className={styles.calendarCell}>
        <div className="calendar-bubbles"></div>
        <h3>day</h3>
      </div>
      <div className={styles.calendarCell}>
        <div className="calendar-bubbles"></div>
        <h3>day</h3>
      </div>
      <div className={styles.calendarCell}>
        <div className="calendar-bubbles"></div>
        <h3>day</h3>
      </div>
      <div className={styles.calendarCell}>
        <div className="calendar-bubbles"></div>
        <h3>day</h3>
      </div>
      <div className={styles.calendarCell}>
        <div className="calendar-bubbles"></div>
        <h3>day</h3>
      </div>
    </div>
  );
};

export default CalendarBody;

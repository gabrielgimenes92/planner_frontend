import React from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import styles from './Calendar.module.css';

const Calendar = () => {
  return (
    <div className={styles.calendar}>
      <CalendarHeader />
      <CalendarBody />
    </div>
  );
};

export default Calendar;

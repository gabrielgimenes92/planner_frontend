import React from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import styles from './Calendar.module.css';

const Calendar = ({ monthHabitsList, selectedDate }) => {
  return (
    <div className={styles.calendar}>
      <CalendarHeader />
      <CalendarBody
        monthHabitsList={monthHabitsList}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default Calendar;

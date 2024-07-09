import React from 'react';
import styles from './CalendarBody.module.css';

const CalendarBody = ({ monthHabitsList, selectedDate }) => {
  let completedMonth;
  let calendar = null;
  let firstCalendarLine = [];
  let i = 0;
  let firstDayOfMonth = new Date(
    `${selectedDate.getMonth() + 1} 1, ${selectedDate.getFullYear()}`
  );
  let firstDayOfNextMonth = new Date(
    `${selectedDate.getMonth() + 2} 1, ${selectedDate.getFullYear()}`
  );

  let lastDayOfMonth = new Date();
  lastDayOfMonth.setTime(firstDayOfNextMonth.getTime() - 24 * 60 * 60 * 1000);

  while (!completedMonth) {
    let j = firstDayOfMonth.getDay();
    let offsetDate = new Date();

    //first line
    for (let i = 6; i >= 0; i--) {
      if (j > 0) {
        offsetDate.setTime(firstDayOfMonth.getTime() - j * 24 * 60 * 60 * 1000);
        calendar = (
          <div className={styles.calendarCell}>
            <div className="calendar-bubbles"></div>
            <h3 style={{ color: 'green' }}>{offsetDate.getDate()}</h3>
          </div>
        );
      } else if (j <= 0) {
        offsetDate.setTime(firstDayOfMonth.getTime() - j * 24 * 60 * 60 * 1000);
        calendar = (
          <div className={styles.calendarCell}>
            <div className="calendar-bubbles"></div>
            <h3>{offsetDate.getDate()}</h3>
          </div>
        );
      }
      firstCalendarLine.push(calendar);
      j--;
    }

    console.log(lastDayOfMonth);

    //subsequent lines
    let middleLines = [];
    let middleLineContent = [];

    middleLines.push(
      <div className={styles.calendarLine}>{middleLineContent}</div>
    );

    //last line

    // calendar = (
    //   <div className={styles.calendarCell}>
    //     <div className="calendar-bubbles"></div>
    //     <h3>day</h3>
    //   </div>
    // );
    // calendarLine.push(calendar);
    // i++;
    // if (i == 10) {
    completedMonth = true;
    // }
  }

  return (
    <>
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
      <div className={styles.calendarLine}>{firstCalendarLine}</div>
    </>
  );
};

export default CalendarBody;

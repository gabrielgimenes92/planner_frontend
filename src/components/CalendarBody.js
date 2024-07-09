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
    let firstDayOfMonthWeekDay = firstDayOfMonth.getDay();
    let offsetStartDate = new Date();

    //first line
    for (let i = 6; i >= 0; i--) {
      if (firstDayOfMonthWeekDay > 0) {
        offsetStartDate.setTime(
          firstDayOfMonth.getTime() -
            firstDayOfMonthWeekDay * 24 * 60 * 60 * 1000
        );
        calendar = (
          <div className={styles.calendarCell}>
            <div className="calendar-bubbles"></div>
            <h3 style={{ color: 'green' }}>{offsetStartDate.getDate()}</h3>
          </div>
        );
      } else if (firstDayOfMonthWeekDay <= 0) {
        offsetStartDate.setTime(
          firstDayOfMonth.getTime() -
            firstDayOfMonthWeekDay * 24 * 60 * 60 * 1000
        );
        calendar = (
          <div className={styles.calendarCell}>
            <div className="calendar-bubbles"></div>
            <h3>{offsetStartDate.getDate()}</h3>
          </div>
        );
      }
      firstCalendarLine.push(calendar);
      firstDayOfMonthWeekDay--;
    }

    console.log(lastDayOfMonth.getDay());

    //subsequent lines
    let middleLines = [];
    let middleLineContent = [];

    middleLines.push(
      <div className={styles.calendarLine}>{middleLineContent}</div>
    );

    //last line
    let lastDayOfMonthWeekDay = lastDayOfMonth.getDay();
    let offsetEndDate = new Date();

    for (let i = 0; i <= 6; i++) {
      if (lastDayOfMonthWeekDay >= 0) {
        offsetEndDate.setTime(
          lastDayOfMonth.getTime() + lastDayOfMonthWeekDay * 24 * 60 * 60 * 1000
        );
        calendar = (
          <div className={styles.calendarCell}>
            <div className="calendar-bubbles"></div>
            <h3>{offsetEndDate.getDate()}</h3>
          </div>
        );
      } else if (lastDayOfMonthWeekDay < 0) {
        offsetEndDate.setTime(
          lastDayOfMonth.getTime() - lastDayOfMonthWeekDay * 24 * 60 * 60 * 1000
        );
        calendar = (
          <div className={styles.calendarCell}>
            <div className="calendar-bubbles"></div>
            <h3 style={{ color: 'green' }}>{offsetEndDate.getDate()}</h3>
          </div>
        );
      }
      firstCalendarLine.push(calendar);
      lastDayOfMonthWeekDay--;
    }

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

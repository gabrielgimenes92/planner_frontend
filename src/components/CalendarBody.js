import React from 'react';
import styles from './CalendarBody.module.css';
import next from 'next';

const CalendarBody = ({ monthHabitsList, selectedDate }) => {
  let completedMonth;
  let calendar = null;
  let firstCalendarLine = [];
  let middleLines = [];
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
    let tempArray1 = [];

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
      tempArray1.push(calendar);
      firstDayOfMonthWeekDay--;
    }
    firstCalendarLine.push(
      <div className={styles.calendarLine}>{tempArray1}</div>
    );

    // console.log(lastDayOfMonth.getDay());

    //subsequent lines

    let nextSunday = 0;
    let lastSunday = lastDayOfMonth.getDate() - lastDayOfMonth.getDay();
    // console.log(`last sunday: ${lastSunday}`);

    let middleLinesDone = true;

    while (middleLinesDone) {
      let middleLineContent = [];

      if (nextSunday == 0) {
        nextSunday = 7 - firstDayOfMonth.getDay() + firstDayOfMonth.getDate();
        // console.log(`next sunday is: ${nextSunday} `);
        for (let i = 0; i <= 6; i++) {
          calendar = (
            <div className={styles.calendarCell}>
              <div className="calendar-bubbles"></div>
              <h3>{nextSunday + i}</h3>
            </div>
          );
          middleLineContent.push(calendar);
        }
        firstCalendarLine.push(
          <div className={styles.calendarLine}>{middleLineContent}</div>
        );
        nextSunday = nextSunday + 7;
      } else {
        if (nextSunday < lastSunday) {
          console.log(`There is a sunday on: ${nextSunday}`);
          for (let i = 0; i <= 6; i++) {
            calendar = (
              <div className={styles.calendarCell}>
                <div className="calendar-bubbles"></div>
                <h3>{nextSunday + i}</h3>
              </div>
            );
            middleLineContent.push(calendar);
          }
          firstCalendarLine.push(
            <div className={styles.calendarLine}>{middleLineContent}</div>
          );

          nextSunday = nextSunday + 7;
        } else {
          console.log('done');
          // firstCalendarLine.push(middleLines);
          middleLinesDone = false;
        }
      }
    }

    //last line
    console.log(`########################${lastDayOfMonth}`);
    let lastDayOfMonthWeekDay = lastDayOfMonth.getDay();
    let offsetEndDate = new Date();
    let tempArray2 = [];

    for (let i = 0; i <= 6; i++) {
      if (lastDayOfMonthWeekDay == 0) {
        offsetEndDate.setTime(
          lastDayOfMonth.getTime() + lastDayOfMonthWeekDay * 24 * 60 * 60 * 1000
        );
        let printDay = new Date();
        printDay.setTime(lastDayOfMonth.getTime() - offsetEndDate.getTime());
        calendar = (
          <div className={styles.calendarCell}>
            <div className="calendar-bubbles"></div>
            <h3>{printDay.getDate()}</h3>
          </div>
        );
      } else if (lastDayOfMonthWeekDay > 0) {
        offsetEndDate.setTime(
          lastDayOfMonth.getTime() + lastDayOfMonthWeekDay * 24 * 60 * 60 * 1000
        );
        let printDay = new Date();
        printDay.setTime(lastDayOfMonth.getTime() - offsetEndDate.getTime());
        calendar = (
          <div className={styles.calendarCell}>
            <div className="calendar-bubbles"></div>
            <h3>{printDay.getDate()}</h3>
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
      tempArray2.push(calendar);
      lastDayOfMonthWeekDay--;
    }
    firstCalendarLine.push(
      <div className={styles.calendarLine}>{tempArray2}</div>
    );

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
      {/* <div className={styles.calendarLine}>
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
      </div> */}
      <div>{firstCalendarLine}</div>
      {/* <div>{middleLines}</div> */}
    </>
  );
};

export default CalendarBody;

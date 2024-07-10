import React from 'react';
import styles from './CalendarBody.module.css';
import next from 'next';

const CalendarBody = ({ monthHabitsList, selectedDate }) => {
  let day = 24 * 60 * 60 * 1000;
  let calendar = [];
  let finished = false;

  let firstDayOfMonth = new Date(
    `${selectedDate.getMonth() + 1} 1, ${selectedDate.getFullYear()}`
  );

  let firstDayOfNextMonth = new Date(
    `${selectedDate.getMonth() + 2} 1, ${selectedDate.getFullYear()}`
  );

  let lastDayOfMonth = new Date();
  lastDayOfMonth.setTime(firstDayOfNextMonth.getTime() - 1 * day);

  let calendarStartDate = new Date();
  if (firstDayOfMonth.getDay() === 0) {
    calendarStartDate = firstDayOfMonth;
  } else {
    calendarStartDate.setTime(
      firstDayOfMonth.getTime() - firstDayOfMonth.getDay() * day
    );
  }

  let drawingDate = calendarStartDate;
  let calendarLine = [];

  while (!finished) {
    calendarLine = [];
    for (let i = 0; i < 7; i++) {
      let a;
      if (drawingDate < firstDayOfMonth || drawingDate > lastDayOfMonth) {
        a = (
          <div className={styles.calendarCell}>
            <div className="calendar-bubbles"></div>
            <h3 style={{ color: 'green' }}>{drawingDate.getDate()}</h3>
          </div>
        );
      } else {
        a = (
          <div className={styles.calendarCell}>
            <div className="calendar-bubbles"></div>
            <h3>{drawingDate.getDate()}</h3>
          </div>
        );
      }
      calendarLine.push(a);
      drawingDate.setTime(drawingDate.getTime() + 1 * day);
    }
    calendar.push(<div className={styles.calendarLine}>{calendarLine}</div>);

    console.log(`drawing date: ${drawingDate}`);
    console.log(`last day date: ${lastDayOfMonth}`);

    if (drawingDate.getTime() > lastDayOfMonth.getTime()) {
      finished = true;
    }
  }

  return (
    <>
      <div>{calendar}</div>
    </>
  );
};

export default CalendarBody;

// while (!completedMonth) {
//   let firstDayOfMonthWeekDay = firstDayOfMonth.getDay();
//   let offsetStartDate = new Date();
//   let tempArray1 = [];

//   //first line
//   for (let i = 6; i >= 0; i--) {
//     if (firstDayOfMonthWeekDay > 0) {
//       offsetStartDate.setTime(
//         firstDayOfMonth.getTime() -
//           firstDayOfMonthWeekDay * 24 * 60 * 60 * 1000
//       );
//       calendar = (
//         <div className={styles.calendarCell}>
//           <div className="calendar-bubbles"></div>
//           <h3 style={{ color: 'green' }}>{offsetStartDate.getDate()}</h3>
//         </div>
//       );
//     } else if (firstDayOfMonthWeekDay <= 0) {
//       offsetStartDate.setTime(
//         firstDayOfMonth.getTime() -
//           firstDayOfMonthWeekDay * 24 * 60 * 60 * 1000
//       );
//       calendar = (
//         <div className={styles.calendarCell}>
//           <div className="calendar-bubbles"></div>
//           <h3>{offsetStartDate.getDate()}</h3>
//         </div>
//       );
//     }
//     tempArray1.push(calendar);
//     firstDayOfMonthWeekDay--;
//   }
//   firstCalendarLine.push(
//     <div className={styles.calendarLine}>{tempArray1}</div>
//   );

//   //middle lines
//   let nextSunday = 0;
//   let lastSunday = lastDayOfMonth.getDate() - lastDayOfMonth.getDay();

//   let middleLinesDone = true;

//   while (middleLinesDone) {
//     let middleLineContent = [];

//     if (nextSunday == 0) {
//       nextSunday = 7 - firstDayOfMonth.getDay() + firstDayOfMonth.getDate();
//       for (let i = 0; i <= 6; i++) {
//         calendar = (
//           <div className={styles.calendarCell}>
//             <div className="calendar-bubbles"></div>
//             <h3>{nextSunday + i}</h3>
//           </div>
//         );
//         middleLineContent.push(calendar);
//       }
//       firstCalendarLine.push(
//         <div className={styles.calendarLine}>{middleLineContent}</div>
//       );
//       nextSunday = nextSunday + 7;
//     } else {
//       if (nextSunday < lastSunday) {
//         for (let i = 0; i <= 6; i++) {
//           calendar = (
//             <div className={styles.calendarCell}>
//               <div className="calendar-bubbles"></div>
//               <h3>{nextSunday + i}</h3>
//             </div>
//           );
//           middleLineContent.push(calendar);
//         }
//         firstCalendarLine.push(
//           <div className={styles.calendarLine}>{middleLineContent}</div>
//         );

//         nextSunday = nextSunday + 7;
//       } else {
//         middleLinesDone = false;
//       }
//     }
//   }

//   //last line
//   let lastDayOfMonthWeekDay = lastDayOfMonth.getDay();
//   let offsetEndDate = new Date();
//   let tempArray2 = [];

//   for (let i = 0; i <= 6; i++) {
//     if (lastDayOfMonth.getDay() == 0 && lastDayOfMonthWeekDay == 0) {
//       let printDay = new Date();
//       printDay.setTime(lastDayOfMonth.getTime());
//       calendar = (
//         <div className={styles.calendarCell}>
//           <div className="calendar-bubbles"></div>
//           <h3>{printDay.getDate()}</h3>
//         </div>
//       );
//     } else if (lastDayOfMonthWeekDay == 0) {
//       let printDay = new Date();
//       printDay.setTime(lastDayOfMonth.getTime());
//       calendar = (
//         <div className={styles.calendarCell}>
//           <div className="calendar-bubbles"></div>
//           <h3>{printDay.getDate()}</h3>
//         </div>
//       );
//     } else if (lastDayOfMonthWeekDay > 0) {
//       offsetEndDate.setTime(
//         lastDayOfMonth.getTime() + lastDayOfMonthWeekDay * 24 * 60 * 60 * 1000
//       );
//       let printDay = new Date();
//       printDay.setTime(lastDayOfMonth.getTime() - offsetEndDate.getTime());
//       calendar = (
//         <div className={styles.calendarCell}>
//           <div className="calendar-bubbles"></div>
//           <h3>{printDay.getDate()}</h3>
//         </div>
//       );
//     } else if (lastDayOfMonthWeekDay < 0) {
//       offsetEndDate.setTime(
//         lastDayOfMonth.getTime() - lastDayOfMonthWeekDay * 24 * 60 * 60 * 1000
//       );
//       calendar = (
//         <div className={styles.calendarCell}>
//           <div className="calendar-bubbles"></div>
//           <h3 style={{ color: 'green' }}>{offsetEndDate.getDate()}</h3>
//         </div>
//       );
//     }
//     tempArray2.push(calendar);
//     lastDayOfMonthWeekDay--;
//   }
//   firstCalendarLine.push(
//     <div className={styles.calendarLine}>{tempArray2}</div>
//   );

//   completedMonth = true;
// }

'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import Calendar from '@/components/Calendar';
import Habits from '@/components/Habits';

import { dummyHabits, dummyHabits2 } from '@/dummyData/dummyHabits';
import next from 'next';

const page = () => {
  const [monthHabitsList, setMonthHabitsList] = useState(dummyHabits2);
  const [dayHabitsList, setDayHabitsList] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date('April, 2, 2024'));

  const [value, setValue] = useState(0);

  const handleChangeDay = (event) => {
    // console.log(event.target.id);
    let tempSelectedDate = new Date(selectedDate);
    switch (event.target.id) {
      case 'previousDay':
        let previousDay = selectedDate.getMonth() - 1;
        tempSelectedDate.setMonth(previousDay);
        return setSelectedDate(tempSelectedDate);
      case 'nextDay':
        let nextDay = selectedDate.getMonth() + 1;
        tempSelectedDate.setMonth(nextDay);
        return setSelectedDate(tempSelectedDate);
      default:
        return console.log('Error on the switch');
    }
  };

  return (
    <div className={styles.habitsTracker}>
      <h1 className={styles.habitTrackerTitle}>Habit Tracker</h1>
      <div className={styles.monthSelectionWrapper}>
        <p onClick={(e) => handleChangeDay(e)} id="previousDay">
          &lt;
        </p>
        {selectedDate instanceof Date ? (
          <h2 className={styles.monthSelection}>
            {selectedDate.toLocaleDateString('en-US', { dateStyle: 'medium' })}
          </h2>
        ) : (
          <></>
        )}
        <p onClick={(e) => handleChangeDay(e)} id="nextDay">
          &gt;
        </p>
      </div>
      <Habits
        monthHabitsList={monthHabitsList}
        dayHabitsList={dayHabitsList}
        setDayHabitsList={setDayHabitsList}
        selectedDate={selectedDate}
      />
      <Calendar monthHabitsList={monthHabitsList} selectedDate={selectedDate} />
    </div>
  );
};

export default page;

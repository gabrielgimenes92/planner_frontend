'use client';

import React, { useEffect, useState } from 'react';
import styles from './Habits.module.css';
import Habit from './Habit';

import { dummyHabits, dummyHabits2 } from '@/dummyData/dummyHabits';

const Habits = () => {
  const [monthHabitsList, setMonthHabitsList] = useState(dummyHabits2);
  const [dayHabitsList, setDayHabitsList] = useState([]);
  let currentDate = new Date('February, 3, 2020');

  useEffect(() => {
    for (let i = 0; i < monthHabitsList.length; i++) {
      if (monthHabitsList[i].date.getDay() == currentDate.getDay()) {
        setDayHabitsList(monthHabitsList[i].habits);
      }
    }
  }, []);

  return (
    <div>
      <ul className={styles.habits}>
        {dayHabitsList.map((habit) => (
          <Habit
            id={habit.id}
            description={habit.description}
            color={habit.color}
            checked={habit.checked}
          />
        ))}
      </ul>
    </div>
  );
};

export default Habits;

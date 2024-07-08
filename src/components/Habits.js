// 'use client';

import React, { useEffect } from 'react';
import styles from './Habits.module.css';
import Habit from './Habit';

const Habits = ({
  monthHabitsList,
  dayHabitsList,
  setDayHabitsList,
  selectedDate,
}) => {
  useEffect(() => {
    for (let i = 0; i < monthHabitsList.length; i++) {
      if (monthHabitsList[i].date.getDay() == selectedDate.getDay()) {
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

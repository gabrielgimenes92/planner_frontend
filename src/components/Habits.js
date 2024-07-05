'use client';

import React, { useState } from 'react';
import styles from './Habits.module.css';
import Habit from './Habit';

import dummyHabits from '@/dummyData/dummyHabits';

const Habits = () => {
  const [habitsList, setHabitsList] = useState(dummyHabits);

  return (
    <div>
      <ul className={styles.habits}>
        {habitsList.map((habit) => (
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

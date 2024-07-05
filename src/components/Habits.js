'use client';

import React, { useState } from 'react';
import styles from './Habits.module.css';
import Habit from './Habit';

import dummyHabits from '@/dummyData/dummyHabits';

const Habits = () => {
  const [habitsList, setHabitsList] = useState(dummyHabits);

  console.log(habitsList);

  return (
    <div>
      <ul className={styles.habits}>
        <Habit />
        <Habit />
        <Habit />
        <Habit />
        <Habit />
        <Habit />
      </ul>
    </div>
  );
};

export default Habits;

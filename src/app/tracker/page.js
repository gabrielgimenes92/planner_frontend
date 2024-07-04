import React from 'react';
import styles from './page.module.css';

const page = () => {
  return (
    <div className={styles.habitsTracker}>
      <h1 className={styles.habitTrackerTitle}>Habit Tracker</h1>
      <div className={styles.monthSelectionWrapper}>
        <p>&lt;</p>
        <h2 className={styles.monthSelection}>February 2020</h2>
        <p>&gt;</p>
      </div>
      <div>
        <ul className={styles.habits}>
          <li className={styles.habit}>
            <div className={styles.habitDescription}>
              <div className={styles.habitColor}></div>
              <p>Habit being tracked</p>
            </div>
            <div className={styles.habitActions}>
              <input type="checkbox" />
              <p>E</p>
              <p>D</p>
            </div>
          </li>
          <li className={styles.habit}>
            <div className={styles.habitDescription}>
              <div className={styles.habitColor}></div>
              <p>Habit being tracked</p>
            </div>
            <div className={styles.habitActions}>
              <input type="checkbox" />
              <p>E</p>
              <p>D</p>
            </div>
          </li>
          <li className={styles.habit}>
            <div className={styles.habitDescription}>
              <div className={styles.habitColor}></div>
              <p>Habit being tracked</p>
            </div>
            <div className={styles.habitActions}>
              <input type="checkbox" />
              <p>E</p>
              <p>D</p>
            </div>
          </li>
          <li className={styles.habit}>
            <div className={styles.habitDescription}>
              <div className={styles.habitColor}></div>
              <p>Habit being tracked</p>
            </div>
            <div className={styles.habitActions}>
              <input type="checkbox" />
              <p>E</p>
              <p>D</p>
            </div>
          </li>
          <li className={styles.habit}>
            <div className={styles.habitDescription}>
              <div className={styles.habitColor}></div>
              <p>Habit being tracked</p>
            </div>
            <div className={styles.habitActions}>
              <input type="checkbox" />
              <p>E</p>
              <p>D</p>
            </div>
          </li>
          <li className={styles.habit}>
            <div className={styles.habitDescription}>
              <div className={styles.habitColor}></div>
              <p>Habit being tracked</p>
            </div>
            <div className={styles.habitActions}>
              <input type="checkbox" />
              <p>E</p>
              <p>D</p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.calendar}>
        <div className={styles.calendarHeader}>
          <div className={styles.calendarHeaderCell}>
            <h2>Sun</h2>
          </div>
          <div className={styles.calendarHeaderCell}>
            <h2>Mon</h2>
          </div>
          <div className={styles.calendarHeaderCell}>
            <h2>Tue</h2>
          </div>
          <div className={styles.calendarHeaderCell}>
            <h2>Wed</h2>
          </div>
          <div className={styles.calendarHeaderCell}>
            <h2>Thu</h2>
          </div>
          <div className={styles.calendarHeaderCell}>
            <h2>Fri</h2>
          </div>
          <div className={styles.calendarHeaderCell}>
            <h2>Sat</h2>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default page;

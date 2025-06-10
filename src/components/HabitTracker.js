import React from 'react';
import './HabitTracker.css';

function HabitTracker() {
  return (
    <div className="display">
      <h3>📊 Your Study Habits</h3>
      <ul>
        <li>
          <span>Math</span>
          <span>-- 2 hrs✅</span>
        </li>
        <li>
          <span>DSA</span>
          <span>-- 1 hr</span>
        </li>
        <li>
          <span>AI</span>
          <span>-- 3 hrs✅</span>
        </li>
      </ul>
    </div>
  );
}

export default HabitTracker;

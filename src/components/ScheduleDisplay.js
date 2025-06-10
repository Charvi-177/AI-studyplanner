import React from 'react';
import './ScheduleDisplay.css';

function ScheduleDisplay() {
  return (
    <div className="display">
      <h3>📋 Your Planned Schedule will appear here.</h3>
       <div className="schedule-box">
        <p>Math: 10 AM - 12 PM</p>
        <p>AI: 2 PM - 4 PM</p>
        <p>DSA: 6 PM - 7:30 PM</p>
      </div>
    </div>
  );
}

export default ScheduleDisplay;

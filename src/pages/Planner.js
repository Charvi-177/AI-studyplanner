import React from 'react';
import InputForm from '../components/InputForm';
import ScheduleDisplay from '../components/ScheduleDisplay';

function Planner() {
  return (
    <div className="page">
      <h1>📅 Study Planner</h1>
      <InputForm />
      <ScheduleDisplay />
    </div>
  );
}

export default Planner;

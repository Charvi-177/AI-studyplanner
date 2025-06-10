import React, { useState } from 'react';
import InputForm from '../components/InputForm';
import ScheduleDisplay from '../components/ScheduleDisplay';

const Planner = () => {
  const [schedule, setSchedule] = useState([]);

  return (
    <div>
      <InputForm onScheduleUpdate={setSchedule} />
      <ScheduleDisplay schedule={schedule} />
    </div>
  );
};

export default Planner;

import React, { useState } from 'react';

function InputForm({ onScheduleGenerated }) {
  const [subjects, setSubjects] = useState('');
  const [hoursPerDay, setHoursPerDay] = useState('');
  const [deadlines, setDeadlines] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare data as arrays/objects
    const subjectsArray = subjects.split(',').map(s => s.trim());
    const deadlinesArray = deadlines.split(',').map(d => d.trim());

    fetch('http://localhost:5000/api/planner/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subjects: subjectsArray,
        hoursPerDay: Number(hoursPerDay),
        deadlines: deadlinesArray,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log('Schedule:', data.schedule);
        // Pass data to parent or update state
        onScheduleGenerated(data.schedule);
      })
      .catch(err => {
        console.error('Error fetching schedule:', err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Subjects (comma separated):
        <input value={subjects} onChange={e => setSubjects(e.target.value)} />
      </label>
      <br />
      <label>
        Hours per day:
        <input type="number" value={hoursPerDay} onChange={e => setHoursPerDay(e.target.value)} />
      </label>
      <br />
      <label>
        Deadlines (comma separated, YYYY-MM-DD):
        <input value={deadlines} onChange={e => setDeadlines(e.target.value)} />
      </label>
      <br />
      <button type="submit">Generate Schedule</button>
    </form>
  );
}

export default InputForm;

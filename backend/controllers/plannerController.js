const fs = require('fs');
const path = require('path');

exports.generateSchedule = (req, res) => {
  const { subjects, hoursPerDay, deadlines } = req.body;

  if (!subjects || !hoursPerDay || !deadlines) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  // Basic scheduling logic (dummy)
  const schedule = subjects.map((subject, index) => ({
    subject,
    time: `${9 + index * 2}:00 - ${11 + index * 2}:00`
  }));

  // Save to local file
  const dataPath = path.join(__dirname, '../data/scheduleData.json');
  fs.writeFileSync(dataPath, JSON.stringify(schedule, null, 2));

  res.status(200).json({ schedule });
};

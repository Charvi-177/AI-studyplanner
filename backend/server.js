fetch("http://localhost:5000/api/planner/generate", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    subjects: ["Math", "AI", "DSA"],
    hoursPerDay: 6,
    deadlines: ["2025-06-30", "2025-07-05", "2025-07-10"]
  }),
})
  .then((res) => res.json())
  .then((data) => console.log("Schedule:", data))
  .catch((err) => console.error("Error:", err));

let habits = [];

function addHabit(name) {
  if (!name.trim()) return false;
  habits.push({ name: name.trim(), streak: 0, completedDates: [] });
  return true;
}

if (typeof module !== "undefined") {
  module.exports = { addHabit, habits };
}

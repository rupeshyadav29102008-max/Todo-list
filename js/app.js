function validateTaskInput(title) {
  return title.trim().length > 0;
}

function saveTasksToStorage(tasks) {
  try {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    return true;
  } catch (err) {
    console.error("Storage error:", err);
    return false;
  }
}

function loadTasksFromStorage() {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : [];
}

if (typeof module !== "undefined") {
  module.exports = { validateTaskInput, saveTasksToStorage, loadTasksFromStorage };
}

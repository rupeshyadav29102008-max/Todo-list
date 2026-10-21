function calculateCompletionRate(total, completed) {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

if (typeof module !== "undefined") {
  module.exports = { calculateCompletionRate };
}

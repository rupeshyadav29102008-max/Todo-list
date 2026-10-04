const { calculateStreak } = require("../js/habits");

describe("Habit Streaks", () => {
  test("returns 0 for no recorded habits", () => {
    expect(calculateStreak([])).toBe(0);
  });
});

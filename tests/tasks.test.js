const { validateTaskInput } = require("../js/app");

describe("Task Validation Logic", () => {
  test("returns true for valid non-empty string", () => {
    expect(validateTaskInput("Complete DevOps Lab")).toBe(true);
  });

  test("returns false for empty or whitespace-only input", () => {
    expect(validateTaskInput("   ")).toBe(false);
  });
});

const { default: test } = require("node:test");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const add = require("./add");
describe("Math operations", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });

  test("subtracts 2 from 5 to equal 3", () => {
    expect(5 - 2).toBe(3);
  });
});

// const { describe, it, expect } = require("jest");
const { describe } = require("node:test");
const messageDeliverySystem = require("./MessageDeliverySystem.js");

describe
describe("UnitTests", function () {
  test("MessageDeliverySystem", async function () {
    it("should pass test case 1", () => {
      const testCase1 = {
        timestamps: [1, 4, 5, 10, 11, 14],
        messages: ["hello", "bye", "bye", "hello", "bye", "hello"],
        k: 5,
      };
      const expected1 = ["true", "true", "false", "true", "true", "false"];

      expect(messageDeliverySystem(testCase1)).toEqual(expected1);
    });
  });
});

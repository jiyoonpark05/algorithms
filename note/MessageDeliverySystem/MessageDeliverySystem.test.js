const messageDelivery = require("./MessageDeliverySystem");

describe("Message Delivery System", () => {
  const testCases = [
    {
      timestamps: [1, 4, 5, 10, 11, 14],
      messages: ["hello", "bye", "bye", "hello", "bye", "hello"],
      k: 5,
    },
    {
      timestamps: [1, 2, 3],
      messages: ["a", "b", "c"],
      k: 2,
    },
  ];

  const expectedResults = [
    ["true", "true", "false", "true", "true", "false"],
    ["true", "true", "true"],
  ];

  testCases.forEach((testCase, idx) => {
    it(`test case ${idx + 1}`, () => {
      expect(messageDelivery(testCase)).toEqual(expectedResults[idx]);
    });
  });
});

const barterMarket = require("./BarterMarket");

describe("BarterMarket", () => {
  const testCases = [
    { comicBooks: 4, coins: 8, coinsNeeded: 4, coinsOffered: 3 },
    { comicBooks: 4, coins: 5, coinsNeeded: 1, coinsOffered: 2 },
    { comicBooks: 7, coins: 3, coinsNeeded: 3, coinsOffered: 4 },
    { comicBooks: 2, coins: 1, coinsNeeded: 2, coinsOffered: 1 },
    { comicBooks: 5, coins: 10, coinsNeeded: 1, coinsOffered: 1 },
    {
      comicBooks: 1000000000,
      coins: 1000000000,
      coinsNeeded: 1,
      coinsOffered: 1,
    },
  ];

  const expectedResult = [2, 4, 2, 0, 5, 1000000000];

  testCases.forEach((testCase, idx) => {
    it(`test case ${idx + 1}`, () => {
      expect(barterMarket(testCase)).toEqual(expectedResult[idx]);
    });
  });
});

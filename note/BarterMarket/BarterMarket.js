function solution({ comicBooks, coins, coinsNeeded, coinsOffered }) {
  const maxCoinNeeded = comicBooks * coinsNeeded;
  let fictionBooks = 0;

  // Directly trade without selling
  if (coins >= maxCoinNeeded) {
    return comicBooks;
  }

  // sell comic books for coins
  while (comicBooks > 0 && coins >= coinsNeeded) {
    const coinNeeded = comicBooks * coinsNeeded;

    if (coins >= coinNeeded) {
      // calculates how many fiction books you can buy with available coins
      const tradeCount = Math.floor(coins / coinNeeded);

      comicBooks -= tradeCount;
      coins -= tradeCount * coinNeeded;
    } else {
      comicBooks--;
      coins += coinsOffered;
    }
  }

  console.log(fictionBooks);
  return fictionBooks;
}

function main() {
  const testCase = [
    { comicBooks: 4, coins: 8, coinsNeeded: 4, coinsOffered: 3 }, // result : 2
    { comicBooks: 4, coins: 5, coinsNeeded: 1, coinsOffered: 2 }, // result : 4
    { comicBooks: 7, coins: 3, coinsNeeded: 3, coinsOffered: 4 }, // result : 2
    { comicBooks: 2, coins: 1, coinsNeeded: 2, coinsOffered: 1 }, // result : 0
    { comicBooks: 5, coins: 10, coinsNeeded: 1, coinsOffered: 1 }, // result : 5
    {
      comicBooks: 1000000000,
      coins: 1000000000,
      coinsNeeded: 1,
      coinsOffered: 1,
    },
  ];
  solution(testCase[5]);
}

main();

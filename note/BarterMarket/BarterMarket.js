function barterMarket({ comicBooks, coins, coinsNeeded, coinsOffered }) {
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
      fictionBooks += tradeCount;
    } else {
      comicBooks--;
      coins += coinsOffered;
    }
  }
  return fictionBooks;
}

module.exports = barterMarket;

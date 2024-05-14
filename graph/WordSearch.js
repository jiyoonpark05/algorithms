// [leetcode]  79. Word Search
/**
Given an m x n grid of characters board and a string word, return true if word exists in the grid.
The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

* example
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const y = board.length;
  const x = board[0].length;
  const search = (row, col, index) => {
    // Base case: if the entire word is found
    if (index === word.length) return true;

    // Check boundaries and if the current cell matches the word character
    if (
      row < 0 ||
      row >= y ||
      col < 0 ||
      col >= x ||
      board[row][col] !== word[index]
    ) {
      return false;
    }

    // Temporarily mark the current cell as visited
    const temp = board[row][col];
    board[row][col] = "*";

    // Explore in all four directions
    const found =
      search(row + 1, col, index + 1) ||
      search(row - 1, col, index + 1) ||
      search(row, col + 1, index + 1) ||
      search(row, col - 1, index + 1);

    // Restore the current cell
    board[row][col] = temp;

    return found;
  };

  // Start search from each cell
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (search(i, j, 0)) return true;
    }
  }

  return false; // Word not found
};

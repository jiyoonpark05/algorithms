// [leetcode] 994. Rotting Oranges
/**
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 */

/**
  * example
  Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
  Output: 4
  */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const y = grid.length;
  const x = grid[0].length;
  let min = 0;
  let freshCnt = 0;
  const queue = [];

  // Go through all the oranges and add the number of fresh and spoiled oranges to the queue.
  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (grid[i][j] === 1) freshCnt++;
      if (grid[i][j] === 2) queue.push([i, j]);
    }
  }

  var rotting = function (orange) {
    if (
      orange === null ||
      grid[orange[0]][orange[1]] === 2 ||
      grid[orange[0]][orange[1]] === 0
    )
      return;
    const [i, j] = orange;
    grid[i][j] = 2;
    freshCnt--;
  };

  while (queue.length && freshCnt > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      const [row, col] = queue.shift();
      const directions = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1],
      ];

      for (const [dx, dy] of directions) {
        const newRow = row + dx;
        const newCol = col + dy;
        if (
          newRow >= 0 &&
          newRow < y &&
          newCol >= 0 &&
          newCol < x &&
          grid[newRow][newCol] === 1
        ) {
          rotting([newRow, newCol]);
          queue.push([newRow, newCol]);
        }
      }
    }

    min++;
  }
  return freshCnt === 0 ? min : -1;
};

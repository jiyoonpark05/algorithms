// [hackerrank] 2D Array - DS
/**
 Given a 6 x 6 2D Array arr
    1 1 1 0 0 0
    0 1 0 0 0 0
    1 1 1 0 0 0
    0 0 0 0 0 0
    0 0 0 0 0 0
    0 0 0 0 0 0
An hourglass in A is a subset of values with indices falling in this pattern in arr's graphical representation:
    a b c
      d
    e f g
There are  16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6 x 6.
 */
function hourglassSum(arr) {
  let maxSum = -Infinity; // Initialize maxSum to negative infinity
  // if maxSum = 0 you can't cover the case with negative

  for (let i = 1; i < arr[0].length - 1; i++) {
    for (let j = 1; j < arr[1].length - 1; j++) {
      const middle = arr[j][i];
      const topA = arr[j - 1][i - 1];
      const topB = arr[j - 1][i];
      const topC = arr[j - 1][i + 1];
      const bottomA = arr[j + 1][i - 1];
      const bottomB = arr[j + 1][i];
      const bottomC = arr[j + 1][i + 1];

      maxSum = Math.max(
        maxSum,
        topA + topB + topC + bottomA + bottomB + bottomC + middle
      );
    }
  }
  return maxSum;
}

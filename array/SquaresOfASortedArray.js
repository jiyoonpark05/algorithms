// 977. Squares of a Sorted Array
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
/**
* Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// way of square x = 3
// 1. x ** 2 = 9
// 2. Math.pow(x, 2) = 9

// Runtime 89ms / Memory 56.7MB
var sortedSquares = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result.push(Math.pow(nums[i], 2));
  }
  return result.sort((a, b) => a - b);
};

// Using 2 pointer Runtime 74ms / Memory 57MB
var sortedSquares = function (nums) {
  // way of square x = 3
  // 1. x ** 2 = 9
  // 2. Math.pow(x, 2) = 9
  const length = nums.length;
  const result = new Array(length);
  let left = 0;
  let right = length - 1;

  for (let i = length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = Math.pow(nums[left], 2);
      left++;
    } else {
      result[i] = Math.pow(nums[right], 2);
      right--;
    }
  }
  return result;
};

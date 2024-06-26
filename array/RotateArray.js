// [leetcode] 189. Rotate Array
/**
 Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 * example
 Input: nums = [1,2,3,4,5,6,7], k = 3
 Output: [5,6,7,1,2,3,4]
 
 Explanation:
 rotate 1 steps to the right: [7,1,2,3,4,5,6]
 rotate 2 steps to the right: [6,7,1,2,3,4,5]
 rotate 3 steps to the right: [5,6,7,1,2,3,4]
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  // first try : passed all the test but it tooks so long
  //   while (k > 0) {
  //     const rotateValue = nums.pop();
  //     nums.unshift(rotateValue);
  //     k--;
  //   }
  const length = nums.length;
  k %= length; //  when k is larger than length, it ensures that k is adjusted to a value within the bounds of the array's length.
  const rotateValues = nums.splice(length - k, k);
  nums.unshift(...rotateValues);
};

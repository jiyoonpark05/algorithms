// 217.Contains Duplicate

/**
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
  const newArray = [...new Set(nums)];

  return newArray.length !== nums.length;
};

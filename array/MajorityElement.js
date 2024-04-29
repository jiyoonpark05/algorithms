// 169. Majority Element

/** 
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.
 */

/**
  * example 1. 
    Input: nums = [3,2,3]
    Output: 3 

  * example 2. 
    Input: nums = [2,2,1,1,1,2,2]
    Output: 2
  */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const elementMap = {};

  for (const num of nums) {
    elementMap[num] = (elementMap[num] || 0) + 1;
  }

  const result = Object.entries(elementMap).sort((a, b) => b[1] - a[1])[0][0];

  return result;
};

// [leetcode] 242.Valid Anagram
/**
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const textArry = s.toLowerCase().split("").sort();
  const textArry2 = t.toLowerCase().split("").sort();
  let answer = false;

  if (textArry.length !== textArry2.length) return false;

  for (let i = 0; i < textArry.length; i++) {
    if (textArry[i] === textArry2[i]) {
      answer = true;
    } else {
      return false;
    }
  }
  return answer;
};

//[leetcode] 409.Longest Palindrome
/**
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 */
var longestPalindrome = function (s) {
  let answer = 0;
  let keys = {};

  for (let char of s) {
    keys[char] = (keys[char] || 0) + 1;

    if (keys[char] % 2 === 0) {
      answer += 2;
    }
  }

  return s.length > answer ? answer + 1 : answer;
};

/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false; //Anagram words must have same length

  //Convert both the strings to lowercase to avoid case mismatch
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  //Store the frequency of each character of 'str1' in a array
  const charMap1 = [];

  for (let char of str1) {
    charMap1[char] = (charMap1[char] + 1) || 1;
  }

  //Now check if the frequency of each character of 'str2' is same as that of 'str1'
  for (let char of str2) {
    if (!charMap1[char] || charMap1[char] == 0) return false;
    charMap1[char]--;
  }

  return true;
}

module.exports = isAnagram;

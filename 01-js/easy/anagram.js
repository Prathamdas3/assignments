/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const data1 = str1.replace(' ', '').split('')
  const data2 = str2.replace(' ', '').split('')
  for (let i = 0; i < data2.length; i++) {
    if (!data1.includes(data2[i])) {
      return false
    }
  }
  return true
}

console.log(isAnagram('cinema', 'ice man'))

module.exports = isAnagram

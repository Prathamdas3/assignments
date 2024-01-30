/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const data = str.toLowerCase().replace(' ', '').split('')
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let totalVowels = 0
  for (let d of data) {
    for (let v of vowels) {
      if (d === v) {
        totalVowels++
      }
    }
  }
  return totalVowels
}

console.log(countVowels('Anirban tudu'))

module.exports = countVowels

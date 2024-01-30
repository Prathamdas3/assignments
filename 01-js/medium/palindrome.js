/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const data = str.toLowerCase().replace(' ', '').split('').reverse().join('')
  if (data === str.toLowerCase()) return true
  return false
}

console.log(isPalindrome('master'))

module.exports = isPalindrome

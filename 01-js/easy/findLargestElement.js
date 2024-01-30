/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let ele = numbers[0]
  for (let n of numbers) {
    if (n > ele) {
      ele = n
    }
  }
  return ele
}
console.log(findLargestElement([1, 2, 3, 4, -2]))

module.exports = findLargestElement

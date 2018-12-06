'use strict'

// with assumption that input has been cleaned into an array of 'number'
// const input = ...

// part 1
let answer = input.reduce((p, c) => p + c)

// part 2
let answer = 0
let sums = input[0] // pre-populated first iteration for ease of coding
for (let i = 0; i < sums.length; i++) {
  let newSum = sums[i] + input[(i + 1) % input.length] // circular array, as it may requires multiple iterations
  if (sums.includes(newSum)) {
    answer = newSum
    break
  }
  sums.push(newSum) // keep growing the array
}

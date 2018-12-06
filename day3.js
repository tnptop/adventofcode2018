'use strict'

// with assumption that input has been loaded from 'pre' tag
// let inputs = ...

// part 1
// reformatted input
inputs = inputs.split('\n').map(input => {
  let arr = input.split(/[^0-9]/g).slice(4)
  arr.splice(2, 1)
  return arr.map(a => Number(a))
})

// initialize canvas
let size = {
  xMin: Number.MAX_SAFE_INTEGER,
  xMax: Number.MIN_SAFE_INTEGER,
  yMin: Number.MAX_SAFE_INTEGER,
  yMax: Number.MIN_SAFE_INTEGER
}
inputs.forEach(input => {
    size.xMin = Math.min(size.xMin, input[0])
    size.xMax = Math.max(size.xMax, input[0] + input[2] - 1)
    size.yMin = Math.min(size.yMin, input[1])
    size.yMax = Math.max(size.yMax, input[1] + input[3] - 1)
})
let canvas = []
for (let i = 0; i <= yMax; i++) {
    canvas[i] = []
    for (let j= 0; j <= xMax; j++) {
        canvas[i][j] = 0
    }
}

// fill the canvas
inputs.forEach(params => {
  for (let i = 0; i < params[3]; i++) {
    for (let j = 0; j < params[2]; j++) {
      canvas[params[1] + i][params[0] + j]++
    }
  }
})

// find overlap
let answer = 0
for (let i = 0; i <= size.yMax; i++) {
  for (let j= 0; j <= size.xMax; j++) {
		if (canvas[i][j] > 1) answer++
  }
}

// part 2
inputs.forEach((params, index) => {
	let flag = true
    for (let i = params[1]; i < params[1] + params[3]; i++) {
      for (let j = params[0]; j < params[0] + params[2]; j++) {
        if (canvas[i][j] > 1) flag = false
      }
  }
  if (flag) console.log(index + 1)
})

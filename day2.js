'use strict'

// with assumption that input has been cleaned into an array of 'string'
// const inputs = ...

// part 1
const checkCriteria = (id) => {
  // constraint: only lowercase [a-z] is in the id
  let counts = Array(26).fill(0)
  id.split('').forEach(c => counts[c.charCodeAt() - 97] += 1)
  return [ counts.includes(2), counts.includes(3)]
}

const calculateChecksum = (inputs) => {
  let criteria = inputs.map(input => checkCriteria(input))
  let criteriaCount = criteria.reduce((p, c) => {
    return p.map((e, index) => e + c[index])
  }, [0, 0])
  return criteriaCount[0] * criteriaCount[1]
}

let answer = calculateChecksum(inputs)

// part 2
const diffByExactlyOneChar = (s1, s2) => {
  let diff = 0
  for (let i = 0; i < s1.length; i++) {
		if (s1[i] !== s2[i]) diff++
  }
	return diff === 1
}

const findPair = (inputs) => {
  for (let i = 0; i < inputs.length - 1; i++) {
    let others = inputs.slice(i + 1)
    let id = inputs[i]
    others.forEach(oId => {
      if(diffByExactlyOneChar(id, oId)) return [id, oId]
    })
  }
}

const getCommonLetters = (s1, s2) => {
  let index = 0
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      index = i
      break
    }
  }
  return s1.splice(index, 1)
}

let answer = getCommonLetters.apply(null, findPair(inputs))

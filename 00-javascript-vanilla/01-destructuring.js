console.log('############')
const person = {
  firstName: 'yoshi',
  age: 30,
  favColor: 'green',
}

const { firstName, age, favColor } = person

// const firstName = person.firstName
// const favColor = person.favColor

console.log('firstName, favColor: ', firstName, favColor)

console.log('############')

const nums = [7, 8, 3, 5, 2]

const [a, b, c, d, e] = nums

console.log('a, b, c, d, e: ', a, b, c, d, e)

console.log('############')

const getCalculationsObject = (a, b) => {
  return {
    sum: a + b,
    diff: Math.abs(a - b),
    product: a * b,
  }
}

// In Objects the order doesnt matter
const { sum, diff, product } = getCalculationsObject(5, 3)
console.log('sum: ', sum)
console.log('diff: ', diff)
console.log('product: ', product)

console.log('############')

const getCalculationsArray = (a, b) => {
  return [a + b, Math.abs(a - b), a * b]
}

// In Arrays the order matters, because we are not using names
const [sum2, diff2, product2] = getCalculationsArray(5, 3)

console.log('sum: ', sum)
console.log('diff: ', diff)
console.log('product: ', product)

console.log('############')

const doSomething = ({ name, age }) => {
  console.log(name, age)
}

doSomething({ name: 'elfgod', age: 35 })

const ninjas = ['shaun', 'yoshi', 'mario', 'peach']

const formatNinjas = () => {
  let val = ''
  // ninjas.forEach((ninja) => (val += ninja + ', '))
  ninjas.forEach((ninja) => console.log((val += ninja + ', ')))
}

const greet = () => {
  console.log(ninjas[0] + ' says hello')
}

export { ninjas, formatNinjas }

export default greet

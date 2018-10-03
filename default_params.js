const multiplyArr = ({ multiplier = 1, arr = [], ...rest_props }, ...rest_args) => {
  console.log('rest_props', rest_props)
  console.log('rest_props', rest_args)
  return arr.map(e => e * multiplier)
}
console.log(multiplyArr({arr: [2, 3, 4], multiplier: 2, x: 2, y: 3 }, 'arg2', 'arg4'))

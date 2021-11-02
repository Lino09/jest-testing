function stringLength(string) {
  if(string.length < 1 || string.length > 10) {
   throw new Error('out of range')
  }
  return string.length
}

function reverseString(string) {
  return string.split('').reverse().join('')
}

function capitalizer(string){
  string = string.split('')
  string[0] = string[0].toUpperCase()
  return string.join('')
}

class SimpleCalculator {
  add = (num1,num2) => num1 + num2
  less = (num1,num2) => num1 - num2
  divide = (num1,num2) => num1 / num2
  multiply = (num1,num2) => num1 * num2
}

module.exports = {stringLength, reverseString, capitalizer, SimpleCalculator};
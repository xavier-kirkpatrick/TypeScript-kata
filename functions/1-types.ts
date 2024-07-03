// getGreeting should return a string containing
// 'Hello ' and the contents of `name`
export function getGreeting(name: string) {
  return `Hello ${name}`
}
getGreeting('human')

// getFullName should return a string containing the contents
// of `firstName` and the contents of `lastName`
export function getFullName(firstName: string, lastName: string) {
  return `${firstName} ${lastName}`
}

// addNumbers should return the sum of the two parameters
export function addNumbers(a: number, b: number) {
  return a + b
}

// bottlesOfBeerOnTheWall should return a string containing
// the number of bottles of beer on the wall, but!
// if the number of bottles is 0, it should return 'No more bottles of beer on the wall'
export function bottlesOfBeerOnTheWall(a: number) {
  if (a === 0) {
    return 'No more bottles of beer on the wall'
  } else {
    return `${a} bottles of beer on the wall`
  }
}

// printGreeting should not return a value,
// instead it should console.log a string containing
// 'Hello name'
export function printGreeting(name: string) {
  console.log(`Hello ${name}`)
}

// ----------- OPTIONAL PARAMS -----------

// sumFrame accepts two balls and returns the sum of the two numbers
// sometimes there may be a third ball, if there is, add it to the sum
export function sumFrame(a: number, b: number, c?: number) {
  if (c) {
    return a + b + c
  } else {
    return a + b
  }
}

// greetFullName should return a string containing the full name
// including middle name if it exists
export function greetFullName(
  firstName: string,
  lastName: string,
  middleName?: string
) {
  if (middleName) {
    return `Hello ${firstName} ${middleName} ${lastName}`
  } else {
    return `Hello ${firstName} ${lastName}`
  }
}

// ----------- UNIONS -----------

// addNumbersAndStrings accepts two arguments that can be either a number or a number inside a string
// the sum of the two arguments should be returned as a number regardless of their original type
export function addNumbersAndStrings(a: string | number, b: string | number) {
  if (typeof a === 'string' || typeof b === 'string') {
    return Number(a) + Number(b)
  } else {
    return a + b
  }
}

// fizzbuzz accepts a number and returns a string or number
// if the number is divisible by 3, return 'fizz'
// if the number is divisible by 5, return 'buzz'
// if the number is divisible by 3 and 5, return 'fizzbuzz'
// otherwise, return the original number
export function fizzbuzz(a: number): string | number {

  if (a % 3 === 0 && a % 5 === 0) {
    return "fizzbuzz"
  }
  else if (a % 3 === 0) {
    return "fizz"
  }
  else if (a % 5 === 0) {
    return "buzz"
  }
  else {
    return a
  }
}

// ----------- TYPE ALIASES -----------

type StringOrNumber = string | number

// sumMatchingType accepts two arguments that can be either a number or a string
// if both arguments are numbers, the sum of the two arguments should be returned as a number
// if either argument is a string, the two arguments should be summed together and returned as a string
export function sumMatchingType(a: StringOrNumber, b: StringOrNumber){
  
  if ((typeof a === 'number' && typeof b === 'string') || (typeof a === 'string' && typeof b === 'number')) {
    const aToNum = typeof a === 'string' ? parseInt(a) : a 
    const bToNum = typeof b === 'string' ? parseInt(b) : b
    const addNums = aToNum + bToNum
    return addNums.toString()
  }
  else if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }
  else if (typeof a === 'string' && typeof b === 'string') {
    const add = parseInt(a) + parseInt(b)
    return add.toString()
  }
  else {
    return 0
  }
}

// getNextTrafficLightColour accepts the current colour of a traffic light colour and returns the next colour
// the light sequence is green -> yellow -> red -> green -> yellow -> (etc)
// Remember to use a type alias!
export function getNextTrafficLightColour(): void {}

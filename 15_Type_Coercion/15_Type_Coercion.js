console.log('5' + 5)


// Output:
// 55


//---------------------------------------

// here '5' is a string. but it  gets converted into number and it 
// subtracted it by another number. so u will get 0

console.log('5' - 5)

// Output:
// 0


// NOTE: TYPE COEROCION - a String, a number, a Boolean
// for strings and numbers its not recommended but for boolean values it is
// used mostly


//---------------------------------------


// NOte:Double Equals ( == ) checks for value equality only. It inherently 
// does type coercion. This means that before checking the values, 
// it converts the types of the variables to match each other.
// On the other hand, Triple Equals ( === ) does not perform type coercion.


console.log(5 === 5)

// Output:
// true

//---------------------------------------

console.log('5' === 5)

// Output:
// false

//---------------------------------------


console.log(5 == 5)

// Output:
// true

//---------------------------------------

console.log('5' == 5)
// Output:
// true


//----------------------------------------


// to check the type of given value we can use type of aperator

console.log(typeof(123))

// Output:
// number



//  OR OR OR


const type  = typeof 123
console.log(type)

// Output:
// number

//----------------------------------------

const type1  = typeof {}
console.log(type1)

// Output:
// object


//----------------------------------------

const type2  = typeof []
console.log(type2)

// Output:
// object


//--------------------------------------
// Note:
// when we add boolean it coverts true to number 1, and false to number 0.
// so, false(0) + 12 = 12

const value3 = false + 12
const type3 = typeof value3
console.log(type3)
console.log(value3)

// Output:
// number
// 12


// Note:
// when we add boolean it coverts true to number 1, and false to number 0.
// so, ture(1) + 12 = 13


const value4 = true + 12
const type4 = typeof value4
console.log(type4)
console.log(value4)


// Output:
// number
// 13
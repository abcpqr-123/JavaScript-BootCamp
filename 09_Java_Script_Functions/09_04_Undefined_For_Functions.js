
let square = function (num){
    console.log(num)
}

square()

// Output:
// undefined


// You will get undefined if u try to do something with the return value
// from a function but that function does not return anything.

let square = function (num){
    console.log(num)
}
  let result = square()
   console.log(result)


// Output:
// undefined
// undefined


// reassign the value andefined:

let age = 27 

age = undefined

console.log(age)

// Output:
// undefined

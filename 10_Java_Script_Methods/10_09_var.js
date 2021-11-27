var firstName = 'Surya'
firstName = 'Soorya'

console.log(firstName)

// Output:
// Soorya


// One advantage of var over -let- and -const- is we can 
// redeclare a variable even if it already exists or already created.


// But its a big PerformanceObserverEntryList. beacuse, 

// if u r  wreiting a big program and u used two variables 
// of same namer, then java script will not show any error,
// but it will eccept it.


// if u use let and const it will show error and it crashes the program.
// so u will get to know about it



var firstName = 'abc'
console.log(firstName)


// Output:
// Soorya
// abc


//------------------------------------------------------------------


// var creates function scoped varibles, 
// but its always better to use  BLOCK SCOPED variables:

// ex:

if (10 === 10){
    var firstName = 'Surya'
}

console.log(firstName)   // u can access firstName outside the curly braces.

// Output:
// Surya
//---------------------------


if (10 === 10){
    const firstName = 'Surya'
}             // u cannot access firstName out side curly brackets

console.log(firstName)  


//------------------------------



const setName = function(){
    var secondName = 'Surya'
}

setName()
console.log(secondName)

// Output:
// secondName is not defined


//---------------------------------------------------




// if we try access var variable before its declared we get 
// undefined. if we try to access let or const variables before its declared 
// we get a reference error.
// so its better to use let and const istead of var.





age = 10
console.log(age)
var age 

// output:
// 10

// When u write the above program using var,
// it will be considered as:
// var age 
// age = 10
// console.log(age)

// so without printing any error code will get executed.

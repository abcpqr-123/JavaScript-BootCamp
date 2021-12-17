// const add = function (a,b){
//     console.log(arguments)
// }

// add(11, 22, 33, 44)

// // Output:
// // [Arguments] { '0': 11, '1': 22, '2': 33, '3': 44 }



// const add = function(){
//     return arguments[0] + arguments[1]

// }

// console.log(add(11, 22, 33, 44))


// // Output:
// // 33



// // NOTE: U CANNOT USE THE ARROW FUNCTIONS ALL THE Time
// //       BEACUSE THEY ALSO HAVE SOME LIMITATIONS 
      
// //       FOR EXAMPLE:

// //       ARROW FUNCTIONS DONT BIND ARGUMENTS 

// //       ARROW FUNCTIONS DONT BIND this

// //       AND 
      
// //       ARROW FUNCTIONS COME WITH ADVANCE SHORTHAND SINTAX


// //   so when we are creating functions, methods on object properties, 
// //   we want to stick with regular functions and not with arrow functions.
// //   in this case arrow functions are the bad candidates

// //----- --------- 



// // note: arguments only exists in regular functions. There is no local 
// //        variable in arrow functions

// // ex:

// const add = () => {
//     return arguments[0] + arguments[1]
// }

// console.log(add(11, 22, 33, 44))


// // Output: Error:
// // [object Object]function require(path) {
// //     return mod.require(path);
// //   }



// //----- --------

// // note: Arrow functions dont bind their this value


// // if u use regular functions then the bellow code runs but if u use 
// // arrow functions then this code will not run and will throw error


// const car = {
//     color: 'Red',
//     getSummary: function (){
//         return `The car is ${this.color}`
//     }
// }

// console.log(car.getSummary())


// // Outut:
// // The car is Red



// const car = {
//     color: 'Red',
//     getSummary: () => {
//         return `The car is ${this.color}`
//     }
// }

// console.log(car.getSummary())

// // Output:
// // The car is undefined
// // the obove error says that it is trying to find something
// // which does not exists



// //-------------------------


// //now , there is an alternative way to setting up a method:

// //reugular way:


// const car = {
//     color: 'Red',
//     getSummary: function (){
//         return `The car is ${this.color}`
//     }
// }

// console.log(car.getSummary())


// // Alternative way: remove function and colun

// const car = {
//     color: 'Red',
//     getSummary (){
//         return `The car is ${this.color}`
//     }
// }

// console.log(car.getSummary())


// // Output:
// // he car is Red




// const product = {
//     name: 'Influence'
// }

// console.log(product.hasOwnProperty('name'))

// // Output:
// // true

// // --------------

// const product = {
//     name: 'Influence'
// }

// console.log(product.hasOwnProperty('price'))

// // Output:
// // false


//--------------------------------


// const product = {
//     name: 'Influence'
// }

// // code to override the default behavior of the bellow function(hasOwnProperty):

// Object.prototype.hasOwnProperty= () => 'This is the new Function'
// // Output:
// // This is the new Function
// // { name: 'Influence' }

// // hasOwnProperty
// console.log(product.hasOwnProperty('hasOwnProperty'))
// console.log(product)

// // Output:
// // false
// // { name: 'Influence' }


// // -------------------------------------------




// const product = {
//     name: 'Influence'
// }


// Object.prototype.someNewMethod = () => 'This is the new Function'

// console.log(product.someNewMethod())
// console.log(product)


// // Output:
// // This is the new Function
// // { name: 'Influence' }



// // --------------------------------------------




// const product = new Object()

// product.name = 'Rest'

// Object.prototype.someNewMethod = () => 'This is the new Function'

// console.log(product.someNewMethod())
// console.log(product)


// // Output:
// // This is the new Function
// // { name: 'Rest' }




// // -------------------------------



// const product = new Object({
//     name: 'The war of Art'
// })


// Object.prototype.someNewMethod = () => 'This is the new Function'

// console.log(product.someNewMethod())
// console.log(product)


// // Output:
// // This is the new Function
// // { name: 'The war of Art' }



// //-----------------------------------------




// // PRIMITVES AND OBJECTS PART = 2


// // Note: there are 5 Promitive values in javascript

// // and they are:
// // Stirng, number, boolean, number, undefined


//    // Object: myObject --> Object.prototype --> null
//    // Array: myArray --> Array.prototype --> Object.prototype  --> null
//    // Prototype chain for a function:
//    // Function: myFunc --> Function.prototype --> Object.prototype --> null
//    // StringL myString --> Function.prototype --> Object.prototype --> null
//    // Number : myNumber --> Number.prototype --> Object.prototype --> null
//    // Boolean: myBoolean --> Boolean.protopye --> Object.prototype --> null



// //    NOTE: ARRAY IS A COSTOMISED VERSON OF OBJECT

//    const team = ['Luke', 'Maddison']
//    console.log(team)


// //    Output: --> console
// //    ﻿
// // app.js:128 
// // Array(2)
// // 0: "Luke"
// // 1: "Maddison"
// // length: 2
// // [[Prototype]]: Array(0)



//    const team = ['Luke', 'Maddison']
//    console.log(team.hasOwnProperty('length'))

// //    Output:
// //    true

// // Note: we do get true beacuse array have length property.
      

// // ------------------------------------

// const team = ['Luke', 'Maddison']
// console.log(team.hasOwnProperty('filter'))


// // Note: we do get false beacuse 
// // arrays have filter, but it comes from array.prototype
// // they are not on the array itself.

// // Output:
// // false




// // // -----------------------------------



// // there is also a constructor function for arrays. we can also 
// // use them to generate array, not using the literal Syntax that 
// // looks a little bit like this new array, and then we just pass 
// // in our array.

// const team = new Array(['Luke', 'Madisson'])
// console.log(team.hasOwnProperty('filter'))


// Output:
// false



// // ---------------------------------


//    // Prototype chain for a function:
//    // Function: myFunc --> Function.prototype --> Object.prototype --> null



// const getScore = () => 1
//     console.log(getScore)





// //----------------------------------------------------------------


// // Strings

//    // StringL myString --> Function.prototype --> Object.prototype --> null


// const product = 'computer'
// console.log(product)

// // Output:
// // computer


// const otherProduct = new String('Phone')
// console.log(otherProduct)

// // Output:
// // String {'Phone'}
// // 0: "P"
// // 1: "h"
// // 2: "o"
// // 3: "n"
// // 4: "e"
// // length: 5
// // [[Prototype]]: String
// // [[PrimitiveValue]]: "Phone"



//--------------------------------------



//    // StringL myString --> Function.prototype --> Object.prototype --> null







//------------------------------------------------------
//-------------------------------------------------------
//------------------------------------------------------
//-------------------------------------------------------




// Hangman PART-3


const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const game1 = new Hangman ('Cat', 2)

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.getStatusMessage()


window.addEventListener('keypress', function (e){
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.getPuzzle()
    guessesEl.textContent = game1.getStatusMessage()
    
    
})

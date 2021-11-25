// toFixed --> to get limited nuumber of numbers

let num = 103.941

console.log(num.toFixed(1))
// Output:
// 103.9

console.log(num.toFixed(2))
// Output:
// 103.94



//----------------------




// MATH


let number = 103.941

console.log(Math.round(number))
console.log(Math.floor(number))
console.log(Math.ceil(number))


// Output:
// 104
// 103
// 104




//---------------------------------------------------------------






// Math.random

let randomNumm = Math.random()
console.log(randomNumm)


// Output:
// 0.7098907411367059
// 0.7986884079015455


//-----------      ----------------            --------

let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomNum)


// Output:
// 10
// 20
// 17
// 14







//-----------------------------------------------------------


// guess the number and compare game.

let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    return guess === randomNum

}

console.log(makeGuess(1))

// Output:
// false
// false
// true
// false
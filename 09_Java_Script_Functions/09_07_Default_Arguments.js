// Default Arguments


// let getScoreText = function(name, score = 0){
//     console.log(name)
//     console.log(score)
// }

// getScoreText()


// Output:
// undefined
// 0


//----------------------------------------------------------------------




// let getScoreText = function(name = 'Anonymous', score = 0){
//     console.log(name)
//     console.log(score)
// }

// getScoreText()

// Output:
// Anonymous
// 0


//-------------------------------------------------------------------------


// Printing the above function using 'return'

// let getScoreText = function (name = 'Anonymous', score = 0){
//     return 'Name: ' + name + ' - Score: ' + score
// }

// let scoreText = getScoreText()
// console.log(scoreText)


// Output:
// Anonymous
// 0


//-------------------    -----------------   -----------------
// when name and score are provided.... -->


// let getScoreText = function (name = 'Anonymous', score = 0){
//     return 'Name: ' + name + ' - Score: ' + score
// }

// let scoreText = getScoreText('Surya', 100)
// console.log(scoreText)

// Output:
// Name: Surya - Score: 100


//---------------------------------------------------------------


//V.IMP    ---->> ONLY SCORE NOT NAME: 


let getScoreText = function (name = 'Anonymous', score = 0){
    return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 100)
console.log(scoreText)


// Output:
// Name: Anonymous - Score: 100


//------------------------------------------------------------------

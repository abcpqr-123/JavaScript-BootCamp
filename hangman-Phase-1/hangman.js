// // word game hangman:
// // its a word game where u have to gusess the correct word
// // if the word is samall then u will get less number of chance 
// // to guess the word. If the word is long or difficult then u will get more 
// // chance to guess the word:

// // for example: 
// // cat is a small word --> so only two chance
// // New Jersey is little long --> so the player will get more chance


// // if u guess the word then u will win
// // if u fail to guess all the words after maximum attempt u loose



// const Hangman = function(word, remainingGuesses){
//     this.word = word
//     this.remainingGuesses = remainingGuesses
// }


// const game1 = new Hangman ('Cat', 2)
// console.log(game1)

// const game2 = new Hangman ('New Jersey', 4)
// console.log(game2)


// // Output:
// // Hangman { word: 'Cat', remainingGuesses: 2 }
// // Hangman { word: 'New Jersey', remainingGuesses: 4 }



// //-----------------------------------------




// // the bellow code prints the letter which we want to show and 
// // for which we dont want to print it will show StaticRange

// // for example:
// // for the word cat
// // it shows c** becuse we have given that -->     this.guessedLetters = ['c']
// // if u give     this.guessedLetters = ['c', 't']
// // then it will show, c*t



// const Hangman = function(word, remainingGuesses){
//     this.word = word.toLowerCase().split('')
//     this.remainingGuesses = remainingGuesses
//     this.guessedLetters = ['c']
// }

// Hangman.prototype.getPuzzle = function (){
//     let puzzle = ''

//     this.word.forEach((letter) => {
//         if(this.guessedLetters.includes(letter) || letter === ' '){
//             puzzle = puzzle + letter
//         }else{
//             puzzle = puzzle + '*'
//         }
//     })
//     return puzzle
// }
// const game1 = new Hangman ('Cat', 2)
// console.log(game1.getPuzzle())

// const game2 = new Hangman ('New Jersey', 4)
// console.log(game2.getPuzzle())


// // Output:
// // c**
// // *** ******




// //----------------------------------------------------------------





// const Hangman = function(word, remainingGuesses){
//     this.word = word.toLowerCase().split('')
//     this.remainingGuesses = remainingGuesses
//     this.guessedLetters = []
//     this.status = 'playing'
// }

// Hangman.prototype.calculateStatus = function(){
//     // // Using method --> every()
//     const finished = this.word.every((letter) => this.guessedLetters.includes(letter))


//     // // CHECKING USING FILTERS -->
//     // const lettersUnguessed = this.word.filter((letter) => {
//     //     return !this.guessedLetters.includes(letter)
//     // })
//     // const  finished = lettersUnguessed.length === 0



//     // // ONE OF THE WAYS OF CHECKING  --> 
//     // let finished = true

//     // this.word.forEach((letter) => {
//     //     if(this.guessedLetters.includes(letter)){        
//     //     }else{
//     //         finished = false
//     //     }
//     // })

//      if (this.remainingGuesses === 0){
//          this.status = 'failed'
//      } else if (finished){
//          this.status = 'finished'
//      } else {
//          this.status = 'playing'
//      }
// }


// Hangman.prototype.getPuzzle = function (){
//     let puzzle = ''

//     this.word.forEach((letter) => {
//         if(this.guessedLetters.includes(letter) || letter === ' '){
//             puzzle = puzzle + letter
//         }else{
//             puzzle = puzzle + '*'
//         }
//     })
//     return puzzle
// }

// Hangman.prototype.makeGuess = function (guess){
//     guess = guess.toLowerCase()
//     const isUnique = !this.guessedLetters.includes(guess)
//     const isBadGuess = !this.word.includes(guess)

//     if(isUnique){
//         this.guessedLetters.push(guess)
//     }

//     if(isUnique && isBadGuess){
//         this.remainingGuesses--
//     }
//     this.calculateStatus()
// }

// // const puzzleEl = document.querySelector('#puzzle')
// // const guessesEl = document.querySelector('#guesses')
// // const game1 = new Hangman ('Cat', 2)

// // puzzleEl.textContent = game1.getPuzzle()
// // guessesEl.textContent = game1.remainingGuesses


// // window.addEventListener('keypress', function (e){
// //     const guess = String.fromCharCode(e.charCode)
// //     game1.makeGuess(guess)
// //     puzzleEl.textContent = game1.getPuzzle()
// //     guessesEl.textContent = game1.remainingGuesses
    
// // })





// ------------------------------------------------------

// HANGMAN PART - 4




const Hangman = function(word, remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.calculateStatus = function(){
    // // Using method --> every()
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter))


    // // CHECKING USING FILTERS -->
    // const lettersUnguessed = this.word.filter((letter) => {
    //     return !this.guessedLetters.includes(letter)
    // })
    // const  finished = lettersUnguessed.length === 0



    // // ONE OF THE WAYS OF CHECKING  --> 
    // let finished = true

    // this.word.forEach((letter) => {
    //     if(this.guessedLetters.includes(letter)){        
    //     }else{
    //         finished = false
    //     }
    // })

     if (this.remainingGuesses === 0){
         this.status = 'failed'
     } else if (finished){
         this.status = 'finished'
     } else {
         this.status = 'playing'
     }
}

Hangman.prototype.getStatusMessage = function () {
    if (this.status === 'playing'){
        return `Guesses left: ${this.remainingGuesses}`
    } else if (this.status === 'failed'){
        return `Nice try! The word was "${this.word.join('')}".`
    } else {
        return `Great work! You guessed the word`
    }
}
Hangman.prototype.getPuzzle = function (){
    let puzzle = ''

    this.word.forEach((letter) => {
        if(this.guessedLetters.includes(letter) || letter === ' '){
            puzzle = puzzle + letter
        }else{
            puzzle = puzzle + '*'
        }
    })
    return puzzle
}

Hangman.prototype.makeGuess = function (guess){
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    
    if (this.status !== 'playing'){
        return
    }

    if(isUnique){
        this.guessedLetters.push(guess)
    }

    if(isUnique && isBadGuess){
        this.remainingGuesses--
    }
    this.calculateStatus()
}

// const puzzleEl = document.querySelector('#puzzle')
// const guessesEl = document.querySelector('#guesses')
// const game1 = new Hangman ('Cat', 2)

// puzzleEl.textContent = game1.getPuzzle()
// guessesEl.textContent = game1.remainingGuesses


// window.addEventListener('keypress', function (e){
//     const guess = String.fromCharCode(e.charCode)
//     game1.makeGuess(guess)
//     puzzleEl.textContent = game1.getPuzzle()
//     guessesEl.textContent = game1.remainingGuesses
    
// })
   










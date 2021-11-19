let name = 'Surya'
let age = 12

console.log(`Your name is: ${name}. Your age is: ${age}` )
// console.log("Your name is: "+ name ) --> regulat way\

// Output:
// Your name is: Surya. Your age is: 12
// Your name is: Surya



//--------------------------------------------------------------------------



let getScoreText = function(name = 'Anonymous', score = 0){
    return `Name = ${name} - Score: ${score}`
}

let Score = getScoreText('Surya', 10)
console.log(Score)


// Output:
// Name = Surya - Score: 10

//----------------------------------------------------



let getTip = function (total, tipPercent = 0.2){
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}`
} 


let tip = getTip (40, 0.25)
console.log(tip)


// Output:
// A 25% tip on $40 would be $10




//---------------------------or-----------------------------------
// You can also do the calculations in the curly brackets only if u want.



let getTip = function (total, tipPercent = 0.2){
 
        return `A ${tipPercent * 100}% tip on $${total} would be $${total * tipPercent}`
    } 
    
    
    let tip = getTip (40, 0.25)
    console.log(tip)
    
    // Output:
    // A 25% tip on $40 would be $10
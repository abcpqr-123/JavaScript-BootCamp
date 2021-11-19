
// WITOUT using FUNCTIONS


let maxMarks = 20
let marks = 15

let percent = (marks/maxMarks) * 100

if (percent<100 && percent >= 90){
    console.log(`You got  A grade (${percent}%)!`)
} else if (percent<=89 && percent >= 80){
    console.log(`You got  B grade (${percent}%)!`)
} else if (percent<=79 && percent >= 70){
    console.log(`You got  C grade (${percent}%)!`)
} else if (percent<=69 && percent >= 60){
    console.log(`You got  D grade (${percent}%)!`)
}else{
    console.log(`You got  F grade (${percent}%)!`)
}


// Output: Note as you cange the values in maxMarks and marks u will 
//         get different outputs
// You got  A grade (95%)!
// You got  F grade (56.00000000000001%)!
// You got  C grade (75%)!






//----------------------------------------------------------------------








// By using FUNCTIONS:


let maxMarks = 20
let marks = 15

let gradeCal = function(marks, maxMarks) {
let percent = (marks/maxMarks) * 100


if (percent<100 && percent >= 90){
    return`You got  A grade (${percent}%)!`
} else if (percent<=89 && percent >= 80){
    return`You got  B grade (${percent}%)!`
} else if (percent<=79 && percent >= 70){
    return`You got  C grade (${percent}%)!`
} else if (percent<=69 && percent >= 60){
    return`You got  C grade (${percent}%)!`
} else {
    return`You got  F grade (${percent}%)!`
}
}
let result = gradeCal(15, 20)
console.log(result)

// Output:
// You got  C grade (75%)!







//------------------------------------------------------------







// Best way:


let gradeCal = function(marks, maxMarks) {
    let percent = (marks/maxMarks) * 100
    
    let letterGrade = ''
    
    if (percent >= 90){
         letterGrade = 'A'
    } else if (percent<=89 && percent >= 80){
         letterGrade = 'B'
    } else if (percent<=79 && percent >= 70){
         letterGrade = 'C'
    } else if (percent<=69 && percent >= 60){
         letterGrade = 'D'
    } else {
         letterGrade = 'F'
    }
      return `Your grade is ${letterGrade} (${percent}%)!`
    }

    let result = gradeCal(15, 20)
    console.log(result)


    // Output:
    // let result = gradeCal(15, 20)

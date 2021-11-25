
// Note: the only differene between the let based variables and the const
//       based variables is that --> in const based variables u cannot reasssign 
//       value.
//But u can change the objects property.

let isRaining = true

isRaining = false

console.log(isRaining)


// Output:
// false

//---------------------------------------------------




const willRain = true

willRain = false

console.log(willRain)


// Output:
// TypeError: Assignment to constant variable.


//-----------------------------------------------------



const person = {
    age: 27
}

person = {}

console.log(person)

// Output:
// SyntaxError: Identifier 'person' has already been declared




//-----------------------------------------------

//But u can change the objects property.
const person = {
    age: 27
}

person.age = 28

console.log(person)

// Output:
// { age: 28 }


//-----------------------------------------------



const gradeCal = function(marks, maxMarks) {
    const percent = (marks/maxMarks) * 100
    
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

    const result = gradeCal(15, 20)
    console.log(result)


    // Output:
    // Your grade is C (75%)!



//----------------------------------------------------------------------------




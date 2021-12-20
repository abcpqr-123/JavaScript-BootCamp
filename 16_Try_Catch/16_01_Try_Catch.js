// TRY CHATCH ERROR SYNTAX:

// try {

// }catch (e){
   
// }

// -----------------------------------------
// --------------------------------------






const getTip = (amount) => {
    return amount = .25
}

const result = getTip(true)
console.log(result)

// Output:
// 0.25

// in the above code true will be cosidered as 1 sortNotes, 1 * .25 = .25


//-----------------------------




const getTip = (amount) => {
    if(typeof amount === 'number'){
        return amount * .25
    }else{
        throw 'Argument must be a number'
    }
}

const result = getTip(true)
console.log(result)


// Output:
// Argument must be a number




//-----------------------------



// You can get the above error in a better way:



const getTip = (amount) => {
    if(typeof amount === 'number'){
        return amount * .25
    }else{
        throw Error('Argument must be a number')
    }
}

const result = getTip('test')
console.log(result)

// Output:
// Error: Argument must be a number




//---------------------------


// TRY CHATCH ERROR SYNTAX:

// try {

// }catch (e){
   
// }


// code including try catch:



const getTip = (amount) => {
    if(typeof amount === 'number'){
        return amount * .25
    }else{
        throw  Error('Argument must be a number')
    }
}

try {
   const result = getTip('test')
   console.log(result)
}catch (e){
   console.log('catch block is running.')
}

// Output:
// catch block is running.


// -   -    -   -


 const getTip = (amount) => {
        if(typeof amount === 'number'){
            return amount * .25
        }else{
            throw  Error('Argument must be a number')
        }
    }
    
    try {
       const result = getTip(10)
       console.log(result)
    }catch (e){
       console.log('catch block is running.')
    }


    // Output:
    // 2.5




//-------------------------------------------------------------------




let gradeCal = function(marks, maxMarks) {
    if (typeof marks === 'number' && typeof maxMarks === 'number'){
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
        } else {
            throw Error ('Please provide numbers only')
        }
    
    }

    try {
        const result = gradeCal(15, 20)
        console.log(result)
    } catch (e){
        console.log(e.message)
    }
    
    


    // Output:
    // Your grade is C (75%)!
    


 // -    -    -   -   - 



// -------------------------------------------------------------------

const gradeCal = function(marks, maxMarks) {
    if (typeof marks === 'number' && typeof maxMarks === 'number'){
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
        } else {
            throw Error ('Please provide numbers only')
        }
    
    }

    try {
        const result = gradeCal(15, true)
        console.log(result)
    } catch (e){
        console.log(e.message)
    }




// Output:
// Please provide numbers only


//--------------------


//  More optimzed way to print:





let gradeCal = function(marks, maxMarks) {
    if (typeof marks !== 'number' || typeof maxMarks !== 'number'){
        throw Error ('Please provide numbers only')
    }

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
    
    

    try {
        const result = gradeCal(15, 20)
        console.log(result)
    } catch (e){
        console.log(e.message)
    }


    // Output:
    // Your grade is C (75%)!
    
    

















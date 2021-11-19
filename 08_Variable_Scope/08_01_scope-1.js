//Lexical Scope (static scope)
// Global scope - Defined outside of all code blocks
// Local scope - Defined inside a code block 

// In a scope u can access variables defined in that scope, or 
// in any  part of parent/anceseter ScopedCredential.

// Global Scope (varOne)
  // local Scope (varTwo)
     // local Scope (varFour)
  // local Scope (varThree)

let varOne = 'varOne'

if(true){
    console.log(varOne)
    let varTwo = 'varTwo'
console.log(varTwo)

  if(true){
      let varFour = 'varFour'
      console.log(varFour)
  }
}

if(true){
   let varThree = 'varThree' 
   console.log(varThree)
}

console.log(varOne)


// Output:
// varOne
// varTwo
// varFour
// varThree
// varOne
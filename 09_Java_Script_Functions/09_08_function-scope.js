// Global scope {convertFahreheitToCelsius, tempOne, tempTwo}
  // local scope {fahrenheit, celsius}
    // Local scope {isFreezing}


let convertFahreheitToCelsius = function (fahrenheit){
    let celsius = (fahrenheit - 32 ) *  (5/9)
   
    if (celsius <= 0){
        let isFreezing = true
    }
    return celsius
}

let tempOne = convertFahreheitToCelsius(32)
let tempTwo = convertFahreheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)

// Output:
// 0
// 20
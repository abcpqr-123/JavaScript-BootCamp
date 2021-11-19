let temp = 32

let isFreezing = temp <= 32

if (isFreezing) {
    console.log('Is freezing.')
}

// Output:
// Is freezing


//-----------------------------------------------------------------

//Get rid of isFreezing statement:

// Optimized way: 
let temp = 32

if (temp <=32 ) {
    console.log('Is freezing.')
}


// Output:
// Is freezing.


//--------------------------------------------------------------------------


let temp = 180

if (temp <= 32 ) {
    console.log('Is freezing.')
}


if (temp >= 110 ) {
    console.log('Its too hot Outside!')
    console.log('Testing124')
}

// Output:
// Its too hot Outside!
// Testing124



//--------------------------------------------------------------------------



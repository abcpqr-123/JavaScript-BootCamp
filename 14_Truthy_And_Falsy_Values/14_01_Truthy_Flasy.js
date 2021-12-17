const produncts = ['']
const produnct = produncts[0]

if (produnct !== undefined){
    console.log('Product found')
}else{
    console.log('product not found')
}


// Output:
// Product found

//---------------------------------------------------------



const produncts = ['']
const produnct = produncts[0]

// Truthy - values that resolve to true in boolean context 
// falsy - values that resolve to false in boolean context


if  ('testing'){
    console.log('Product found')
}else{
    console.log('product not found')
}

// in the bove code, in the if codition we can put true or false, instead of that if
// u put a String, the code will not crash. JavaScript will see that we have 
// a non-boolean value in side of a place where it usually expects a boolean, 
// and it will try its best to convert this string into a boolean. and this is where 
// truthy and falsy definitions comes to Play.

// when u run the program you will not get a big error or something sying that
// used string instead of boolan. 
// but it will show 'Product found'
// so learly the string 'testing' is considered as truthy value by JavaScript



// NOTE: except false, 0, empty, null, undefined everything is truthy.


//-  -  -    -     - 

const produncts = ['']
const produnct = produncts[0]

// falsy values - false, 0, empty, null, undefined NaN(Not a Number)

// so, false, 0, empty, null, undefined NaN(Not a Number) are the falsy values, meanins
// if any of these were palced in boolean context they will be considered
// or, they will be eqeal to false.

// Ex: in the bellow code also same thing happens. beacuse we have given undefined
//     so, 'else' code will run printing 'product not defined'

if  (undefined){
    console.log('Product found')
}else{
    console.log('product not found')
}



//--------------------

// so everything except false, 0, empty, null, undefined, NaN(Not a Number) is true including 
// ARRAYS AND OBJECTS, even if they dont have any properties or items in the 
// array.

const produncts = ['']
const produnct = produncts[0]

if  ({}){
    console.log('Product found')
}else{
    console.log('product not found')
}

// Output:
// Product found

const produncts = ['']
const produnct = produncts[0]

if  ([]){
    console.log('Product found')
}else{
    console.log('product not found')
}
// Output:
// Product found


// -------------------------------------------------------------------
// -------------------------------------------------------------------


const products = []
const product = products[0]

if  (product){
    console.log('Product found')
}else{
    console.log('product not found')
}

// Output:
// Product not found


//---


const products = [{name: 'Computer Mouse'}]
const product = products[0]

if  (product){
    console.log('Product found')
}else{
    console.log('product not found')
}

// Output:
// Product found


//------------------------------------


// NaN - (Not a Number)

// Example:
// 1/0


//------------------------------------




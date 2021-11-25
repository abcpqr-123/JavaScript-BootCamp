let name = 'Surya'

// length of the string:

console.log(name.length)

// Output:
// 5


//----------- ---------- -------      

console.log(name.toUpperCase())

// Output:
// SURYA



//----------- ---------- -------

console.log(name.toLowerCase())

// Output:
// surya


//----------- ---------- -------



// includes

let password = 'password'

console.log(password.includes('password'))

// true



let passwords = 'abc1213'

console.log(passwords.includes('password'))


// Output:
// false



//---------       ----------    ------------   


let namee = ' Surya  '
console.log(namee.trim())



// Output:
// Surya


//--------------    -------------  -------- 



// if the length of the password is greater then 8 AND  if it does not
// contain the word password then only print true else print false.


let isValidPassword = function(password){
    if (password.length > 8  &&  !password.includes('password')){
        return true
    }else{
        return false
    }
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('asdfp!@#%$'))
console.log(isValidPassword('assdfpassword'))

// Output:
// false
// true
// false


//``````````` ANOTHER WAY ````````````````



let isvalidPassword = function(Password){
    return Password.length > 8  &&  !Password.includes('Password')
}

console.log(isvalidPassword('asdfp'))
console.log(isvalidPassword('asdfp!@#%$'))
console.log(isvalidPassword('assdfPassword'))



// Output:
// false
// true
// false
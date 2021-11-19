let isAccountBlocked = true

if (isAccountBlocked){
    console.log('Account Blocked')
}else{
    console.log('Account is active!')
}


// Output:
// Account Blocked

//-------------------      --------------           ---------------

let isAccountBlocked = false

if (isAccountBlocked){
    console.log('Account Blocked')
}else{
    console.log('Account is active!')
}


// Output:
// Account is active!



//--------------------------------------------------


let isAccountBlocked = false
let userRole = 'admin'


if(isAccountBlocked){
    console.log('Account Blocked!')
} else if (userRole === 'admin'){
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}


// Output:
// Welcome Admin


//-----------        --------------------          -------------




let isAccountBlocked = true
let userRole = 'admin'


if(isAccountBlocked){
    console.log('Account Blocked!')
} else if (userRole === 'admin'){
    console.log('Welcome Admin')
} else {
    console.log('Welcome')
}


// Output:
// Account Blocked!


//--------------------------------------------------------
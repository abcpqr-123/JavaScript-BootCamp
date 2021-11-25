

let myAccount = {
    name: 'Surya Gaonkar',
    expenses : 0,
    income: 0
}

let addExpense  = function(account, amount){
    account.expenses = account.expenses + amount
    console.log(account)
}

addExpense(myAccount, 2.50)
console.log(myAccount)   


// Output:
// { name: 'Surya Gaonkar', expenses: 2.5, income: 0 }
// { name: 'Surya Gaonkar', expenses: 2.5, income: 0 }




// for 2 different console.log we are getting the same output. that is beacuse, when
// we chage the values, it will get relflected at every console.log





//--------------------------------------------------------------------------




let myAccount = {
    name: 'Surya Gaonkar',
    expenses : 0,
    income: 0
}

let addExpense  = function(account, amount){
   account = {}
    console.log(account)
}

addExpense(myAccount, 2.50)
console.log(myAccount) 


// Output:
// {}
// { name: 'Surya Gaonkar', expenses: 0, income: 0 }






//----------------------------------------------------------------------





// When we pass an object into a function we can manupulate its properties. if we a
// assign a new value to that argument we break this binding compleately. Now account
// does not point the same thing which my account did. so i can't use the assignment 
// operator in myAccount to clear myAccount and set it to something new.




let myAccount = {
    name: 'Surya Gaonkar',
    expenses : 0,
    income: 0
}

let addExpense  = function(account, amount){
   account = 1
    console.log(account)
}

addExpense(myAccount, 2.50)
console.log(myAccount) 




//-------------------------------------------------------------------------





let myAccount = {
    name: 'Surya Gaonkar',
    expenses : 0,
    income: 0
}


let otherAccount = myAccount
otherAccount.income = 1000
otherAccount = {}

let addExpense = function (account, amount){
    account.expenses = account.expenses + amount
}

addExpense(myAccount, 2.50)
console.log(myAccount)



// Output:
// { name: 'Surya Gaonkar', expenses: 2.5, income: 1000 }
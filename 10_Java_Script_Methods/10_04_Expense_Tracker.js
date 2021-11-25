let myAccount = {
    name : 'Surya Gaonkar',
    expenses: 0,
    income: 0
}

let addExpense = function(T, amount){
    T.expenses = T.expenses + amount
}

let addIncome = function(T, income){
    T.income = T.income + income
}

let resetAccount = function(T){
    T.expenses = 0
    T.income = 0
}

let getAccountSummary = function (T) {
    let balance = T.income - T.expenses
    return `Account for ${T.name} has $${balance}. $${T.income} in income. $${T.expenses} in expenses.`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))


// Output:
// Account for Surya Gaonkar has $1837.5. $2000 in income. $162.5 in expenses.
// Account for Surya Gaonkar has $0. $0 in income. $0 in expenses.




//-------------------------------------------------------------------------------




let SuryaAccount = {
    name: 'Surya',
    Expenses: 0,
    income: 0
}

let addExpenses = function(T, amount){
    T.Expenses = T.Expenses + amount
}

let addIncome = function(T, income){
    T.Income = T.income + income
}

let resetAccount = function(T){
    T.Expenses = 0
    T.income = 0
}

let getAccountSummary = function(T){
    let leftAmount = T.income - T.Expenses
    return  `Account for ${T.name} has $${leftAmount}. $${T.income} in income. $${T.Expenses} in expenses.`
}

          
addIncome(SuryaAccount, 1000)
addExpenses(SuryaAccount, 50)
addExpenses(SuryaAccount, 150)
console.log(getAccountSummary(SuryaAccount))
resetAccount(SuryaAccount)
console.log(getAccountSummary(SuryaAccount))



// Output:
// Account for Surya has $-200. $0 in income. $200 in expenses.
// Account for Surya has $0. $0 in income. $0 in expenses.
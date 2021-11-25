let myBook = {
    title: 'New York',
    author: 'Surya',
    pageCount: 600,
    year: 2021
}


console.log(myBook.pageCount)
console.log(`${myBook.title} was written by ${myBook.author}, in ${myBook.year}`)

// Output:
// 600
// New York was written by Surya, in 2021

//------------        -------------              ---------------



// changing the value:

myBook.title = 'Texis'
console.log(`${myBook.title} was written by ${myBook.author}, in ${myBook.year}`)

// Output:
// Texis was written by Surya, in 2021







//---------------------------------------------------------










myData = {
    name: 'Surya',
    age: 20,
    location: 'United States'
}

console.log(` ${myData.name} is ${myData.age}. He lives in ${myData.location}.`)


// Output:
// Surya is 20. He lives in United States.


//---------------------           ------------            ------------


myData.age = myData.age + 1;


console.log(` ${myData.name} is ${myData.age}. He lives in ${myData.location}.`)


// Output:
// Surya is 21. He lives in United States.




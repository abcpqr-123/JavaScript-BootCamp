
// let myBook = {
//     title: 'Surya',
//     author: 'Google',
//     pageCount: 1000
// }

// let otherBook = {
//     title: 'History',
//     author: 'Soorya',
//     pageCount: 500
// }


// let getSummary = function (book) {
//     console.log(`${book.title} by ${book.author}`)
// }


// getSummary(myBook)
// getSummary(otherBook)


// OUtput:
// Surya by Google
// History by Soorya




//---------------------------------------------------





// returning objects from functions:



let myBook = {
    title: 'Surya',
    author: 'Google',
    pageCount: 1000
}

let otherBook = {
    title: 'History',
    author: 'Soorya',
    pageCount: 500
}


let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}


let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)
// Output:
// Surya is 1000 pages long
console.log(bookSummary.summary)
// Output:
// Surya by Google




//-----------------------------------------------------------------------



let temperature = function(fahrenheit){
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5/9),
        celsius: (fahrenheit - 32) * (5/9)
    }
}

let abc = temperature(74)

console.log(abc)


// Output:
// {
//     fahrenheit: 74,
//     kelvin: 296.4833333333334,
//     celsius: 23.333333333333336
//   }




//---------------------------------------------------------------------


        
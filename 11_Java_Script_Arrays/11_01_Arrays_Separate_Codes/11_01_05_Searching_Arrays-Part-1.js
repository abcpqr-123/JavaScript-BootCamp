





// // SEARCHING ARRAYS: part-1 =>



// // get the index of an alement in an array:

// // and u will get -1 for the index which does not exists.



// const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.indexOf('Note 2'))


// // Output:
// // 1



// // and u will get -1 for the index which does not exists.

//  console.log(notes.indexOf('Note 4'))

// // Output:
// // -1


// //---------------------------------------------------


// const notes = [{}, {
//     title: 'my next trip',
//     body: 'I woud like to go to New York'
// }, {
//     title: 'Habbits to work on',
//     body: 'Exercise. Eating a bit better.'
// }, {
//     title: 'Office modification',
//     body: 'get a new seat'
// }]


// console.log(notes.indexOf({}))

// // Output:
// // -1

// // indexOf works with strings, numbers and boolin values, but, 
// // its not true with objects. so instead u must use findIndex.

// const index = notes.findIndex(function (notes, index){
//     console.log(notes)
//     return notes.title === 'Habbits to work on' 
// })
// console.log(index)

// // Outpt:
// // { title: 'my next trip', body: 'I woud like to go to New York' }
// // { title: 'Habbits to work on', body: 'Exercise. Eating a bit better.' }
// // 2   --> requred output






// //-----------------------------------------------------
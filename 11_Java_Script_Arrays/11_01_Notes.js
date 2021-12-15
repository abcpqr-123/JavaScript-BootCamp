// const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes)

// // Output:
// // [ 'Note 1', 'Note 2', 'Note 3' ]



// //------------------------------------------------------------------

// // length of the array:


// console.log(notes.length)

// // Output:
// // 3
// //------------------------------------------------------------------


// // access by index of the array:

// console.log(notes[0])
// //  Output:
// //  Note 1
// console.log(notes[notes.length-1])


// // Output:
// // Note 3







// //----------------------------------------------------------------












// // MANUIPULATING ARRAYS WITH METHODS



// //Adding new element:

// const notes = ['Note 1', 'Note 2', 'Note 3']

// notes.push('My new note')

// console.log(notes.length)
// console.log(notes)


// // Output:
// // 4
// // [ 'Note 1', 'Note 2', 'Note 3', 'My new note' ]



// //------------------------------------------------------------




// //removing the last item

// const notes = ['Note 1', 'Note 2', 'Note 3']


// console.log(notes)
// console.log(notes.length)
// //pop removes the last item:
// console.log(notes.pop())

// // push adds new value
// notes.push('My new note')
// console.log(notes.length)
// console.log(notes)
// // Output:
// // [ 'Note 1', 'Note 2', 'Note 3' ]
// // 3
// // Note 3
// // 3
// // [ 'Note 1', 'Note 2', 'My new note' ]


// //------------       -----------          ----------------


// //Removes very 1st item.
// console.log(notes.shift())
// console.log(notes)
// // Output:
// // Note 1
// // [ 'Note 2', 'My new note' ]


// //------------      -----------        ---------


// //adds in very biggining .
// console.log(notes.unshift('Surya'))
// console.log(notes)

// // 3
// // [ 'Surya', 'Note 2', 'My new note' ]






// //------------      -----------        ---------









// // Splice



// const notes = ['Note 1', 'Note 2', 'Note 3']

// notes.splice(1, 1)

// console.log(notes.length)
// console.log(notes)



// // Output:
// // [ 'Note 1', 'Note 3' ]



// //-----------------

// const notes = ['Note 1', 'Note 2', 'Note 3']

// notes.splice(0, 1)   // start from index 0 and remove 1  items

// console.log(notes.length)
// console.log(notes)

// // Output:
// // [ 'Note 2', 'Note 3' ]

// //-----------------

// const notes = ['Note 1', 'Note 2', 'Note 3']

// notes.splice(0, 3)   // start from index 0 and remove 3  items

// console.log(notes.length)
// console.log(notes)


// //----------------------

// const notes = ['Note 1', 'Note 2', 'Note 3']


// notes.splice(2, 1)   // start from index 2 and remove 1  items

// console.log(notes.length)
// console.log(notes)

// // Output:
// // 2
// // [ 'Note 1', 'Note 2' ]



// //---------------------------------------------------





// // PROVBODINGH THE NEW ITEM:


// const notes = ['Note 1', 'Note 2', 'Note 3']

// notes.splice(0, 0, 'New Item')

// console.log(notes.length)
// console.log(notes)

// // Output:
// // 4
// // [ 'New Item', 'Note 1', 'Note 2', 'Note 3' ]


// //---------------------------------------

// const notes = ['Note 1', 'Note 2', 'Note 3']


// notes.splice(1, 0, 'New Item')

// console.log(notes.length)
// console.log(notes)


// // Output:
// // 4
// // [ 'Note 1', 'New Item', 'Note 2', 'Note 3' ]



// //---------------------




// // start at 1, delete the item at 1, and add new item:


// const notes = ['Note 1', 'Note 2', 'Note 3']

// notes.splice(1, 1, 'New Item')

// console.log(notes.length)
// console.log(notes)


// // Output:
// // 3
// // [ 'Note 1', 'New Item', 'Note 3' ]



// //-------------------------

// const notes = ['Note 1', 'Note 2', 'Note 3']

// notes[2] = 'new Item 3-new'

// console.log(notes.length)
// console.log(notes)


// // Output:
// // 3
// // [ 'Note 1', 'Note 2', 'new Item 3-new' ]












// //---------------------------------------------------------------------







// //LOOPING OVER ARRAYS


// const notes = ['Note 1', 'Note 2', 'Note 3']

// notes.forEach(function(index, item){
//     console.log(`${item}.${index}`)
// })





// //---------------------------------------------------------------------




// // FOR LOOPS





// for(let count = 0; count<=5; count++){
//     console.log(count)
// }

// // Output:
// // 0
// // 1
// // 2
// // 3
// // 4
// // 5



 // for(let count = 5; count>=0; count--){
 //     console.log(count)
 // }

// // Output:
// // 5
// // 4
// // 3
// // 2
// // 1
// // 0


// const notes = [ 'Note 1', 'Note 2', 'Note 3']

// notes[2] = 'New Note'


//    for(let count = 0; count < notes.length; count++){
//        console.log(count)
//    }


// //    Output:
// //    0
// //    1
// //    2
  

//    for(let count = 0; count < notes.length; count++){
//        console.log(notes[count])
//    }

// //    Output:
// //    Note 1
// //    Note 2
// //    New Note



// for(let count = notes.length-1; count>=0; count--){
//     console.log(notes[count])
// }
// // Output:
// // New Note
// // Note 2
// // Note 1








// //-----------------------------------------------------






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






// // SEARCHING ARRAYS: part-2 =>





// // findIndex





//     const findNote = function(notes, noteTitle){
//         const index = notes.findIndex(function(note, index){
//             return note.title === noteTitle
//         })
//            return notes[index]
//     }

//     const note = findNote(notes, 'Office modification')
//       console.log(note)

// const notes = [{}, {
//         title: 'my next trip',
//         body: 'I woud like to go to New York'
//     }, {
//         title: 'Habbits to work on',
//         body: 'Exercise. Eating a bit better.'
//     }, {
//         title: 'Office modification',
//         body: 'get a new seat'
//     }]


// // output:
// // { title: 'Office modification', body: 'get a new seat' }



// //-------------------------------------------------


// // the above code is case sensetive instead of writing 'Office modification'
// // if u write 'office modification' there will be an error saying 'notdefind'

// // so to solvbe this problem u should use  toLowerCase()
// // this will create a case insensitive search


// const notes =[{
//     title: 'my next trip',
//     body: 'I woud like to go to New York'
// }, {
//     title: 'Habbits to work on',
//     body: 'Exercise. Eating a bit better.'
// }, {
//     title: 'Office modification',
//     body: 'get a new seat'
// }]


// const findNote = function(notes, noteTitle){
//     // // findIndex
//     const index = notes.findIndex(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//        return notes[index]
// }





// const note = findNote(notes, 'office modification')
//   console.log(note)



// // Output:
// // { title: 'Office modification', body: 'get a new seat' }



// // ---------------         ----------------        -----------



// // u can also use -find-   --> notes.find
// // if u want to do something related to the index then find index is 
// // a greate choice.




// const findNote = function(notes, noteTitle){
//     // // find
//     return  notes.find(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }


// const note = findNote(notes, 'office modification')
//   console.log(note)



// // Output:
// // { title: 'Office modification', body: 'get a new seat' }











//   //-------------------------------------------------------------









// // 11_06_07_FILTER in arrays





// const notes =[{
//     title: 'my next trip',
//     body: 'I woud like to go to New York'
// }, {
//     title: 'Habbits to work on',
//     body: 'Exercise. Eating a bit better.'
// }, {
//     title: 'Office modification',
//     body: 'get a new seat'
// }]


// const findNote = function(notes, noteTitle){
//     // // find
//     return  notes.find(function(note, index){
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
// }

// const findNotes = function(notes, query){
//     return notes.filter(function (note, index){
//     const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//     const isBodyMatch = note.title.toLowerCase().includes(query.toLowerCase())
//     return isTitleMatch || isBodyMatch
// })
// }

// console.log(findNotes(notes, 'work'))


// // Output:
// // [
// //     {
// //       title: 'Habbits to work on',
// //       body: 'Exercise. Eating a bit better.'
// //     }
// //   ]





// // const note = findNote(notes, 'eat and run')
// //   console.log(note)






// //---------------------------------------------------------------






//   // Sorting Arrays




// const notes =[{
//     title: 'my next trip',
//     body: 'I woud like to go to New York'
// }, {
//     title: 'Habbits to work on',
//     body: 'Exercise. Eating a bit better.'
// }, {
//     title: 'Office modification',
//     body: 'get a new seat'
// }]

// //----          --        --       ----

// console.log('a' > 'A')
// // Output:
// // true


// console.log('a' < 'A')
// // Output:
// // false


// console.log('January' > 'March')
// // Output:
// // false


// console.log('January' < 'March')
// // Output:
// // true

// console.log('a' < 'b')
// // Output:
// // true
// //----          --        --       ----



// const sortNotes = function (notes){
//     notes.sort(function(a,b){
//       if(a.title.toLowerCase() < b.title.toLowerCase()) {
//       return -1
//     }else if (b.title.toLowerCase() < a.title.toLowerCase()){
//       return 1
//     }else{ 
//         return 0
//     }
//     })
// }

// const findNotes = function(notes, query){
//   return notes.filter(function(note, index){
//     const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//     const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//        return isTitleMatch || isBodyMatch
//   })
// }

// sortNotes(notes)
// console.log(notes)


// // Output:     first title is starting from H, then m,  then O
// // [
// //   {
// //     title: 'Habbits to work on',
// //     body: 'Exercise. Eating a bit better.'
// //   },
// //   { title: 'my next trip', body: 'I woud like to go to New York' },
// //   { title: 'Office modification', body: 'get a new seat' }
// // ]
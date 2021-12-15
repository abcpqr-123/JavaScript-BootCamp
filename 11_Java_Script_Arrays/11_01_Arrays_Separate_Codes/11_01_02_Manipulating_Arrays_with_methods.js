// MANUIPULATING ARRAYS WITH METHODS



//Adding new element:

const notes = ['Note 1', 'Note 2', 'Note 3']

notes.push('My new note')

console.log(notes.length)
console.log(notes)


// Output:
// 4
// [ 'Note 1', 'Note 2', 'Note 3', 'My new note' ]



//------------------------------------------------------------




//removing the last item

const notes = ['Note 1', 'Note 2', 'Note 3']


console.log(notes)
console.log(notes.length)
//pop removes the last item:
console.log(notes.pop())

// push adds new value
notes.push('My new note')
console.log(notes.length)
console.log(notes)
// Output:
// [ 'Note 1', 'Note 2', 'Note 3' ]
// 3
// Note 3
// 3
// [ 'Note 1', 'Note 2', 'My new note' ]


//------------       -----------          ----------------


//Removes very 1st item.
console.log(notes.shift())
console.log(notes)
// Output:
// Note 1
// [ 'Note 2', 'My new note' ]


//------------      -----------        ---------


//adds in very biggining .
console.log(notes.unshift('Surya'))
console.log(notes)

// 3
// [ 'Surya', 'Note 2', 'My new note' ]



//----------------------------------------------

// Splice



const notes = ['Note 1', 'Note 2', 'Note 3']

notes.splice(1, 1)

console.log(notes.length)
console.log(notes)



// Output:
// [ 'Note 1', 'Note 3' ]



//-----------------

const notes = ['Note 1', 'Note 2', 'Note 3']

notes.splice(0, 1)   // start from index 0 and remove 1  items

console.log(notes.length)
console.log(notes)

// Output:
// [ 'Note 2', 'Note 3' ]

//-----------------

const notes = ['Note 1', 'Note 2', 'Note 3']

notes.splice(0, 3)   // start from index 0 and remove 3  items

console.log(notes.length)
console.log(notes)


//----------------------

const notes = ['Note 1', 'Note 2', 'Note 3']


notes.splice(2, 1)   // start from index 2 and remove 1  items

console.log(notes.length)
console.log(notes)

// Output:
// 2
// [ 'Note 1', 'Note 2' ]



//---------------------------------------------------





// PROVBODINGH THE NEW ITEM:


const notes = ['Note 1', 'Note 2', 'Note 3']

notes.splice(0, 0, 'New Item')

console.log(notes.length)
console.log(notes)

// Output:
// 4
// [ 'New Item', 'Note 1', 'Note 2', 'Note 3' ]


//---------------------------------------

const notes = ['Note 1', 'Note 2', 'Note 3']


notes.splice(1, 0, 'New Item')

console.log(notes.length)
console.log(notes)


// Output:
// 4
// [ 'Note 1', 'New Item', 'Note 2', 'Note 3' ]



//---------------------




// start at 1, delete the item at 1, and add new item:


const notes = ['Note 1', 'Note 2', 'Note 3']

notes.splice(1, 1, 'New Item')

console.log(notes.length)
console.log(notes)


// Output:
// 3
// [ 'Note 1', 'New Item', 'Note 3' ]



//-------------------------

const notes = ['Note 1', 'Note 2', 'Note 3']

notes[2] = 'new Item 3-new'

console.log(notes.length)
console.log(notes)


// Output:
// 3
// [ 'Note 1', 'Note 2', 'new Item 3-new' ]
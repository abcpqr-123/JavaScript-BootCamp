// SEARCHING ARRAYS: part-2 =>





// findIndex





    const findNote = function(notes, noteTitle){
        const index = notes.findIndex(function(note, index){
            return note.title === noteTitle
        })
           return notes[index]
    }

    const note = findNote(notes, 'Office modification')
      console.log(note)

const notes = [{}, {
        title: 'my next trip',
        body: 'I woud like to go to New York'
    }, {
        title: 'Habbits to work on',
        body: 'Exercise. Eating a bit better.'
    }, {
        title: 'Office modification',
        body: 'get a new seat'
    }]


// output:
// { title: 'Office modification', body: 'get a new seat' }



//-------------------------------------------------


// the above code is case sensetive instead of writing 'Office modification'
// if u write 'office modification' there will be an error saying 'notdefind'

// so to solvbe this problem u should use  toLowerCase()
// this will create a case insensitive search


const notes =[{
    title: 'my next trip',
    body: 'I woud like to go to New York'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'get a new seat'
}]


const findNote = function(notes, noteTitle){
    // // findIndex
    const index = notes.findIndex(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
       return notes[index]
}





const note = findNote(notes, 'office modification')
  console.log(note)



// Output:
// { title: 'Office modification', body: 'get a new seat' }



//---------------         ----------------        -----------



// u can also use -find-   --> notes.find
// if u want to do something related to the index then find index is 
// a greate choice.




const findNote = function(notes, noteTitle){
    // // find
    return  notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}


const note = findNote(notes, 'office modification')
  console.log(note)



// Output:
// { title: 'Office modification', body: 'get a new seat' }


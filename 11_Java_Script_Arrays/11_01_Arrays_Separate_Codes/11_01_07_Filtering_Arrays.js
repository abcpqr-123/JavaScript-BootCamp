// FILTER in arrays





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
    // // find
    return  notes.find(function(note, index){
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function(notes, query){
    return notes.filter(function (note, index){
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.title.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
})
}

console.log(findNotes(notes, 'work'))


// Output:
// [
//     {
//       title: 'Habbits to work on',
//       body: 'Exercise. Eating a bit better.'
//     }
//   ]





// const note = findNote(notes, 'eat and run')
//   console.log(note)

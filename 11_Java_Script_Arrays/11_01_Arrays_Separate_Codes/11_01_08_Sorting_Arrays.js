  // Sorting Arrays




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

//----          --        --       ----

console.log('a' > 'A')
// Output:
// true


console.log('a' < 'A')
// Output:
// false


console.log('January' > 'March')
// Output:
// false


console.log('January' < 'March')
// Output:
// true

console.log('a' < 'b')
// Output:
// true
//----          --        --       ----



const sortNotes = function (notes){
    notes.sort(function(a,b){
      if(a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1
    }else if (b.title.toLowerCase() < a.title.toLowerCase()){
      return 1
    }else{ 
        return 0
    }
    })
}

const findNotes = function(notes, query){
  return notes.filter(function(note, index){
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
       return isTitleMatch || isBodyMatch
  })
}

sortNotes(notes)
console.log(notes)


// Output:     first title is starting from H, then m,  then O
// [
//   {
//     title: 'Habbits to work on',
//     body: 'Exercise. Eating a bit better.'
//   },
//   { title: 'my next trip', body: 'I woud like to go to New York' },
//   { title: 'Office modification', body: 'get a new seat' }
// ]
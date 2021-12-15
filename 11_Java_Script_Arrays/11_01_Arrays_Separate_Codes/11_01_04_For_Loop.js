for(let count = 0; count<=5; count++){
    console.log(count)
}

// Output:
// 0
// 1
// 2
// 3
// 4
// 5



for(let count = 5; count>=0; count--){
    console.log(count)
}

// Output:
// 5
// 4
// 3
// 2
// 1
// 0


const notes = [ 'Note 1', 'Note 2', 'Note 3']

notes[2] = 'New Note'


   for(let count = 0; count < notes.length; count++){
       console.log(count)
   }


//    Output:
//    0
//    1
//    2
  

   for(let count = 0; count < notes.length; count++){
       console.log(notes[count])
   }

//    Output:
//    Note 1
//    Note 2
//    New Note



for(let count = notes.length-1; count>=0; count--){
    console.log(notes[count])
}
// Output:
// New Note
// Note 2
// Note 1



//-----------------------------------------------------
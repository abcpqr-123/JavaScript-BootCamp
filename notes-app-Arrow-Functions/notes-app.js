
// DOM MANUPILATION

// // Query and remove the fist p tag line only.
// const p = document.querySelector('p')
// p.remove()

// // Output: 
// // Before:
// // Notes App
// // Take notes and never forget
// // This application is created by Surya Gaonkar  --> p tag 
// // Some note text --> p tag


// // After:
// // Notes App
// // Take notes and never forget
// // Some note text




// //----------------------------------------------------



// // to remove all the p tags:

// const q = document.querySelectorAll('p')

// q.forEach(function (p){
//     p.remove()
// })



// // Output: 
// // Before:
// // Notes App
// // Take notes and never forget
// // This application is created by Surya Gaonkar  --> p tag 
// // Some note text --> p tag


// // After
// // Notes App
// // Take notes and never forget


// //--------------------------------------------------------




// // Reading the paragraph text values and printing the lines in the chrome consloe:


// const q = document.querySelectorAll('p')

// q.forEach(function (p){
//       console.log(p.textContent)
// })



// // Not only reading, we can also write the values, in other words we can change or 
// // replace the values


// const q = document.querySelectorAll('p')

// q.forEach(function (p){
//       p.textContent = '*******'
// })


// // Output:
// // Notes App
// // Take notes and never forget
// // *******

// // *******






// //------------------------------------------------------






// //ADDING ELEMENT VIA DOM

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


// // Query all and remove
// const ps  = document.querySelectorAll('p')

// ps.forEach(function (p){
//     p.textContent = '********'
// })
// // Adding a new element

// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from JavaScript'
// document.querySelector('body').appendChild(newParagraph)







// //-------------------------------------------------




// // Handling User Interaction



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

// document.querySelector('button').addEventListener('click', function(e) {
//     e.target.textContent = 'The button was clicked'
// })







// //--------------------------------------------------




// // Advanced Queries



// const notes = [{
//     title: 'my next trip',
//     body: 'I would like to go to Spain'
// }, {
//     title: 'Habbits to work on',
//     body: 'Exercise. Eating a bit better.'
// }, {
//     title: 'Office modification',
//     body: 'Get a new seat'
// }]

// const filters = {
//     searchText: ''
// }



// // //---------------------------------------------------------------------

// // // note: CRUD OPERATIONS: create, read, update, delete

// // // localStorage.setItem ('location', 'Bengalore')

// // // console.log(localStorage,getItem('location'))

// // // localStorage.removeItem('location')


// // //----------------------------------------------------------------------


// // // creating the data
// // // localStorage.setItem('location', 'Bengalore')
// // // Output was: data got stored in local storage.

// // // Reading the data which has been already created
// // console.log(localStorage.getItem('location'))
// // // Output was: data got stored in local storage and was visible in the console.

// // // deleting the item which was previously stored
// // localStorage.removeItem('location')
// // // Output was: data which was stored in the local storage got removed and consloe was showing null

// // // to clear all the data that was stored in the local storage we do use localStorage.clear
// // localStorage.clear()


// // const user = {
// //     name: 'Surya',
// //     age: 27
// // }

// // // // JSON- JAVASCRIPT OBJECT NOTATION

// // const userJSON = JSON.stringify(user)
// // console.log(userJSON)
// // localStorage.setItem('user', userJSON)

// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// console.log(`${user.name} is ${user.age}`)



// const renderNotes = function (notes, filters) {
//     const filteredNotes = notes.filter(function (note) {
//         return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
//     })

//     document.querySelector('#notes').innerHTML = ''
    
//     filteredNotes.forEach(function (note) {
//         const noteEl = document.createElement('p')
//         noteEl.textContent = note.title
//         document.querySelector('#notes').appendChild(noteEl)
//     })
// }

// renderNotes(notes, filters)

// document.querySelector('#create-note').addEventListener('click', function (e) {
//     e.target.textContent = 'The button was clicked'
// })



// document.querySelector('#search-text').addEventListener('input', function (e) {
//     filters.searchText = e.target.value
//     renderNotes(notes, filters)
// })


// document.querySelector('#filter-by').addEventListener('change', function(e){
//     console.log(e.target.value)
// })





//----------------------------------------------------------


// // Saving our data in localStorage: part 2


// const notes = getSavedNotes()

// const filters = {
//     searchText: ''
// }
// // // Check for existing saved data:

// // const notesJSON = localStorage.getItem('notes')

// // if (notesJSON !== null){
// //     notes = JSON.parse(notesJSON)
// // }


// // const renderNotes = function (notes, filters) {
// //     const filteredNotes = notes.filter(function (note) {
// //         return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
// //     })

// //     document.querySelector('#notes').innerHTML = ''
    
// //     filteredNotes.forEach(function (note) {

// //         const noteEl = GenerateNoteDOM(note)
// //         // const noteEl = document.createElement('p')

// //         // if (note.title.length > 0){
// //         //     noteEl.textContent = note.title
// //         // } else {
// //         //     noteEl.textContent = 'Unnamed note'
// //         // }
// //          document.querySelector('#notes').appendChild(noteEl)
// //     })
// // }


// renderNotes(notes, filters)

// document.querySelector('#create-note').addEventListener('click', function (e) {
//     notes.push({
//         title: '',
//         body: ''
//     })
//     saveNotes(notes)

//     // localStorage.setItem('notes', JSON.stringify(notes))
//     renderNotes(notes, filters)
// })

// document.querySelector('#search-text').addEventListener('input', function (e) {
//     filters.searchText = e.target.value
//     renderNotes(notes, filters)
// })

// document.querySelector('#filter-by').addEventListener('change', function (e) {
//     console.log(e.target.value)
// })









//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------
//-----------------------------------------------------------------



let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click',  (e) => {
    const id = uuidv4()
    const timestamp = moment().valueOf()

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input',  (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage',  (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})


// // // Unix Epach: - January 1st 1970 00:00:00
// // // +ve numbers are used to present the time after this
// // // -ve numbers are used to present the time before this

// // // if u want to icrease 1 sec Form the date January 1st 1970 00:00:00
// // // u will add it in terms of mili getSeconds
// // // 1 sec = 1000 miliseconds
// // // So, if u want to increase the time by one second then u have to add 1000


// // // just a minute before Unix Epach is: 60 * 1000 = 60000
// // //  (in one min --> 60 Secs , and 1 sec = 1000 mili secs, so 60 * 1000)


// // const now = new Date('December 12 2021 19:44:01')
// // console.log(now.getTime())

// // // console.log(`Year: ${now.getFullYear()}`)
// // // console.log(`Month: ${now.getMonth()}`)
// // // console.log(`Day of the month: ${now.getDate()}`)
// // // console.log(`Hour: ${now.getHours()}`)
// // // console.log(`Munutes: ${now.getMinutes()}`)
// // // console.log(`Second: ${now.getSeconds()}`)


// const now = new Date()
// const timestamp = now.getTime()


// const myDate = new Date(timestamp)
// console.log(myDate.getFullYear())




// const dateOne = new Date('March 1 2017 12:00:00')
// const dateTwo = new Date()
// const dateOneTimestamp = dateOne.getTime()
// const dateTwoTimestamp = dateTwo.getTime()

// if(dateOneTimestamp < dateTwoTimestamp){
//     console.log(dateOne.toString())
// } else if (dateTwoTimestamp < dateOneTimestamp){
//     console.log(dateTwo.toString())
// }



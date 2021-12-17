
// // DOM Challenge
// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach(function(paragraph) {
//     // code to check if the line contains 'the' word or not
//    if (paragraph.textContent.includes('the')){
//     paragraph.remove()
// }
// })

// // Output:

// // Todos

// // Book flights

// // Research Musium






// // DOM Challenge END
// // --------------------------------------------------------




// ADDING NEW ELEMETS VIA DOM

let todos = getSavedTodos()

const filters = {
    searchText: '',
    hideCompleted: false
}

// const todosJSON = localStorage.getItem('todos')

// if(todosJSON !== null){
//     todos = JSON.parse(todosJSON)
// }

// const renderTodos = function (todos, filters) {
//     const filteredTodos = todos.filter(function(todo){
//     const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
//     const hideCompletedMatch = !filters.hideCompleted || !todo.completed
       
//      return searchTextMatch && hideCompletedMatch

//     })

//     // let filteredTodos = todos.filter(function (todo) {
//     //     return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
//     // })

 
//     const incompleteTodos = filteredTodos.filter(function (todo) {
//         return !todo.completed
//     })


//     document.querySelector('#todos').innerHTML = ''

//     const summary = document.createElement('h2')
//     summary.textContent = `You have ${incompleteTodos.length} todos left`
//     document.querySelector('#todos').appendChild(summary)

//     filteredTodos.forEach(function (todo) {
//         const p = document.createElement('p')
//         p.textContent = todo.text
//         document.querySelector('#todos').appendChild(p)
//     })
// }

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})
 
document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    })
    // localStorage.setItem('todos', JSON.stringify(todos))
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

document.querySelector('#hide-completed').addEventListener('change',  (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})
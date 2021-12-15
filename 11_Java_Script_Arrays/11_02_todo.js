// const todo = ['run', 'eat', 'play', 'sleep', 'sit']


console.log(`we have ${todo.length} todos!`)
console.log(`Todo: ${todo[0]}`)
console.log(`Todo: ${todo[todo.length-2]}`)

// Output:
// we have 5 todos!
// Todo: run
// Todo: sleep








//---------------------------------------------------------





// 02_Manipulating_Arrays_with_methods




// Delete the third item

console.log(todo)

todo.splice(2, 1)

console.log(todo)

// Output:
// [ 'run', 'eat', 'play', 'sleep', 'sit' ]
// [ 'run', 'eat', 'sleep', 'sit' ]


//--------------------------------------------------------

//Add a new item at the end of the list

console.log(todo)

todo.push('Buy Banana')

console.log(todo)


        //   or


console.log(todo)

todo.splice(4,1, 'New Item')  // at index 4 add 1 new item

console.log(todo)


// Output:
// [ 'run', 'eat', 'play', 'sleep', 'sit' ]
// [ 'run', 'eat', 'play', 'sleep', 'New Item' ]


//-------------------------------------------------------------


// Remove the first item from the list

console.log(todo)

todo.shift()

console.log(todo)


        //   or

console.log(todo)

todo.splice(0,1)  // at index 0 remove 1 item

console.log(todo)


// Output:
// [ 'run', 'eat', 'play', 'sleep', 'sit' ]
// [ 'eat', 'play', 'sleep', 'sit' ]







//---------------------------------------------






//03_LOOPING OVER ARRAYS:




todo.forEach(function(index, item){
   console.log(`${item}.${index}`)
})
   
// Output:

// 0.run
// 1.eat
// 2.play
// 3.sleep
// 4.sit


    // or


    todo.forEach(function(todo, index){
        const num = index + 1
        console.log(`${num}.${todo}`)
     })

// Output:
// 1.run
// 2.eat
// 3.play
// 4.sleep
// 5.sit







//---------------------------------------------






//03_FOR LOOPS:






for(let count=0; count<=todo.length-1; count++){
    console.log(todo[count])
}

// Output:
// run
// eat
// play
// sleep
// sit


for(let count=todo.length-1; count>=0; count--){
    console.log(todo[count])
}

// output:
// sit
// sleep
// play
// eat
// run








//---------------------------------------------------------------










// SEARCHING ARRAYS: part-2 =>


const todos = [{
text: 'run',
completed: true
}, {
text: 'eat',
completed: false
}, {
text: 'play',
completed: true
}, {
text: 'sleep',
completed: false
}, {
text: 'sit',
completed: true
}]

const deleteTodo = function(todos, todoText){
    const index = todos.findIndex(function(todo){
          return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if (index > -1){
        todos.splice(index, 1)
    }
}


deleteTodo(todos, 'run')
console.log(todos)



// Output:
// [
//     { text: 'Order cat food', completed: true },
//     { text: 'Clean kitchen', completed: false },
//     { text: 'Buy food', completed: true },
//     { text: 'Do work', completed: false },
//     { text: 'Exercise', completed: true }
//   ]







//--------------------------------------------------------------






// filtering arrays




const todos = [{
text: 'run',
completed: true
}, {
text: 'eat',
completed: false
}, {
text: 'play',
completed: true
}, {
text: 'sleep',
completed: false
}, {
text: 'sit',
completed: true
}]



const getThingsTodo = function (todos){
    return todos.filter(function (todo) {
        return !todo.completed
    })
}


console.log(getThingsTodo(todos))


// Output:
// [
//     { text: 'eat', completed: false }, 
//     { text: 'sleep', completed: false }
//   ]







//--------------------------------------------------------------






// Sorting Algorithms



const todos = [{
    text: 'run',
    completed: true
    }, {
    text: 'eat',
    completed: false
    }, {
    text: 'play',
    completed: true
    }, {
    text: 'sleep',
    completed: false
    }, {
    text: 'sit',
    completed: true
    }]
    

    const sortTodos = function (todos) {
        todos.sort(function(a,b){
            if(!a.completed && b.completed){
                return -1
            }else if(!b.completed && a.completed){
                return 1
            }else{
                return 0
            }
        })
    }

    const getThingsTodo = function(todos){
        return todos.filter(function(todo){
            return !todo.completed
        })
    }

sortTodos(todos)
console.log(todos)

// ------------ Output: ---------------

// Before using sortTodos function:


// [
//     { text: 'run', completed: true },
//     { text: 'eat', completed: false },
//     { text: 'play', completed: true },
//     { text: 'aleep', completed: false },
//     { text: 'ait', completed: true }
//   ]


// after using sortTodos function:

// [
//     { text: 'eat', completed: false },  
//     { text: 'sleep', completed: false },
//     { text: 'run', completed: true },   
//     { text: 'play', completed: true },  
//     { text: 'sit', completed: true }
//   ]


// ------------ Output  END: ---------------
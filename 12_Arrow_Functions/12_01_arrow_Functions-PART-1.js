
const ans = function(sum){ 
    return  sum * sum
}

let answer = ans(2)

console.log(answer)

// // Output:
// // 4
// //---------------------------------------


const ans1 = function(sum1){ 
    let a =  sum1 * sum1
    return a
}

let answer1 = ans1(3)

console.log(answer1)

// // Output:
// // 9


// //-------------------------------------


const ans2 = function(sum2){ 
    let a =  sum2 * sum2
    console.log(a)
}

let answer2 = ans2(10)

// // Output:
// // 100


// //---------------------------------------------


const square = (num) => {
    return num * num
}

const sum = square(5)

console.log(sum)

// Or

console.log(square(5))

// // Output:
// // 25


// //-------------------------------------------


const people = [{ 
    name: 'Surya',
    age: 12
  }, {
    name: 'Soorya',
    age: 22
  }, {
     name: 'Sunny',
     age: 32
  }, {
      name: 'sanny',
      age: 42
  }
     ]

     const under30 = people.filter(function(person){
         return person.age < 30
     })

     console.log(under30)


    //  Output:
    //  [ { name: 'Surya', age: 12 }, { name: 'Soorya', age: 22 } ]




    //--------      ------------          -------------


    // above code using the functions:


    const people = [{ 
        name: 'Surya',
        age: 12
      }, {
        name: 'Soorya',
        age: 22
      }, {
         name: 'Sunny',
         age: 32
      }, {
          name: 'sanny',
          age: 42
      }
         ]


     const under30 = people.filter((person) =>   person.age < 30 )
     console.log(under30)
    


// Output:
// [ { name: 'Surya', age: 12 }, { name: 'Soorya', age: 22 } ]


//-------------------------------------------


// identify the person with age = 22 and print the name of that person 
// USING ARROW Function


const people = [{ 
    name: 'Surya',
    age: 12
  }, {
    name: 'Soorya',
    age: 22
  }, {
     name: 'Sunny',
     age: 32
  }, {
      name: 'sanny',
      age: 42
  }
     ]


const  person1 = people.find((person1) => person1.age === 22)
console.log(person1.name)
     
// Output:
// Soorya
if (true) {
    if (true){
        name = 'Surya'
        console.log(name)
    }
}

if (true){
    console.log(name)
}


// Output:
// Surya
// Surya

// To fix the leaked globel scope add let behind name:

if (true) {
    if (true){
       let name = 'Surya'
        console.log(name)
    }
}

if (true){
    console.log(name)
}

// Output:
// name is not defined

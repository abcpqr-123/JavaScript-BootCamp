// Global (name)
  // Local (name)
    // Local
  // Local

let name = 'Surya'

if(true){
    let name = 'Soorya'

    if(true){
        console.log(name)
    }
}

if (true){
    console.log(name)
}

// Output:
// Soorya
// Surya


//------------------------------------------------



let name = 'Surya'

if(true){
    let name = 'Soorya'

    if(true){
        let name = 'Anuj'
        console.log(name)
    }
}

if (true){
    console.log(name)
}

// Output:
// Anuj
// Surya
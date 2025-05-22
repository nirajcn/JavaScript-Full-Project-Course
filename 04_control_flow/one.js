// if

// const isUserLoggedIn = true
// const temperature = 41

// if (temperature === 41) {
//     console.log("Less than 50");

// } else {
//     console.log("temperature is greater than 50");
// }


// <, >, <=, >=, ==, !=, ===, !==



// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User Power: ${power}`);

// }

// console.log(`User power: ${power}`); //this is a wrong accsess variable (this only "var"(globel variavariable))



const userLoggedIn = true
const debitCard = true
const LoggedFromGoogle = true
const LoggedFromEmail = true


if (userLoggedIn && debitCard) {
    console.log("Allow to Buy Course");
    
}

if (LoggedFromGoogle || LoggedFromEmail) {
    console.log("User logged In!");
        
}

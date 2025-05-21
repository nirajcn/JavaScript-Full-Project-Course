// Function


function myNewFun() {

    console.log("N");
    console.log("I");
    console.log("R");
    console.log("A");
    console.log("J");

}


// myNewFun()   //function Call🤙 



// function addTwonumbers(number1, number2) {
//     console.log(number1 + number2);

// }

// addTwonumbers(3, 6)  //function call


function addTwonumbers(number1, number2) {
    //   let result = number1 + number2
    //   return result

    return number1 + number2
}
addTwonumbers(3, 6)  //function call

const result = addTwonumbers(3, 5)
// console.log("Result: ", result);

function loggInUserMsg(username) {

    if(!username){                     //username === undefined
        console.log("Please enter your username");
        return
    }

    return `${username} Just Logged In`
}


// console.log(loggInUserMsg("nirajcn"));





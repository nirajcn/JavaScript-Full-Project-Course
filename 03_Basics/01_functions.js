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



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++


function calculateCartPrice(...num1){

    return num1
}

console.log(calculateCartPrice(200, 400, 500, 3000, 4000));


const user = {

    username: "niraj",
    price: 199
}
function handleObject(anyObject){
            console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
            
}

// handleObject(user)

handleObject ({
    username: "niraj",
    price: 399
})

const myNewarray = [200, 300, 400, 500]

    function returnSecondValue(getArray){

        return getArray[1]
    }

    console.log(returnSecondValue(myNewarray) );
    
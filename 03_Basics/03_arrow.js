// const user = {
//     username: "niraj",
//     price: 999,

//     wellcomeMessage: function () {
//         console.log(`${this.username} , wellcome to website!`);
//         // console.log(this);

//     }

// }

// user.wellcomeMessage()
// user.username = "nirajcn"
// user.wellcomeMessage()




// console.log(this);   // output: {}



// function chai(){
//     let username = "niraj"
//     console.log(this.user);

// }

// chai()

// ++++++++++++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++++++++++++++++++++


const chai = () => {                // we can use >>> const chai = function()

    let username = "niraj"
    console.log(this.username);

}

// chai()

// +++++++++++++++++++++++++++++++++++++++++++++++

// const addTwo =  (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2  // not require here return becouse '{}'

// console.log(addTwo(4,7));


// const addTwo = (num1, num2)  =>  num1 + num2
// const addTwo = (num1, num2)  =>  (num1 + num2)

const addTwo = (num1, num2) => ({username: "nirajcn"})


console.log(addTwo(3,5));

// const myArray = [2,3,,5,6]
// myArray.forEach()


const user = {
    username: "niraj",
    price: 999,

    wellcomeMessage: function () {
        console.log(`${this.username} , wellcome to website!`);
        console.log(this);

    }

}

// user.wellcomeMessage()
// user.username = "chauhan"
// user.wellcomeMessage()


// function chai(){
//     let username = "niraj"
//     console.log(this);

// }

// chai()



const chai = () => {                // we can use >>>>const chai = function()

    let username = "niraj"
    console.log(this.username);

}

// chai()

// +++++++++++++++++++++++++++++++++++++++++++++++

//Arrow Function  () => {}

// const addTwo = (num1, num2)  =>{
//     return num1 + num2
// }

// const addTwo = (num1, num2)  =>  num1 + num2
// const addTwo = (num1, num2)  =>  (num1 + num2)

const addTwo = (num1, num2) => ({username: "niraj"})


console.log(addTwo(3,5));

// const myArray = [2,3,,5,6]
// myArray.forEach()


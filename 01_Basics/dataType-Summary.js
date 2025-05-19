// Premitive Data Types

// 7 Types : Strings, Number, Boolean, Undefined, Null, Symbol, BigInt

// const score = 100;

// const scorevalue = 100.3;

// const isLoggedIn = true;
// const outSideTemp = null;

// let useEmail; //= "nirajcn07@gmail.com" >>>>> I can use this value But this is Undefined
// const id = Symbol("123 ");
// const anotherId = Symbol("123");

// console.log(id === anotherId);

// const bigNumber = 74578476876747484778768  //(bigInt)

//Reference (Non Premitive)

// Array, Ojects, Functions

// const heros = ["Sunny", "Akshay", "Varun"]; //  This is Object
// let myObj = {
//   name: "Niraj",
//   age: 22,
// };

// This is Function

// const myFunction = function () {
//   console.log("Hello JavaScript");
// };


// console.log(typeof bigNumber);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack (Primtive),      Heap (Non Primtive)

let instaId = "nirajcn";

let AnotherInstaId = instaId;
AnotherInstaId = "fxgniraj"

console.log(instaId);
console.log(AnotherInstaId);


let userOne = {
    email: "nirajcn@gmail.com",
    upi: "niraj323264@okhdfcbank"
}


let userTwo = userOne
userTwo.email = "niraj45455@gmail.com"

console.log(userOne.email); 
console.log(userTwo.email);

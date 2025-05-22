// const userEmail = ""

// if (userEmail) {
//     console.log("Got User Email");

// } else {
//     console.log("Didn't Have user Email!");

// }


// +++++++++++++++++++>  Fslsy Values  <++++++++++++++++++++++

//     false, 0, -0, BigInt 0n, "", null, undefined, NaN

// +++++++++++++++++++>  Truthy Values  <++++++++++++++++++++++


// "0", 'false', " ", [], {}, function(){},


// if (userEmail.length === 0) {
//     console.log("Array Is empty");
    
// }

// const emtyObj = {}

// if (Object.keys(emtyObj).length === 0) {
//     console.log("Object Is empty");
    
// }



// Nullish Coalescing Operator  (??): null underfind

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 10

console.log(val1);

const IceTeaPrice = 100   //this is ternery oprator

IceTeaPrice >= 80 ? console.log("Price Of IceTea Less Than: 80") : console.log("more than 80");


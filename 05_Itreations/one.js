// for


// for (let i = 0; i <= 10; i++) {
//     const element = i;

//      console.log(i);
// }


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (element == 5) {
//         console.log("5 is best number");

//     }

//     console.log(i);
// }


// for (let i = 1; i <= 10; i++) {
//     // console.log(`Outer Loop value: ${i}`);

//     for (let j = 1; j <= 10; j++) {
//         console.log(`Inner Loop value: ${j} and inner Loop ${i}`);
//         console.log(i + '*' + j + '=' + i*j);


//     }

// }

// let myArray = ["Flash", "Batman", "SuperMan", "Antman"]
// console.log(myArray.length);


// for (let i = 0; i < myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element);

// }



//++++++++++++++++++++++++++++ break and continue +++++++++++++++++++++++

// for (let index = 1; index < 20; index++) {

//     if (index == 11) {
//         console.log(`Detected number ${index} and Closed This Program`);
//         break
//     }
//     console.log(`value Of index is: ${index}`);
// }

 // continue


for (let index = 1; index < 20; index++) {

    if (index == 10) {
        console.log(` ->> Skip Number Detected Value ${index}`);
        continue
    }
    console.log(`value Of index is: ${index}`);
}





// for of

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr ) {
//     console.log(num);

// }

// const greetings = "Hello JavaScript"

// for (const greet of greetings) {
//     console.log(`Each character is: ${greet} `);

// }


// Maps

const map = new Map()  // in this values is unique
map.set('IN', "India")
map.set('USA', "United State America")
map.set('Jp', "Japan")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

// for (const key of map ) {
//     console.log(key);

// }

for (const [key, value] of map) {
    console.log(key, ':-', value);

}


const myObject = {
    game1: 'NFS',
    game2: 'freefire'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
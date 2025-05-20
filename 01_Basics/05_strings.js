const Name = "Niraj";
const RepoCount = 45;

// console.log(Name + RepoCount + " Value");   //This is old version And Not Good habits

console.log(`Hello My Name is ${Name} and My Repo is ${RepoCount}.`);

const gameName = new String("freefire");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

// console.log(gameName.charAt(2));

const anotherString = gameName.slice(2, 4);
console.log(anotherString);


const newStringOne = "  Niraj    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nirajcn.com/niraj%20chauhan"

console.log(url.replace('%20', '-'));

console.log(url.includes('niraj'));4

const CheckSplit = "Niraj-chauhan";
console.log(CheckSplit.split('-'));






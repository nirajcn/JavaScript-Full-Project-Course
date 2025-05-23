const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} and Currval: ${currval}`);

//   return acc + currval;
// }, 0);

// console.log("Total: ", myTotal);

const myTotal = myNums.reduce((accr, curr) => accr + curr, 0);

// console.log(myTotal);

//shopping Cart

const shoppingCart = [
  {
    itemname: "JavaScript Course",
    price: 2999,
  },
  {
    itemname: "Python Course",
    price: 999,
  },
  {
    itemname: "Data Science Course",
    price: 4999,
  },
  {
    itemname: "java Course",
    price: 1999,
  },
  {
    itemname: "Full Stack Web Course",
    price: 8999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log("Total Price: ", priceToPay);

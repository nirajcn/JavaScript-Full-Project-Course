// +++++++ Dates +++++++

// let myDate = new Date()
// console.log(myDate);


// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);


// let myCreateDate = new Date(2025, 0, 25);
// let myCreateDate = new Date(2025, 0, 25, 6, 4);
// console.log(myCreateDate);

// let myCreateDate = new Date("05-20-2025");
// console.log(myCreateDate.toLocaleString());

// let myTimeStamp = Date.now()


// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());

// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// `${newDate.getDate()} and the time`

newDate.toLocaleString('defult',{
     
    weekday: "long",
    timeZone: ''
})



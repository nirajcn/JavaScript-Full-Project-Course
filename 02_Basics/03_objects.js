// singleton

// object create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Niraj Chauhan",
    [mySym]: "mykey1", //symbol
    age: 21,
    email: "nirajcn07@gmail.com",
    location: "Patna",
    isLogedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]); //symbol


JsUser.email = "niraj45455@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "niraj3232@gmail.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js User");

}
JsUser.greetingTwo = function () {
    console.log(`Hello Js User, ${this.name} `);

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

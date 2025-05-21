// const tinderUser = new Object()
const tinderUser = {}



tinderUser.id = "123abc"
tinderUser.name = "niraj"
tinderUser.isLoggIn = false

// console.log(tinderUser);

const regularUser = {
    email: "Niraj323264@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Niraj",
            lastname: "Chauhan"
        }
    }
}

// console.log(regularUser.fullname);


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2, ...obj4 }
// console.log(obj3);

const users = [
    {

        id: 1,
        email: "nk23@gmail.com"
    },
    {

        id: 2,
        email: "nk28653@gmail.com"
    },
    {

        id: 3,
        email: "nk2863@gmail.com"
    },
    {

        id: 4,
        email: "nk2773@gmail.com"
    },
    {

        id: 5,
        email: "nk253@gmail.com"
    }
]
users[1].email

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "Js In Hindi",
    price: "999",
    courseInstructor: "Niraj"

}

// console.log(course.coursename);
const {coursename} = course;
const {price} = course;
const {courseInstructor} = course;
const {courseInstructor: instructor} = course;

console.log(coursename);

// {
//     "name": "niraj",
//     "course": "JS In Hindi",     this is JSON File
//     "Price": "free"

// }
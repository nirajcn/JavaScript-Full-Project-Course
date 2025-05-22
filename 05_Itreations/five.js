const coding = ["js", "ruby","java", "python", "cpp"]

// coding.forEach( function (item) {                       //this is function without name
//             console.log(item);
            
// })

// coding.forEach( (item) => {
//     console.log(item);
    
// })

// function printme(item) {
//     console.log(item);
    
// }
// coding.forEach(printme)


// coding.forEach(  (item, index, arr) => {
//     console.log(item, index, arr);
    
// })



const myCoding = [
    {
      languageName: "JavaScript",
      languageFileName: "Js" 
    },
    {
      languageName: "Java",
      languageFileName: "Jv" 
    },
    {
      languageName: "Python",
      languageFileName: "Py" 
    }
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
    
})
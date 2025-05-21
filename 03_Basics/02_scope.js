// var c = 300 old 🧓 tarika hai variable decalair karne karne ka

let a = 300   // scope
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}

// console.log("Outer: ", a);

function one(){
    const username = "niraj"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

// one()


// if (true) {
//     const username = "nirajcn"
//     if (username === "nirajcn" ) {
//         const website = " youtube"
//         console.log(username + website);
        
//     }
    // console.log(website);
    

// }

// console.log(username);


// ++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++


function addone(num){
    return num + 1
}

addone(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)
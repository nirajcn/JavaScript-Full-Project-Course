// Immediately Invoked Function Expressions (IIFE)


(function chai(){
        console.log(`DB CONNECTED`);
})();  // semicolon ';' Require here for next like this function


(  (name) => {
        console.log(`DB CONNECTE TO ${name}`);
})('niraj')
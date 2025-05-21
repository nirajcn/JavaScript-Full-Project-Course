// Immediately Invoked Function Expressions (IIFE)


(function chai(){
        console.log(`DB CONNECTED`);
})();


(  (name) => {
        console.log(`DB CONNECTE TO ${name}`);
})('niraj')
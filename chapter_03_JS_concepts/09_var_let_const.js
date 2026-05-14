var v = 10;
let l = 30;
const c = 50;


var browser = "chrome";
var browser = "firefox";  //re-declaration of var is allowed
browser = "edge";  //reassignment of var is allowed 


// for, functions

var testCases = ["login", "logout", "signup"];

for (var i = 0; i < testCases.length; i++) {
    console.log("Running test:", testCases[i]);
}

console.log("Loop counter leaked outside:", i);



console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hi from Function");
}


say();
say();


function play() {
    // let message = "Playing game"; // message is block-scoped to the play function.
    console.log("playing...");
}

play();
play();
// console.log(message); // ReferenceError: message is not defined  
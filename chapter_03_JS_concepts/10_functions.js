//Defining a function
function greet() {
    console.log("Hello, how are you?");
}

greet(); // Calling the function


// Function with parameters
function greetPerson(name) {
    console.log("Hello, " + name + "!");
}

greetPerson("Alice");
greetPerson("Bob");

// Function with return value
function add(a, b) {
    return a + b;
}
let sum = add(5, 10);
console.log("Sum:", sum);

// Function expression
const multiply = function (x, y) {
    return x * y;
};

let product = multiply(4, 5);
console.log("Product:", product);   
// ---- VALID IDENTIFIERS ----

let name = "John";              // starts with letter
let _private = "secret";       // starts with underscore
let $dollar = "money";         // starts with dollar sign
let camelCase = "style";       // letters only
let value2 = 42;                // letters + digits
let _$$_ = "weird but valid";  // underscores + dollar signs
let ñoño = "unicode";          // unicode letters
let 你好 = "chinese";          // unicode letters

console.log(name, _private, $dollar, camelCase, value2, _$$_, ñoño, 你好);

// ---- INVALID IDENTIFIERS (commented out - would throw errors) ----

// let 2fast = "no";           // starts with digit
// let my-name = "no";        // contains hyphen
// let my name = "no";        // contains space
// let class = "no";          // reserved keyword
// let null = "no";           // reserved keyword
// let let = "no";            // reserved keyword

// ---- CASE SENSITIVITY ----

let Foo = "upper F";
let foo = "lower f";
console.log(Foo, foo);          // different variables

// ---- RESERVED KEYWORDS CANNOT BE USED ----
// Uncomment any of these to see SyntaxError:
// let if = 1;
// let return = 2;
// let const = 3;
// let await = 4;

console.log("All identifier rules demonstrated.");

// JavaScript Closures
// Before you learn about closures, you need to understand two concepts:

// 1.Nested Function
// 2.Returning a function


// 1.Nested Function

// outer function
function greet(name) {

    // inner function
    function displayName() {
        console.log('Hi' + ' ' + name);
    }

    // calling inner function
    displayName();
}

// calling outer function
greet('John'); // Hi John
// In the above program, the greet() function contains the displayName() function inside of it.

// 2.Returning a Function

// n JavaScript, you can also return a function within a function. For example,
function greet2(name) {
    function displayName2() {
        console.log('Hi' + ' ' + name);
    }
    // returning a function
    return displayName2;
}

const g2 = greet2('John');
console.log(g2); // returns the function definition
g2(); // calling the function

console.log("--// JavaScript Closures---")





// JavaScript Closures
// In JavaScript, closure provides access to the outer scope of a function from inside the inner function,
//  even after the outer function has closed. 
// Note: Generally, closures are used for data privacy.

// javascript closure example

// outer function
function greet3() {

    // variable defined outside the inner function
    let name = 'John';

    // inner function
    function displayName3() {

        // accessing name variable
        return 'Hi' + ' ' + name;

    }

    return displayName3;
}

const g3 = greet3();
console.log(g3); // returns the function definition
console.log(g3()); // returns the value

// Another Example
// closure example

function calculate(x) {
    function multiply(y) {
        return x * y;
    }
    return multiply;
}

const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3); // returns calculate function definition
console.log(multiply3()); // NaN

console.log(multiply3(6)); // 18
console.log(multiply4(2)); // 8


// Another Example 
// Data Privacy
// JavaScript closure helps in the data privacy of the program. For example,


// without closure
let a = 0;
function sum() {
    function increaseSum() {

        // the value of a is increased by 1
        return a = a + 1;
    }
    return increaseSum;
}

const x = sum();
console.log(x()); // 1
console.log(x()); // 2
console.log(x()); // 3
a = a + 1;
console.log(a); // 4

console.log("Ex-1 done----------")
// The a variable is increased inside the increaseSum() function.
//  However, the value of the a variable can also be changed outside 
//  of the function. In this case, a = a + 1; 
//  changes the value of the variable outside the function.

// Now, if you want the a variable to be increased only inside 
// the function, you can use a closure. For example,

function sum2() {
    let a1 = 0;
    function increaseSum2() {

        // the value of a is increased by 1
        return a1 = a1 + 1;
    }
    return increaseSum2;
}

let x2 = sum2();
let a1 = 5;
console.log(x2()); // 1
console.log(x2()); // 2
console.log(a1); // 5

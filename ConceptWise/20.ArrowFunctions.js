// Before Arrow:
hello = function() {
    return "Hello World!";
}

// With Arrow Function

hello = () => {
    return "Hello World!";
}

// With Arrow Function short form:

hello = () => "Hello World!";


// Arrow Function With Parameters:

hello = (val) => "Hello " + val;

// Arrow Function Without Parentheses:

hello = val => "Hello " + val;


// Arrow Functions

const getBrand = brand => (
    {
        brand : brand,
        website : `www.${brand}.com`
    }
)

console.log(getBrand("Nike"))
console.log(JSON.stringify(getBrand("Adidas"),0 , 4))

// when can we have () in return

const add1 = (a,b) => a+b // here you are returning string, so (a+b) not needed, optional
const add2 = (a,b) => ({x:a+b}) // here you are returning string, so (a+b) not needed
console.log(add1(1,2))


// ------- Example-2

const calculate = (a, b, sign) => {
    switch(sign) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        default:
            // throw error
    }
}

console.log(calculate(12,2,'*'))

// -------------
let myFunction = (a, b) => a * b;

console.log( "myFunction " + myFunction(4, 5))


// Another example MDN
const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

console.log(materials.map((material) => material.length));
// Expected output: Array [8, 6, 7, 9]


// Syntax
/*
() => expression

param => expression

(param) => expression

(param1, paramN) => expression

() => {
    statements
}

param => {
    statements
}

(param1, paramN) => {
    statements
}




Paranthesis==>

(a, b, ...r) => expression
(a = 400, b = 20, c) => expression
([a, b] = [10, 20]) => expression
({ a, b } = { a: 10, b: 20 }) => expression


*/


// Note : n the example above, both the parentheses around the parameter and the braces around 
// the function body may be omitted. 
// However, they can only be omitted in certain cases.
// The parentheses can only be omitted if the function has a single simple parameter. 
// If it has multiple parameters, no parameters, or default, destructured, or rest parameters, 
// the parentheses around the parameter list are required.

// Traditional anonymous function
(function (a) {
    return a + 100;
  });
  
  // 1. Remove the word "function" and place arrow between the argument and opening body brace
  (a) => {
    return a + 100;
  };
  
  // 2. Remove the body braces and word "return" — the return is implied.
  (a) => a + 100;
  
  // 3. Remove the parameter parentheses
  a => a + 100;
  
// Note : n the example above, both the parentheses around the parameter and the braces around 
// the function body may be omitted. 
// However, they can only be omitted in certain cases.
// The parentheses can only be omitted if the function has a single simple parameter. 
// If it has multiple parameters, no parameters, or default, destructured, or rest parameters, 
// the parentheses around the parameter list are required.



console.log('Hello World from Index')

// Comment

/* Multiline
Comment */

// Variables
let Name = 'Hari';
let cityName;

// constants
const interVal = 1;

// data types
// primitive data types : string, number, bollean, undefined, null

// Note : Variables must start with letter ,   underscore , dollar sign
//         Variables contains letters, numbers, underscores, dollor sign

// string
let nameX = 'Jayaprakash';
let age = 30;
let isApproved = false;
// firstName declared but not defined any value
// by default it will take as undefined
let firstName;
let lastName = undefined;
let midName = null;
let freshobj = {};
console.log("freshobj type ",typeof freshobj)
console.log("firstName type ",typeof firstName)
console.log("midNamenull type ",typeof midName)
console.log("lastNameundefined type ",typeof lastName)

let dob = new Date(2004, 2, 22)
console.log(dob)
// Object
let Person = {
    studentName : 'Prakash',
    numberX : 123
};


// Dot Notation
Person.numberX = 233
console.log(Person.numberX)

// Bracket Notation
Person['studentName'] = "DELL"
console.log(Person['studentName'])

// Array
// it's dynamic
// we can store different types in array
// similar to python list
let myColors = ['Red', 'Green'];
console.log(myColors)
console.log(myColors[1])
console.log(myColors.length)
myColors[2] = 'Black'
myColors[0] = 'White'
myColors[3] = 2345
myColors[4] = 12.987
myColors[5] = false
myColors[6] = null
myColors[7] = undefined
console.log(myColors)


// Functions

function greet(nameX, mobile){
    console.log('FUNC hello world')
    console.log('Hello', nameX, mobile)
}
greet(nameX, '12345');
greet('AP', '9999');

// if we didn't pass variables in func, it will take as undefined

function getSquare(num){
    return num*num
}
console.log(getSquare(8))
console.log("Square of value is ", getSquare(10))
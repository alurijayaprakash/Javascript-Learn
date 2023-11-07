// The spread operator ... is used to expand or spread an iterable or an array. For example,

const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);   // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack

// Copy Array Using Spread Operator
// You can also use the spread syntax ... to copy the items into a single array

const arr12 = ['one', 'two'];
const arr22 = [...arr12, 'three', 'four', 'five'];

console.log(arr22); 
//  Output:
//  ["one", "two", "three", "four", "five"]

// Clone Array Using Spread Operator
// In JavaScript, objects are assigned by reference and not by values. For example,

let arr1 = [ 1, 2, 3];
let arr2 = arr1;

console.log(arr1); // [1, 2, 3]
console.log(arr2); // [1, 2, 3]

// append an item to the array
arr1.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]

// Note : Here, both variables arr1 and arr2
//  are referring to the same array. 
// Hence the change in one variable results in the 
// change in both variables.


// Spread Operator with Object
const obj1 = { x : 1, y : 2 };
const obj2 = { z : 3 };
const obj3 = { alpha : 4 };

// add members obj1 and obj2  to objZ
const objZ = {...obj1, ...obj2, // here it will add items to this new obj
    myobj : {...obj3}}; // here we want to add items to another sub object

console.log(objZ); // { x: 1, y: 2, z: 3, myobj: { alpha: 4 } }

// -------------REST------------------------

// Rest Parameter
// When the spread operator is used as a parameter, it is known as the rest parameter.

// You can also accept multiple arguments in a function call using the rest parameter
// Note: Using the rest parameter will pass the arguments as array elements.

console.log("-----------REST---------------------")
let func = function(...args) {
    console.log(args);
}

func(3); // [3]
func(4, 5, 6); // [4, 5, 6]

// You can also pass multiple arguments to a function using the spread operator.

function sum(x, y ,z) {
    console.log(x + y + z);
}

const num1 = [1, 3, 4, 5];

sum(...num1); // 8 
// here we passed array of 4 elemets but it reads only 3. because check below line
// IMP : If you pass multiple arguments using the spread operator, the function takes the required arguments and ignores the rest.

// Example-2

function sumAfter2(a,b, ...othervals) {
    console.log("othervals",othervals)
    // let's multiply forst two values then add rest of all
    // then retun as array
    first2val = a * b
    let tot = 0
    for (const each of othervals) {
        tot += each;
    }
    return [first2val, tot]
}
console.log(sumAfter2(1,2,3,4,5,6));
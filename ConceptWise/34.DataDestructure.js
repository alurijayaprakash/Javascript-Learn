// he destructuring assignment introduced in ES6 makes it easy 
// to assign array values and object properties to distinct variables

// Before ES6:
// assigning object attributes to variables
const person = {
    studentName: 'Sara',
    age: 25,
    gender: 'female'    
}

// let studentName = person.studentName;
// let age = person.age;
// let gender = person.gender;

// console.log(studentName); // Sara
// console.log(age); // 25
// console.log(gender); // female

// From ES6:
// destructuring assignment
let { studentName, age, gender } = person;

console.log(studentName); // Sara
console.log(age); // 25
console.log(gender); // female

// Note: The order of the name does not matter in object destructuring

// example : - order changed but out put same
// let { age, gender, name } = person;
// console.log(name); // Sara

// Note: When destructuring objects, you should use the same name
//  for the variable as the corresponding object key.

// let { Myage, Mygender, Myname } = person;
// console.log(Myname); // undefined

// If you want to assign different variable names for the object key, you can use:

// destructuring assignment using different variable names
let { studentName: studentName1, age: age1, gender:gender1 } = person;

console.log(studentName1); // Sara
console.log(age1); // 25
console.log(gender1); // female
// --------------------------------------------------------

const arrValue = ['one', 'two', 'three'];

// destructuring assignment in arrays
const [x, y, z] = arrValue;

console.log(x); // one
console.log(y); // two
console.log(z); // three

// Note : use any names not a matter
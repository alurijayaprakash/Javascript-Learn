// Strings

let Studnetname = "kanada"
let Course = "Java"
console.log(Studnetname.toUpperCase())
console.log(Studnetname.length)
console.log(Studnetname.indexOf("a")) // position of substring

// String concatination 
console.log(Studnetname + " " + Course.toUpperCase())
console.log(`${Studnetname} ${Course.toUpperCase()}`) // alternative way string formating
nameX = `${Studnetname} ${Course.toUpperCase()}` // alternative way string formating and assigning variables
console.log(nameX)


//  Strings can be created as primitives, 
// from string literals, or as objects, using the String() constructor:

const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;

const string4 = new String("A String object");

// here string1 and string2, string3 are the premitive strings, but string4 is object type


// Char At by Method
console.log("ChatAt by chatAt() Method ==> " + string1.charAt(4))

// Char At by Index
console.log("ChatAt by Index ==> " + string1[4])

// Comparing strings

const a = "a";
const b = "b";
if (a < b) {
  // true
    console.log(`${a} is less than ${b}`);
} else if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} and ${b} are equal.`);
}
console.log("Comparing strings done ")




// String conversion
// The String() function is a more reliable way of converting values to strings than calling the toString()
//  method of the value, as the former works when used on null and undefined.

// You cannot access properties on null or undefined

const nullVar = null;
nullVar.toString(); // TypeError: Cannot read properties of null
String(nullVar); // "null"

const undefinedVar = undefined;
undefinedVar.toString(); // TypeError: Cannot read properties of undefined
String(undefinedVar); // "undefined"


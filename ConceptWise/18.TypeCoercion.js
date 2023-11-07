// Type Coercion
console.log("Type Coercion")
console.log(0 == false)
console.log(0 == true)
console.log("0" == false)
console.log(0 == true)
console.log("0" == true)
console.log("1" == 1)


// Without Type Coercion = use triple equal
console.log("Without Type Coercion")
console.log(0 === false)
console.log(0 === true)
console.log("0" === false)
console.log(0 === true)
console.log("0" === true)
console.log("1" === 1)



// == vs ===
/*
In JavaScript, == and === are comparison operators used to compare values. They are commonly referred to as the equality operators, but they have different behaviors:

1. == (Equality Operator):

The == operator performs type coercion, which means it attempts to convert the operands to the same type before making the comparison.
If the types of the operands are different, it will try to convert them to a common type.
The comparison is based on the values of the operands after type coercion.
Example: '5' == 5 will return true because the string is coerced to a number before the comparison.
2. === (Strict Equality Operator):

The === operator does not perform type coercion.
It checks if the values are exactly equal and of the same data type (i.e., it compares both the value and the data type).
If the types of the operands are different, it returns false.
Example: '5' === 5 will return false because the string and the number are of different types.
*/
5 == '5'     // true (values are equal after coercion)
5 === '5'    // false (types are different)
0 == false   // true (values are equal after coercion)
0 === false  // false (types are different)
null == undefined  // true (values are equal after coercion)
null === undefined // false (types are different)


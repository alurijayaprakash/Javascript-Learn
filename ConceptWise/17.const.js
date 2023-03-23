// Const
// it's constant

// constant you can not reassign any variable
const brand = "ABCD";

// constant object
// you can't reassign any object to this one
// but you can (add/remove key&values) manupulate data with in const object
const Colors = {};
Colors['Red'] = '12345'
Colors['Blue'] = '22'
Colors.green = '009' // another way of assigning values
Colors.yellow = '768743' // another way of assigning values

console.log(" Colors after RED ",Colors)

delete Colors.Red; // deleting field from object
console.log("after deletion of field  ",Colors)


// when we need to use cost
function hello(){

}
hello = 1
// initially hello is func then again we assigned int to hello.
// this is not right way

// so you need to define hello func as constant

const hello2 = function (){
    console.log("Hello 2")
}

hello2()
// try to run by uncommentting below line , you willl get error
// hello2 = 11
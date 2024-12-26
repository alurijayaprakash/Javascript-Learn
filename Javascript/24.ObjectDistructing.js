// Object Distructing


const Person = {
    firstName : "Jai",
    lastName : "Kushi",
    age : 22,
    gender : "Male",
    address : {
        city : "Berlin",
        street : "TrumpStreet"
    },
    toString : function() {
        return `Name : ${this.firstName} Age: ${this.age}`
    }
}

// if you want to access data from object and assign to another variables

// General Method
const lastName2 = Person.lastName;
const age2 = Person.age;
console.log("Person lastName and age : ", lastName2, age2)

// Efficient method
// const { lastName, age } = Person;
// console.log("Person lastName and age : ", lastName, age)

// Efficient method with techniques

const {
    firstName,
    lastName : mylastName, // way of renaming variables
    age,
    address : {city}, // way of accessing nested objects
    address : {street : streetName}// way of accessing nested objects with rename

} = Person;

console.log(firstName)
console.log(mylastName)
console.log(city)
console.log(streetName)


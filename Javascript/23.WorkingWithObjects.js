// Objects

const Person = {
    firstName : "Jai",
    age : 22,
    gender : "Male",
    toString : function() {
        return `Name : ${this.firstName} Age: ${this.age}`
    }
}

console.log(Person)
Person.lastName = "Kumar"
console.log(Person)

Person["City"] = "India"
console.log(Person)

delete Person.gender; // DELETE method-1
delete Person["City"]; // DELETE method-2
console.log(Person)

console.log("-------------------------------")

console.log("~~Way to access keys~~")

// Loop through object
for (const p in Person) {
    console.log(p) // to get keys
}
console.log("~~Alternative Way to access keys~~")
console.log(Object.keys(Person))
console.log("~~~~")


console.log("~~Way to access values~~")

// Loop through object
for (const p in Person) {
    console.log(Person[p]) // to get values
}

console.log("~~Alternative Way to access values~~")
console.log(Object.values(Person)) 
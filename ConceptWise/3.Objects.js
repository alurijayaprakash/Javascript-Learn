let Person = {
    firstname : "Prakash",
    isAvailable : true,
    balance : 3900,
    dob : new Date(2003, 3, 12).toJSON(),
    address : {
        cityName : "Kadapa",
        PostalCode : null
    }
};

console.log(Person);
console.log(Person.firstname);
console.log(Person.isAvailable);
console.log(Person.address);
console.log("values", Object.values(Person));
console.log("keys" ,Object.keys(Person));
console.log("Stringify" , JSON.stringify(Person));



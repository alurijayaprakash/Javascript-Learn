// Spread Operator

const Person = {
    firstName : "Jai",
    lastName : "Kushi",
    age : 22,
    gender : "Male",
    address : {
        city : "Berlin",
        street : "TrumpStreet"
    },
}

const marks = {
    eng : "99",
    hindi : "35"
}

const idcard = {
    cardno : "12uYdM",
    expiry : "1 year"
}

// if you want to combine three objects insted of general method, use alternatives
// by using spread operator

const medicalStudent = {
    ...Person, // all fields will add to medical object
    ...idcard, // all fields will add to medical object
    marks : {...marks} // insted of individual fields , we can combine as object
}

console.log(medicalStudent)
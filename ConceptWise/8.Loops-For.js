// Loops

let namesList = ["Prakash", "Dell", "Sony", "Logitech"]

console.log("For i loop------>")
for (var i = 0; i < namesList.length; i++){
    console.log(namesList[i])
}

console.log("For of loop---------->")
for (const eachName of namesList) {
    console.log(eachName)
}

console.log("For each loop---------->")

namesList.forEach(function(eachName) {
    console.log(eachName)
})


// Loops

let namesList = ["Prakash", "Dell", "Sony", "Logitech"]

console.log("For i loop------> Index Based")
for (var i = 0; i < namesList.length; i++){
    console.log(namesList[i])
}

console.log("For i in----------> Index Based")
for (i in namesList) {
    console.log("For i in---------->",namesList[i])
}

console.log("For of loop----------> Item Based")
for (const eachName of namesList) {
    console.log("For of loop---->",eachName)
}


console.log("For each loop----------> Item Based")

namesList.forEach(function(eachName) {
    console.log("For each loop--->" ,eachName)
})



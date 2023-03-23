// Break Continue

for (var i = 0; i < 10; i++){
    if (i == 5) {
        break;
    }
    console.log("i value ", i)
}

console.log("------------")

for (var i = 0; i < 10; i++){
    if (i == 5) {
        continue;
    }
    console.log("i value ", i)
}
let isChanged = null;

if (isChanged == 'T'){
    console.log("Successfully Changed")
}
else if (isChanged == 'F'){
    console.log("Not Changed")
}
else{
    console.log("..... no input .....")
}

// -----

var num = 8;
if (num % 2 == 0) {
    console.log('EVEN');
}
else{
    console.log('ODD');
}

// writing above statement using ternery if statement

// Ternary if statement
var result = num % 2 == 0 ? 'EVEN' : 'ODD';
console.log(result)
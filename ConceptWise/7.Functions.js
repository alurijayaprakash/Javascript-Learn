// Functions

function Calc(num1, num2, op){
    if (op == 'a'){
        return num1 + num2
    }
    else if (op == 's'){
        return num1 - num2
    }
    else if (op == 'm'){
        return num1 * num2
    }
    else if (op == 'd'){
        return num1 / num2
    }
    else{
        return "pass operation type"
    }
};

console.log(Calc(5,2,'a'))
console.log(Calc(5,2,'s'))
console.log(Calc(5,2,'m'))
console.log(Calc(5,2,'d'))
console.log(Calc(5,2,'g'))


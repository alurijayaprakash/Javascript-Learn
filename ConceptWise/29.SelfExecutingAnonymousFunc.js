// Self executing anonymus functions also called as IIFE(Immediately invoked function expression)

// Syntax

(function(){
    statements
})();

// note :
// just write anonymus func then wrap it

// gen func
function Sumof2 (){
    return 1+2;
}

// anonymus func
const sumof2 = function(){
    return 1+2;
}

// Self executing anonymous functions 
// we need not to invoke this functions
// it will automatically run once program starts

// step-1
// function (){
//     return 1+2;
// }

// step-2 final
(function (){
    return 1+2;
})();
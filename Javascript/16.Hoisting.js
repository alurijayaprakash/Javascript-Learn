// variable ideally accessable with in scope of function
// var problem - we can access outside of the func too
// when we use var i = 0 in for loop
// it will automatically declare i variable outside of for loop
// then it will update values as per loop
// ie. reason it's accessable by outside
for (var i = 0 ; i < 10 ; i++){
    console.log(i)
}

console.log("outside ",i)


// but let keyword won't create outside variable
// because of side effects don't use var
// summary : use let insted of var
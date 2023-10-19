var User = function (firstName, loginCount){
    this.firstName = firstName;
    this.loginCount = loginCount;
    this.GetloginCount = function(){
        return `${this.firstName} is enrolled in logged in ${this.loginCount} times`
    };
};

var jayaprakash = new User("Jaya", 20);

console.log(jayaprakash.firstName); 
console.log(jayaprakash.loginCount); 
console.log(jayaprakash.GetloginCount()); 

// Proto type in Javascript

// if you want to add/inject new fields or funtionality to existing object
// use proto type

User.prototype.getFirstName = function(){
    return `firstname is ${this.firstName}`
};

console.log(jayaprakash.getFirstName())
console.log("-----------------")
// has Own Property

// sometimes due to misspelled we are trying to access unknown fields
// which results 'undefined' error
// so we can use this hasOwnProperty() to avoid this error

if (jayaprakash.hasOwnProperty("firstName")){
    console.log(jayaprakash.firstName);
    console.log(jayaprakash.getFirstName());
}
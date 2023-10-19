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


var User = {
    firstName : "Jaya",
    lastName : "Prakash",
    role : "admin",
    loginCount : 32,
    facebookSignIn : true,
    CourseList : [],
    buyCourse : function (courseName) {
        this.CourseList.push(courseName);
    },
    getCourseCount : function(){
        return `${this.firstName} is enrolled in total of ${this.CourseList.length} courses`
    },
}

console.log(User.firstName)
User.buyCourse("Javascript Fundamentals");
User.buyCourse("React Js");
User.buyCourse("Angular");
console.log(User.getCourseCount())
const User = require("./38.Classes.js");
// most common way(old) to import

const prakash = new User("Prakash", "p@mail.com");

console.log(prakash.getInfo());

prakash.enrollCourse("React Js");
prakash.enrollCourse("Golang");

console.log(prakash.getCourseList());

//print each item
prakash.courseList.forEach((c) => console.log(c))
// JavaScript Function bind()

// first Understand Reference and calling
// referenece = getInfo
// calling/invoking = getInfo()

// bind syntax : 
// func.bind(thisArg, arg1, ... argN)

// Def : The bind() method allows an object to borrow a method from another object without copying.

// Note : bind() will give you reference only, but you need to call it 

// object definition
const student1 = {
    name: "Jack",
    grade: "5",
    introduction: function () {
      console.log(this.name + "studies in grade" + this.grade + ".");
    },
  };
  
  // object definition
  const student2 = {
    name: "Jimmy ",
    grade: " 6",
  };
  
  // the object student2 is borrowing introduction method from student1
// result is reference only
  let result= student1.introduction.bind(student2);
  
  // invoking introduction() function by using result reference
  result();
  
  // Output:
  // Jimmy studies in grade 6.

// Example 2: Using bind() Method with two Parameters

// object definition
const student3 = {
    name: "Jack",
    introduction: function (score) {
      console.log(this.name + "scored " + score + " in an exam.");
    },
  };
  
  // object definition
  const student4 = {
    name: "Jimmy ",
  };
  
  // passing two parameters student2 and '95'
  let resultNew = student3.introduction.bind(student4, 195);
  
  // invoking result() function
  resultNew(); // Jimmy scored 95 in an exam.


  //ALTERNATIVE
  // bind reference and call is some times, time taking

  // use call alternatively
  
  student3.introduction.call(student4,998);

  // depends up on situation we can use

  
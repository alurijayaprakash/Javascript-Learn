// Arrays

let Colors = ["Red", "Blue", "Green"]

console.log(Colors.length)
console.log(Colors[2])
console.log("Colors Array",Colors)

// Add elements to arrays at last position
Colors.push("rose")
Colors.push("pink")
console.log("added 2 colors last",Colors)

// Add elements to arrays at first position
Colors.unshift("brown")
Colors.unshift("black")
console.log("added 2 colors first ",Colors)

// sort arrays
Colors.sort()
console.log("sorted array ",Colors)

// Access elements array
console.log("Access element at 4th index",Colors[4])

// Loop Array - General
for (let i = 0; i < Colors.length; i++){
    console.log("each Color",Colors[i])
}

// forEach - Loop
Colors.forEach(eachColor => console.log("foreach",eachColor))

console.log("~~~~~~~~~~")


// For of loop - item based loop
for (eachCol of Colors) {
    console.log(eachCol)
}

console.log("--------------")

//for i loop - Index Based- return index 
for (eachIndex in Colors) {
    console.log(Colors[eachIndex])
}




var User = ["AA", "BB", "CC", "DD"]
console.log("User",User)


User.pop() // removes last element
console.log("UserAfterPop",User)

// String to Array convert
// it's not possible from normal array, we can do it from array object

let NameList = Array.from("Hyderabad") 
console.log(NameList)

// Creating new Array object
let DellArr = new Array()
DellArr.push("T")
DellArr.push("E")
DellArr.push("L")
DellArr.push("A")
DellArr.push("N")
DellArr.push("M")
console.log("DellArr",DellArr)

// Fill "A" from in indexes 2,3,4 . 
// so we need to use range 2-5
// start value is inclusive, 5 is exclusive
DellArr.fill("A", 2, 5)
console.log("DellArr After fill",DellArr)
// if we did't specify start and end (2,5) , then it will fill entire array


//Slice
var UserX = ["AA", "BB", "CC", "DD", "EE", "FF", "GG", "HH"]
console.log("sliceX",UserX.slice(1,4))  // start value is inclusive, 5 is exclusive
// Another
console.log("sliceX2End",UserX.slice(1))  // start value is inclusive till end


var UserY = ["AA", "BB", "CC", "DD", "EE", "FF", "GG", "HH"]

//Splice
UserY.splice(1,3,"Deer")
// startcount = 1 , deletecount = 3 , 
// "BOB" = it may be list of items to be inserted inplace of deleted items
console.log("UserY.Splice", UserY)

//Another example
Colors = ["Red", "Blue", "white", "Dark", "M"]
Colors.splice(1,2,"A","B","C","D")
console.log("ColorsX",Colors)
// Previously we passed "Deer" only now we passed "A","B","C","D" 
// set of values, it will be inserted inplace of deleted items



// Array Functions

//1. Map
// map method is used when we want transformation of whole array.
// used to transform arrays
console.log(Colors.map(ele => ele.toUpperCase()))

NumList = [1,2,3,4,5,6,7,8,9,10]
console.log("Square",NumList.map(num => num*2))
console.log("Minus2",NumList.map(num => num/2))
console.log("Power2",NumList.map(num => num**2))
console.log("String",NumList.map(num => `${num} is good`))

// Another example
function Plus3(x) {
    return x+3
}

console.log("Plus3",NumList.map(Plus3))


// 2. Reduce
console.log("NumList=>",NumList)
console.log(NumList.reduce((total, num) => total + num)) //10
console.log(NumList.reduce((total, num) => total += num, 0)) //10

// Copy elements in to new Array
// Method-1
const copyNames = [...Colors]
console.log("CopyNames",copyNames)

// Method-2
const copyNames2 = Colors.slice()
console.log("CopyNames2",copyNames2)

// https://www.youtube.com/watch?v=xh7njXASFjU


// 3.Filter
//  filter is used when we want to filter the arrar to obtain required value.
// filter func is used to filter values inside an array

// filter even numbers fromNumlist
console.log(NumList.filter(num => num % 2 == 0))

const AllItems = [
    {EmpName : "Alex Ah", Salary : 200},
    {EmpName : "Bob KK", Salary : 2060},
    {EmpName : "Garath AS", Salary : 1200},
    {EmpName : "Shady RR", Salary : 5200},
    {EmpName : "cristine EV", Salary : 7200},
    {EmpName : "siri VD", Salary : 100},
    {EmpName : "Doreman DV", Salary : 66},
]

// return array having salary below 2000

console.log(AllItems.filter(AllItems => AllItems.Salary < 2000))


//Another example

function isGreaterThan5(x){
    return x > 5
}

const Greater5 = NumList.filter(isGreaterThan5)
console.log("Greater5",Greater5)

// 4.Find

const foundItem = AllItems.find((eachEmp) => {
    return eachEmp.EmpName === "siri VD"})

console.log(foundItem)

console.log(AllItems.find(eachOne => eachOne.EmpName === "siri VD"))

// 5.some

// membership check based on condition
// Has rule
// it will check wheather some items present in it based on condition
//  requirement - chec some of rich guys present in it 
console.log(AllItems.some(item => item.Salary > 2000))

const hasRichGuys = AllItems.some(item => item.Salary > 2000)
console.log(hasRichGuys);

console.log("-------------------")
// 6. every
// check each and every element based on rule
// Has rule
// it will check weather all items passed in given condition
// requirement : check every guy must earn more than $50
console.log(AllItems.every(item => item.Salary > 50))
console.log(AllItems.every(item => item.Salary > 500))


console.log("------every done-------------")


// 6.Includes
const Xlist = [3,5,7,9,11]
console.log(Xlist.includes(9))  //true



// 7. Reduce
// reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
// reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.
// do something with all elements like sum or max

// -------SUM----------

console.log(AllItems.reduce((Total, eachItem) => Total + eachItem.Salary, 0))

const TOT = AllItems.reduce((Total, eachItem) => {
    return Total + eachItem.Salary
    }, 0)
console.log("TOT", TOT)

// Another version
console.log(AllItems.reduce((Total, eachItem) => Total = Total + eachItem.Salary, 0))

const TOT2 = AllItems.reduce((Total, eachItem) => {
    return Total = Total + eachItem.Salary
    }, 0)
console.log("TOT2", TOT2)

// -------MAX----------

const output = NumList.reduce(function(maxVal, current) {
    if (current > maxVal){
        maxVal = current;
    }
    return maxVal;
}, 0);

console.log("MaxVal",output)

// ==============================USE ALL+++++++++++++++++++++

// Problem-1
// fetch first name from AllItems Object 
// Use MAX func to achive this
// getFirstname()
console.log(AllItems.map((item) => item.EmpName.split(" ")[0]))

//Problem-2
// How many Employees have salary more than 1000

const Morethan1000 = AllItems.reduce((UserCount, user) => {
    if (user.Salary > 1000){
        UserCount = UserCount + 1
    }
    return UserCount
}, 0)
console.log("Morethan1000", Morethan1000)

//Problem-3
// Get all Employees have salary more than 2000
// we can achive this by filter 

// filter
function GetEmp2000(x){
    if (x.Salary > 2000) {
        return x
    }
}
console.log("GetEmp2000",AllItems.filter (GetEmp2000))
// outbput :-
// [
//     { EmpName: 'Bob KK', Salary: 2060 },
//     { EmpName: 'Shady RR', Salary: 5200 },
//     { EmpName: 'cristine EV', Salary: 7200 }
//   ]

// Get all Employees Names have salary more than 2000

console.log("GetEmp2000Names",AllItems.filter (GetEmp2000).map(item => item.EmpName))


// Achive using reduce()

function getName2000(Result,item){
    if (item.Salary > 2000) {
        Result.push(item.EmpName)
    }
    return Result
}

console.log("getName2000",AllItems.reduce(getName2000,[]))

// map, filter & reduce 🙏 Namaste JavaScript Ep. 19 
// https://youtu.be/zdp0zrpKzIE

//Problem-4
// Get all Employees LastName have salary more than 2000
// we cah achive this by filter and map
// step-1
// AllItems.filter(emp => emp.Salary > 2000) here we get array of all emplyee objects same as above
//step-2 use chaining
console.log("Problem-4",AllItems.filter(emp => emp.Salary > 2000).map(item => item.EmpName.split(" ")[1]))

//Problem - 4.1
// achive Probelm4 using reduce func

AllItems.reduce()


//Problem-5
// Get Employes count based on Salary bracket
// example obj = {1000: 3, 2000: 1, 5000:4}

function getEmpSlab(FinalObj, emp) {
    if (emp.Salary < 2000) {
        if (FinalObj["<2000"]) {
            FinalObj["<2000"] = ++FinalObj["<2000"]; //less than "<2000"
        }else {
            FinalObj["<2000"] = 1;
        }
    } else if (emp.Salary >= 2000 && emp.Salary < 5000) {// between 2000 to 5000
        if (FinalObj["2000-4999"]) {
            FinalObj["2000-4999"] = ++FinalObj["2000-4999"]; //less than 2000
        }else {
            FinalObj["2000-4999"] = 1;
        };
    } else {
        if (FinalObj[">5000"]) {
            FinalObj[">5000"] = ++FinalObj[">5000"]; //greater than ">5000"
        }else {
            FinalObj[">5000"] = 1;
        };
    }
    return FinalObj
}
const SalarySlab = AllItems.reduce(getEmpSlab,{});
console.log("SalarySlab",SalarySlab)
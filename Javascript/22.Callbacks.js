// Callbacks
// def :
// Any function that is passed as an argument to another function
// so that it can be executed in that other function is called as a callback function

const greetUser = (username, callbackX) => {
    console.log("start..")
    console.log("func call : ", callbackX(username))
    console.log("end..")

}

const cbfunc = username => {
    return "Hello " + username
}
greetUser("Prakash", cbfunc)

console.log("-------------")
// inline func
greetUser("Vanila", (u) => {
    return "Hey " + u
})
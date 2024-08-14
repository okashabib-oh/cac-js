let empStr = " "
console.log(empStr.length) // 1

if (empStr.length == 2) {
    console.log("Length is 2")
} // this will not execute because the length is 1

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

let games = []
if (games) {
    console.log("in the Games")
} // this will execute because of truthy values

let emp = ""
if (emp) {
    console.log("In the emp")
}// this will not execute because of empty string is false

let info = {}
console.log(info.length)
if (info) {
    console.log("Big Dawgs!")
}// this will execute because of truthy values

if (Object.keys(info).length === 0) {
    console.log("No Info in the object")
}  // Object.keys(info) returns array

let userLoggedInWithEmail = true
let userLoggedInWithProvider = false

// OR Operator || check if any 1 of the condition is true it will execute its block of code

if (userLoggedInWithEmail || userLoggedInWithProvider) {
    console.log("User logged in!")
}

// AND Operator && check all the condition should true then execute its block of code otherwise code won't execute
// this won't execute because of one condition is false
if (userLoggedInWithEmail && userLoggedInWithProvider) {
    console.log("Logged in!")
}

if (!userLoggedInWithProvider) {
    console.log("Hello")
} // this code will execute because it is not true, ! operator checkking not true and ofcourse it is not true

let count = 9
if (count < 10) {
    console.log(`Count was ${count}`)
    count++
    console.log(`After incrementing count is now ${count}`)
}
console.log(count) // here count is also incremeneted 10

if (count <= 12) {
    count++
    console.log(`Count is now ${count}`) // count is 11 now
}

console.log(count) // here also 11

if (count > 12) {
    console.log("Count is more than 12")
} else {
    count++
    console.log("Count is below 12")
}
console.log(count) // 12

let myName = "Okasha"
if (myName === "okasha") { // case sensitive
    console.log(`Yes, your name is ${myName}`)
} else {
    console.log(`No, Your name is ${myName}`)
}

if (myName == "okasha") { // case sensitive double equal == will also give the same as triple === equal
    console.log(`Yes, your name is ${myName}`)
} else {
    console.log(`No, Your name is ${myName}`)
}

if(12 === "12"){ // strict checking with === type and data
    console.log("Yes, 12")
}else{
    console.log("Type not match")
}
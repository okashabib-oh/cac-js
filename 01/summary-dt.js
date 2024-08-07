// Primitive dataTypes


// string, number, boolean, bigInt, null, undefined, symbol

let language = "JavaScript"; // string
let year = 1995 // number
let jsMadeInTenDays = true // boolean
let bigNumber = 11111111111111111n // bigint upto 15 digits append n
let err = null // null
let undefinedVar; // undefined
let id = Symbol(123)// symbol

// Reference Types OR (Non Primitive) dataTypes

// Array , Objects, functions

let myArr = ["Chiron", "Divo", "Gemra"] // array
console.log(typeof myArr); // object

let myObj = {
    name: myArr[0],
    age: year,
    id: id
}  // Object

// console.log(myObj);
console.log(typeof myObj); // object


const myFun = function (){
    console.log("GLORY");
}

console.log(typeof myFun); // function


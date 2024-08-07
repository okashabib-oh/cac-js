let ageStr = "21" // type == string
// console.log(typeof ageStr);  // string

// converting into number
let convToNum = Number(ageStr)
// console.log(convToNum);


let numberStr = "76gtlo"  // type == string
// console.log(typeof numberStr) 

let strToNumber = Number(numberStr) // type == number
// console.log(typeof strToNumber);
// console.log(strToNumber) // NaN converting string to number is NaN => Not a Number

let booleanConv = 1
// console.log(typeof booleanConv); // type == number

let convToBool = Boolean(booleanConv) // == true OR if booleanConv == 0 it is false
// console.log(convToBool); // true

console.log(typeof undefined) // undefined
console.log(typeof null) // object

console.log(Number(undefined)); // NaN
console.log(Boolean(null)); // 0
console.log(Boolean(undefined)); // false

console.log(String(null))
console.log(String(undefined))


// *************************OPERATIONS**************************

console.log(21+"212");

console.log(21+21+"21"+"22"+90); //42212290


console.log(90**9); // power 9

console.log(2%3);

console.log(+true) // 1
console.log(+"") // 0
console.log(+10);
console.log(+"10");

let counter = 0
counter++
console.log(counter);


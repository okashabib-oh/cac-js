function printXyz() {
    console.log("Hello")
}

//printXyz()

function addTwoNum(n1, n2) {
    let result = n1 + n2
    return result
}

const resultAdd = addTwoNum(21, 33)

//console.log(resultAdd);


function welcomeUser(userName) {

    // checking if username is defined or not
    if (!userName) {
        return 'Please enter username'
    }

    return `Welcome ${userName}`
}

//console.log(welcomeUser('Okasha'))

// giving default value to the parameter, so when calling function don't need to provide argument, if provide argument it will overwrite the argument value

function myName(name = "Okasha") {
    return `My name is ${name}`
}

//console.log(myName())

// ... spread operator when not knowing how many argument has passed when function called it returns array

function nums(...nums) {
    return nums
}

//console.log(nums(123, 432, 532, 631, 64, 4343, 322))


// rest operator ... identify with 3 dots
// rest operators value comes in array;
function operation(num1, num2, ...restNums) {

    let sum = num1 + num2
    let result = [];
    for (let i = 0; i < restNums.length; i++) {
        result += restNums[i]
    }
    const res = sum * result
    return res;
}

//console.log(operation(12, 12, 33, 99, 32, 11));  // 815837064

const [x, y, z, e, ...p] = [12, 32, 11, 44, 44, 53, 122, 87, 23] // destructuring
let sumParam = x + y + z + e
for (let i = 0; i < p.length - 1; i++) {
    let result = p[i] + p[i + 1];
    console.log(`${p[i]} + ${p[i + 1]} = ${result}`)
}


// functions types

const fn1 = function () {
    return "Chiron Sports"
}
fn1()

// arrow functions
const fn2 = () => "M5 F90"
fn2()

//normal function
function fn3() {
    return "M4 COMP"
}

fn3()

//returning with round bracket without return keyword
const fn4 = () => ('R-35')
fn4()

//returning arrow functions with return keyword if curly braces
const fn5 = () => {
    return "Force"
}
console.log(fn5())
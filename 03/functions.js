function printXyz() {
    console.log("Hello")
}

printXyz()

function addTwoNum(n1, n2) {
    let result = n1 + n2
    return result
}

const resultAdd = addTwoNum(21, 33)

console.log(resultAdd);


function welcomeUser(userName) {

    // checking if username is defined or not
    if (!userName) {
        return 'Please enter username'
    }

    return `Welcome ${userName}`
}

console.log(welcomeUser('Okasha'))

// giving default value to the parameter, so when calling function don't need to provide argument, if provide argument it will overwrite the argument value

function myName(name = "Okasha") {
    return `My name is ${name}`
}

console.log(myName())

// ... spread operator when not knowing how many argument has passed when function called it returns array

function nums(...nums) {
    return nums
}

console.log(nums(123, 432, 532, 631, 64, 4343, 322))


// this will sum first two numbers and other argumrnts will be multiply
function operation(num1, num2, ...restNums) {
    return num1 + num2 * restNums
}

console.log(operation(22, 44, 21, 33))

console.log(22 + 32 * [21, 33, 43])
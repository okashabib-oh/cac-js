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


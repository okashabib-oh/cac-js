// stack memory (Primitive dataTypes)
// heap memory (Non Primitive dataTypes)

// heap memory gets a refernce stack memory get a copy of the value

// stack example

let valOne = "BJ40"
let copyValOne = valOne
console.log(copyValOne); // "BJ40"
copyValOne = "E63 S"
console.log(copyValOne); // "E63 S"  valOne still BJ40

// heap example

let myObj = {
    name: valOne,
    email: "me@eg.com"
}

myObj.name = "FE!N"
console.log(myObj);

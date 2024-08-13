if (true) {

    //block scope;
    let a = 6
    const b = 23

    // can be access var keyword variable outside this condition
    var c = 3
}
//console.log(a) // undefined
//console.log(b) // undefined
//console.log(c) // var c value will pe print here although it is in if scope, var shouldn't use (a and b won't print because it is with let and const)


// block scope
{
    // can access "c" here also
//    console.log(c)
}

//if (true) {
//    const githubUrl = "https://github.com"
//    const githubUserName = 'okashabib-oh'
//    console.log(githubUrl + "/" + githubUserName)
//}

//scope in functions inside functions 
function githubUrl() {
    const url = "https://github.com"

    function githubUserName() {
        const name = 'okashabib-oh'
        return name;
    }

    // i can't access name variable which is in githubUserName() function here but for now I can call the githubUserName() function which is returning the name variable
    // console.log(name)

    return url + "/" + githubUserName();
}

//console.log(githubUrl());


if (true) {
    const category = 'vehicle'
    if (category) {
        const name = 'Chiron'
//        console.log(category)
    }
// can't access name here only accessible in condition   
//    console.log(name)
}

// can't access name and category cause of block scope only accessible in condition

//console.log(category)
//console.log(name)

//can access before implementation

//hey('Okasha')

function hey(name) {
    console.log(`Hey there ${name}`)
}


//can't access before initialization
//bye('Okasha') // error of initialization
const bye = function (name) {
    console.log(`Bye there ${name}`)
}

//bye('Okasha')

//const arr = [12, 32, 32, 54, 12, 3342]
//arr.map((el) => {
//    console.log(el)
//})

function gee() {
    console.log(this)
}

//gee()
// arrow function

//const fis = () => "hello" // returning hello without return keyword

//console.log(fis())

const addition = (num1, num2) => (num1 + num2) // can return with round bracket also but is using curly braces there should be return keyword

//console.log(addition(12, 8))

//const thising = () => this // empty object return
//console.log(thising())

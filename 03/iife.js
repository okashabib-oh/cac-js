//Immediately Invoked Function Expression
// syntax ({})()    last round bracket is for passing arguments and curly braces for function logic and first round bracket is for function

(function (langName) {
    console.log(`My fav. language is ${langName}`)
})('JavaScript'); // ; semicolon is mandatory

//without function keyword

((langName) => {
    console.log(`My fav. Backend language is ${langName}`)
})('Node JS');

(() => {
    console.log("Hello IIFE")
})();

// printing return value 
console.log(((num1, num2) => {
    return num1 + num2
})(21, 21));

console.log(((num1, num2) => {
    return num1 * num2
})(99, 9))
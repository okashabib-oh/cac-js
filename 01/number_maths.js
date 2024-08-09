let myScore = 2442842.863823
// console.log(myScore.toExponential(2));
// console.log(myScore.toLocaleString());
console.log(new Number(myScore.toFixed(2))); // toFixed give if the value is in points, the value after points will convert to the number of according to arg.

console.log(myScore.toString()); // converts into string
console.log(myScore.toPrecision(3));
console.log(Math.abs(-212.322)); // turns negative value into positive
console.log(Math.sqrt(169));  // gives the square root of the number gives in the method arg. 13 * 13 == 169

let min = 10
let max = 20

console.log(Math.floor((Math.random() * (max - min + 1)) + min));  // it will always give value 10 or above 10 

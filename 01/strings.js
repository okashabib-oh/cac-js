let myName = "Okasha"
console.log(`My name is ${myName}`);

myName += " Habib"
console.log(`My name is ${myName}`);

let myAge = 21

console.log(`My name is ${myName} and I am ${myAge} years old.`);

myName.toUpperCase(); // this method won't work seperately
console.log(`My name is ${myName.toUpperCase()} and I am ${myAge} years old.`); // upper case method will work here

let car = new String("Bugatti Chiron") // string object to get the values with key value pair
console.log(car);

console.log(car.toUpperCase()); // converting to upper case

console.log(car.charAt(4)); // cahrAt method tells the position of the element

console.log(car.length); // give the length of the string in it

console.log(car.slice(0,7));

console.log(car.trim());

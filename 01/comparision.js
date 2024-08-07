let a = 22
let b = 12

console.log(a < b);  // false

console.log(12 >= '12') // true
console.log(12 <= '12') // true

console.log(b != '12'); // false
console.log(b === 12); //true

console.log('12' === b); // false

console.log(12 == '12'); // true

// null will convert to zero in comparision
console.log(null > 0);  // false
console.log(null >= 0); // true
console.log(null == 0); // false

console.log("******UNDEFINED*******");
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined === undefined);
console.log(undefined == undefined);

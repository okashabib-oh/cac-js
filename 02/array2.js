let numbers = [1, 2, 3, 4, 5];
let moreNumbers = [6, 7, 8, 9, 10]
//console.log(numbers)
//console.log(numbers[0]) // prints 1st element in the array, 0 is the index of it 
//console.log(moreNumbers[0])


// combining both arrays

// 1st method
let combinedArray1 = numbers.concat(moreNumbers)
//console.log(combinedArray1)

// 2nd method
let combinedArray2 = [...numbers, ...moreNumbers]
//console.log(combinedArray2)

//numbers.push(moreNumbers)

//console.log(numbers)
let dArray = [23, 43, 12, 90, [12, 10, 78, 34], 22, 99, 12, [90, 12, 32, [32, 11, 9], 90, 89]]
//console.log(dArray)
//console.log(dArray.flat(Infinity)) // it returns new array with sub array combines with it (if Infinity Property is passed) otherwise can put number of how much you want to combine

// checing if the variable is array or not

let checkArray = ["Okasha", 21, true, "okasha@gmail.com", "okasha_habib"]
console.log(Array.isArray(checkArray))
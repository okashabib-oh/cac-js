let myArr = ["dis", 21, false, null]
//myArr.forEach((elem) => {
//    console.log(elem)
//})
//myArr.map((items,ind) => {
//    console.log(items, ind)
//})

let ar = ["okasha", "rafay", "subhan", "muneer", "sufyan", "hasan"]
ar.forEach((items, index) => {
    console.log(`${index} => ${items}`)
})

//let arSp = ar.splice(1,3) // remove the value on the argument numbers index (in this it will remove items of index 1, 2 and 3) and change the original array also
//console.log(arSp)
//console.log(ar)

//let arSl = ar.slice(1,3) // it will remove items of [index 1 and 2 not 3] and won't change the original array
//console.log(arSl)
//console.log(ar)

ar.push("saboor") // it will add the element at the last index OR at the end of the array
console.log(ar)
ar.unshift('uzair') // it will add the element at the first index OR at the start of the array
console.log(ar)

ar.pop() // it will remove the last element of the array
console.log(ar)
ar.shift() // it will remove the first element of the array
console.log(ar)

console.log(ar.includes('subhan')) // it will return boolean, check the element is in the array or not


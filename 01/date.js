let myDate = new Date();

console.log(myDate.toLocaleString({
    timeZone: 'UTC',
    hour12: false,
}))

console.log(myDate.toString()) // Sat Aug 10 2024 01:53:19 GMT+0500 (Pakistan Standard Time)
console.log(`${myDate.getDate()}/${myDate.getMonth() + 1}/${myDate.getFullYear()} ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()} ${myDate.getHours() < 12 ? 'AM': 'PM'}`)
console.log(myDate.toDateString()) // Sat Aug 10 2024

console.log(myDate.toLocaleString()) // 8/10/2024, 1:56:19 AM

console.log(myDate.toLocaleTimeString()) // 1:57:00 AM

let myNewDate = new Date() // other method of date Obj

console.log(`${myNewDate.toLocaleDateString()} ${myNewDate.toLocaleTimeString()}`) // 8/10/2024 2:00:13 AM
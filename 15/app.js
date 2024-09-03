function createUser(name, score){
    this.name = name
    this.score = score
}

createUser.prototype.printName = function (){
    console.log(this.name)
}
const n = new createUser("Okasha", 657)
// n.printName()

const myName = "   Okasha        "
// console.log(myName.length);
String.prototype.trueLength = function () {
    console.log(this);
    console.log(this.trim().length);   
}
// myName.trueLength()

// "    geo      ".trueLength()

Array.prototype.deStructure = function (arr){
    const [first, second, ...third] = arr
    console.log(first, second, third)
}

const myArr = ["Okasha", "Hello", "Hi", "Bye", "GT3", "992"]
Array.prototype.deStructure(myArr)
let myArr = ["GT3 RS", "SX 20", "R-35", "M5 E60", "E63 S", "JUTTNI"]
for (const elem of myArr) {
//    console.log(elem)
}

// Map() is not iteratable
const map = new Map()
map.set('benz', 'E63 S')
//console.log(map)
map.set('porsche', 'GT3 RS')
//console.log(map)

const myName = "Okasha Habib"
for (const name of myName) {
    if (name == " ") {
        break
    }
//    console.log(name)
}

for(const name in myName){
    //    name gives keys in object and index in strings or arrays
//    console.log(myName[name])
}

// destructuring to get values from Map() obj, [m] gets the key and [v] gets the value
for(const [m, v] of map){
    console.log(m,v)
}
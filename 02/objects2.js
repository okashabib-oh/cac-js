//singleton object
//const appUser = new Object()
//console.log(appUser)

// non singleton Object
const appUser = {

    email: "okasha@h.com",
    name: {
        username: {
            firstName: "Okasha",
            lastName: "Habib"
        }
    },
    id: "3c49kimWe90",
    gneder: 'Male'
}

const user = {}

user.id = "u1"
user.name = "Okasha Habib"
user.age = 21
user.gender = "Male"
user.welcome = function () {
    return `Welcome ${this.name}` // this is refering to current object in this function it will return the value of name key "Okasha Habib" => "Welcome Okasha Habib"
}
//Object.assign()

const combinedObj = {...user, ...appUser} // combining object *same keys will overwrite* 
//console.log("OBJECT COMBINED: ", combinedObj)

const obj1 = {1: 'a', 2: 'b', 3: 'c'}
const obj2 = {4: 'd', 5: 'e', 6: 'f'}
const obj3 = {7: 'g', 8: 'h', 9: 'i'}
//console.log(obj1[1], obj2[5], obj3[9]) // accessing a value from each object

const combining = {...obj1, ...obj2, ...obj3}
//console.log(combining[6]) // accessing 6 key value after combining object

// array of Object

const usersList = [
    {
        id: 1,
        name: 'Okasha',
        email: 'okasha@gmail.com'
    },
    {
        id: 2,
        name: 'Rafay',
        email: 'rafay@gmail.com'
    },
    {
        id: 3,
        name: 'Subhan',
        email: 'subhan@gmail.com'
    }
]

//console.log(usersList[0]['name']) // accessing name of first object which is on 0 index of the array in the array of object
//console.log(usersList[1]['id']) // accessing id of second object which is on 1 index of the array in the array of object

const carSpecs = {
    name: 'Bugatti Chiron',
    horsePower: 1500,
    price: 3300000,
    topSpeed: '420 km/h (261 mph)'
}

//console.log(carSpecs.hasOwnProperty('topSpeed')) // checkking the object has property 'topSpeed' will return boolean

//console.log(carSpecs)

const assignObj = Object.assign(obj1, obj2, obj3) // one more way of combining objects in one object
//console.log(assignObj)


// scope of object
    [
    {
        name: carSpecs.name,
        horsePower: carSpecs.horsePower,
        price: carSpecs.price,
        topSpeed: carSpecs.topSpeed
    }
    ]

// getting keys of the Object

const getKeys = Object.keys(carSpecs)
console.log(getKeys)

// getting values of object

const getValues = Object.values(carSpecs)
console.log(getValues)

// gives an array with each key and value in sub-array
console.log(Object.entries(carSpecs))
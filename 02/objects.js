let myId;

// object literal
let userInfo = {
    name: 'Okasha',
    age: 21,
    email: 'okasha@gmail.com',
    isPaid: true,
    status: 'active',
    [myId]: '93xb834nswk94', // Symbol unique
    greeting: function (){
        console.log(`Hello Dear, ${this.name}`)
    }
}

userInfo.age = 22 // changing value of the age key
userInfo.createdAt = new Date() // adding new keys;

console.log(userInfo)

// Freezing object so it can't be chnage anymore

Object.freeze(userInfo)

// now if I want to change something in the object I can't change it OR I cannot add more keys in it


// it won't be add in the object because of Object freeze
userInfo.team = "Silvia"
console.log(userInfo)
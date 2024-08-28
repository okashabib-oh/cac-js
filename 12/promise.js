const promiseTest = new Promise((res, rej) => {
    res({name: 'Okasha', email: 'okasha@gmail.com'})
    rej("Something went wrong!")
})
promiseTest.then((data)=>{
    console.log(data);
})

new Promise((res, rej) => {
    const userData = {
        name: "Okasha",
        email: "okasha@gmail.com",
        age: 21,
        isPaid: true,
        hobbies: ["football", "motorsports", "cricket"]
    }
    setTimeout(()=>{
        res(userData)
    },1000)

    // res(userData) // without timeout function data will be return
    rej("User Data not found")

}).then((data) => {
    console.log(data);

    let name = data?.name
    console.log(name);

    let hobbies = data?.hobbies
    console.log(hobbies);
    hobbies?.forEach((element, index) => {
        console.log(element, index);        
    });
}).catch((err) => {
    console.log(err);
})

async function getUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users').then((data) => data.json())
    const data = await resp
    console.log(data);    
}
// getUsers()


const usersInfo = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json())

    const data = await res
    data.map((d)=>{
        console.log('ID: ', d.id);        
        console.log("Name: ", d.name);
        console.log("Email: ", d.email);
        console.log("Username: ", d.username)
        console.log("Phone: ", d.phone);
        console.log("Website: ", d.website);
        console.log("Company Name: ", d.company.name);
        console.log("Catch Phrase: ", d.company.catchPhrase);
        console.log("BS: ", d.company.bs);
        console.log("Street: ",d.address.street);
        console.log("Suite: ", d.address.suite);
        console.log("City: ", d.address.city);
        console.log("Zip Code: ", d.address.zipcode);
        console.log("LAT: ", d.address.geo.lat);
        console.log("LON: ", d.address.geo.lng);
    })
}
setTimeout(usersInfo, 1000)

new Promise((res, rej) => {
    let data = {street: "Kattie Turnpike", city: "Lebsackbury", zipCode: "31428-2261"}

    res(data)

    rej("Address Data Not Found!")

}).then((data) => console.log(data)).catch((err)=>console.log(err))

new Promise((res, rej) => {
    let data = {
        scrollbarstreet:  "Dayna Park",
        suite:  "Suite 449",
        city:  "Bartholomebury",
        zipCode:  "76495-3109"
    }
    res(data)
    rej("404")
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})
const myObj = {
    'balance': "$2100",
    'amount': '$99',
    'products': ['mojito', 'steak', 'kebab'],
    'payStatus': 'Pending'
}
for (const keys in myObj) {
    if (keys == 'products') {
        continue
    }
//    console.log(myObj[keys])
}
myObj.products.forEach((items) => {
//    console.log(items)
})


const cars = [
    {
        name: '992 GT3 RS',
        price: 29000
    },
    {
        name: 'R-35',
        price: 12000
    },
    {
        name: 'E63 S',
        price: 33000
    },
    {
        name: '20 SX',
        price: 1449
    }
]

cars.map((elem, index) => {
//    console.log(elem.name, elem.price)
//    console.log(index)
})

cars.forEach((elem, index) => {
//    console.log(elem.name, elem.price)
//    console.log(index)
})

function loggingVal(val) {
    console.log(val)
}

cars.forEach(loggingVal)
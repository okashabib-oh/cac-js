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
    console.log(myObj[keys])
}
myObj.products.forEach((items) => {
    console.log(items)
})
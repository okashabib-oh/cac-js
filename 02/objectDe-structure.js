const productInfo = {
    productName: 'Blue Top',
    productDescription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
    productPrice: 999,
    productCategory: 'Clothing',
    productBrand: 'Etc Mania'
}

const {productDescription} = productInfo // getting productDescription key value from productInfo object
//         ^
//         |  De-Sturing 
//console.log(productDescription)

// short name
const {productDescription: description} = productInfo // now I can access with description instead of productDescription
console.log(description)
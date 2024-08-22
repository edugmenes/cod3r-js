function createPerson(name, surname) {
    return {
        name: name,
        surname: surname
    }
}

function createProduct(name, price, discount) {
    return {
        name: name,
        price: price,
        discount: discount
    }
}

console.log(createPerson('Ana','Silva'))
console.log(createProduct('Product', 100.99, 10))
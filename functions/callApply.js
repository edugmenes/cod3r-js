function getPrice(tax = 0, coin = 'R$') {
    return `${coin} ${this.price * (1 - this.disc) * (1 + tax)}`
}

const produto = {
    name: 'Notebook',
    price: 4589,
    disc: 0.15,
    getPrice
}

globalThis.price = 20;
globalThis.disc = 0.1;
console.log(getPrice());
console.log(produto.getPrice());

const carro = { 
    price: 49990,
    disc: 0.2
}

console.log(getPrice.call(carro));
console.log(getPrice.apply(carro));

console.log(getPrice.call(carro, 0.17, '$')); // paremeters passed directly
console.log(getPrice.apply(global, [0.17, '$'])); // paremeters passed using an array
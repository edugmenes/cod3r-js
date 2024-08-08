let maiorOuIgual = (primeiroNumero, segundoNumero) => {
    if (typeof primeiroNumero == typeof segundoNumero){
        return primeiroNumero >= segundoNumero;
    }
    else {
        return false;
    }
}

console.log(maiorOuIgual(0, 0));
console.log(maiorOuIgual(0, "0"));
console.log(maiorOuIgual(5, 1));






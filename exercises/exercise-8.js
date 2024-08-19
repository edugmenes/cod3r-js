const multiplyNumbers = (numberOne, numberTwo) => {
    if (numberOne < 0 || numberTwo < 0) {
        throw new Error("Os números devem ser maiores ou iguais a zero.");
    }
    else {
        let resultado = 0;
        
        for (let i = 0; i < numberTwo; i++){
            resultado += numberOne;
        }

        return resultado;
    }
};

console.log(multiplyNumbers(5, 5));
console.log(multiplyNumbers(0, 7));
let notas = [7.7, 8.9, 6.5, 7, 8, 3, 4.5, 10];

// Sem callback:
let notasBaixas1 = [];

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]);
    }
}

console.log(notasBaixas1);

// Com callback:
/* Método filter retorna true ou false, se o retorno for true, o valor entrará 
no novo array. Esse método não altera o array original notas, ele retorna um novo
array */
notasBaixas2 = notas.filter(nota => nota < 7) 

console.log(notasBaixas2);

// deixando um pouco mais elegante:
const retornaNotasMenorQue7 = nota => nota < 7
let notasBaixas3 = notas.filter(retornaNotasMenorQue7);

console.log(notasBaixas3);
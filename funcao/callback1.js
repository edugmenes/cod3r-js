const fabricantes = ["Mercedez", "Audi", "BMW"]

// A partir desse arquivo passei a construir todas as funções como arrow
// para praticar essa estrutura
let imprimir = (nome, indice) => {
    console.log(`${indice + 1}. ${nome}`);
}

// Para cada elemento do array ele chama (callback) a função
fabricantes.forEach(imprimir);
fabricantes.forEach(fabricante => console.log(fabricante));
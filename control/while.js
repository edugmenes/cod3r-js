//para quantidade indeterminada de repetições
function getInterioAleatoiroEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
while (opcao != -1){
     opcao = getInterioAleatoiroEntre(-1, 10)
     console.log(`Opcao escolhida foi ${opcao}.`)
}

console.log('Fim')
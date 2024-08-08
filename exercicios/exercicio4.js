let nomeDoMes = (numeroDoMes) => {
    let mesesDoAno = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'    
    ];
    let stringDoMes = mesesDoAno[numeroDoMes - 1];
    return stringDoMes;
}

console.log(nomeDoMes(1));
console.log(nomeDoMes(4));

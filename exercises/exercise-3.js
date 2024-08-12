function calcularSalario(qtdHorasTrabalhadas, salarioPorHora){
    let salarioMensal = qtdHorasTrabalhadas * salarioPorHora;
    return(`Salário igual a R$ ${salarioMensal}`);
}

console.log(calcularSalario(150, 40.5));
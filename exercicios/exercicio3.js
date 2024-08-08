let calcularSalario = (qtdHorasTrabalhadas, salarioPorHora) => {
    let salarioMensal = qtdHorasTrabalhadas * salarioPorHora;
    console.log(`Salário igual a R$ ${salarioMensal}`);
}

calcularSalario(150, 40.5);
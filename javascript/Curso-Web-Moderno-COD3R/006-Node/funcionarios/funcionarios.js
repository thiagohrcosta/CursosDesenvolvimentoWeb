const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


// Desafio
// Localizar funcionário conforme requisitos abaixo:
// Gênero: Feminino, nacionalidade: Chinesa, Salário: Menor salário

// Criar função para filtrar chineses
// Criar função para filtrar mulheres chinesas
// Criar função de agregação para pegar um único funcionário com o menor salário

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}



axios.get(url).then(response =>{
    const funcionarios = response.data
    console.log(funcionarios)

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})


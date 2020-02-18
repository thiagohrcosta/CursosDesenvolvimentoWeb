/* São expressões que utilizam operadores aritméticos e funções 
   aritméticas envolvendo constantes e variáveis

*/

// Exemplo 1

const a = 50
const b = 40
console.log(a + b)

// Exemplo 2
const soma = (a, b) => a + b
console.log(soma(50, 40))

// Expressões literais
/* São as expressões com constantes e/ou variáveis que tem como resultado valores
literais. Iremos utilizar as expressões literais na atribuição de valor para uma 
variável ou constante. */

const nome = 'Jose da Silva'
const nota1 = 10
const nota2 = 6
const nota3 = 7
const media = (nota1 + nota2 + nota3) / 3
console.log(`O aluno ${nome} obteve média ${media.toFixed(2)}.`)

// Exemplo 3 - Expressões Relacionais
/* São expressões compostas por outras expressões ou variáveis numéricas
   com operadores relacionais. As expressões relacionais retornam valores
   verdadeiro ou falso.
   > >= < <=  == !=

*/

const nomeUsuario = 'Manoel'
if (nomeUsuario != 'Manoel'){
    console.log('Usuário não identificado')
}
else{
    console.log(`Bem vindo ${nomeUsuario}`)
}

const variavel1 = 10
const variavel2 = 9
if (variavel1 < variavel2){
    console.log(`${variavel1} é menor que ${variavel2}`)
}
if (variavel1 == variavel2){
    console.log(`${variavel1} é igual ${variavel2}`)
}
else{
    console.log(`${variavel1} é maior que ${variavel2}`)
}

// Tomadas de decisão
/* 
   Quando escrevemos programas, geralmente ocorre a necessidade de decidir
   o que fazer dependendo de alguma condição encontrada durante a execução
*/

const cliente = 'João Batista'
const cartao = false
if (cartao == true){
    console.log('Digite o número do cartão')
}
else{
    console.log('Infelizmente só realizamos venda por cartão. Fim.')
}

// Tomada decisão 2 = Aluno

const aluno = 'Carlos'
const alunoProva1 = 6
const alunoProva2 = 8
const alunoProva3 = 6

const mediaAprovacao = (alunoProva1 + alunoProva2 + alunoProva3) / 3
if (mediaAprovacao >= 7.1){
    console.log(`${aluno} parabéns você foi aprovado(a), sua média foi ${mediaAprovacao.toFixed(2)}`)
}
else{
    console.log(`${aluno} infelizmente você não foi aprovado(a), sua média foi ${mediaAprovacao.toFixed(2)}`)
}

// Aluno 2

const aluno2 = 'Bárbara'
const aluno2Prova1 = 8
const aluno2Prova2 = 8
const aluno2Prova3 = 6

const mediaAprovacao2 = (aluno2Prova1 + aluno2Prova2 + aluno2Prova3) / 3
if (mediaAprovacao2 >= 7.1){
    console.log(`${aluno2} parabéns você foi aprovado(a), sua média foi ${mediaAprovacao2.toFixed(2)}`)
}
else{
    console.log(`${aluno2} infelizmente você não foi aprovado(a), sua média foi ${mediaAprovacao2.toFixed(2)}`)
}


// FUNCIONÁRIO QUE VENDER MAIS QUE R$ 10.000,00 GANHA 10% A MAIS

const funcionario1 = 'Gustavo'
const venda1 = 4300
const venda2 = 3000
const venda3 = 3500

const totalVendas = venda1 + venda2 + venda3
const bonus = totalVendas * 0.1

if (totalVendas >= 10000){
    console.log(`Parabéns ${funcionario1}, neste trimestre você vendeu R$${totalVendas.toFixed(2)}, e receberá de bônus R$${bonus.toFixed(2)} `)
}
else{
    console.log(`${funcionario1} infelizmente você não bateu a meta trimestral.`)
}
// let e const

{
    var a = 2
    let b = 3
}

console.log(a)

// console.log(b)  --> Não se encontra definido no escopo da linha 10.

// Template String - Inserir variáveis com ${}
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)

const [x, y] = [1, 2, 3]
console.log(x, y)

const { idade, nome } = { nome: 'Ana', idade: 9}
console.log(nome, idade)
console.log(`A aluna ${nome}, tem ${idade} anos de idade.`)
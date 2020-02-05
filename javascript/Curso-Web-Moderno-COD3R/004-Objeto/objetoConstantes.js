// pessoa -> 123 (endereço de memória 123) {...objeto criado...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa vai receber um novo objeto que encontra-se em outro endereço referenciado
//pessoa = { nome: 'Ana' }

Object.freeze(pessoa)

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
console.log(pessoa.nome)
console.log(pessoa)
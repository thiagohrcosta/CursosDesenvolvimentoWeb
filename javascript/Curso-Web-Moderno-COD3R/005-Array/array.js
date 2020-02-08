console.log(typeof Array, typeof new Array, typeof [])

// A boa prática diz que o ideal é trabalhar com dados homogêneos dentro de 
// um array. A mistura de dados torna complexo inclusive o resgate dos dados.
// A flexibilidade do array não significa que se deve usá-lo. 

let aprovados = new Array('Bia', 'Carlos', 'Ana')

console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // não pertence ao array. Retorna undefined.

aprovados[3] = 'Paulo'
aprovados.push('Maria')

console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'João'

console.log(aprovados)
console.log(aprovados[8] === undefined)




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

aprovados[3] = 'Paulo'  // método que adiciona elemento em um Array
aprovados.push('Maria') // método CORRETO de adição de elemento em um Array

console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'João'  // criar um elemento no Array, cria no espaço elementos UNDEFINED

console.log(aprovados)
console.log(aprovados[8] === undefined)

aprovados.sort() // causa alteração dentro do Array
console.log(aprovados)

delete aprovados[1] // vai excluir o elemento, mas ele não alterará o array
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana', 'Barbara']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // Altera e adiciona elementos do Array
console.log(aprovados)
aprovados.splice(1,2, 'Carlos', 'Ana')
console.log(aprovados)

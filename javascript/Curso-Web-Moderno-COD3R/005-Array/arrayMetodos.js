const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

console.log(pilotos)

pilotos.pop() // Massa será removido. Remove o último elemento

console.log(pilotos)

pilotos.push('Verstappen') // Insere um elemento
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento 
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona um elemento na primeira posição de índice 0
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover

pilotos.splice(3, 1) // Massa será novamente removido
console.log(pilotos)

// slice
const algunsPilotos1 = pilotos.slice(2) // cria novo array a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
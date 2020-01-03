// Função sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2, 3, 4, 5, 6, 7, 8) // soma os dois primeiro e ignora o restante.

// Função com retorno

function soma(a, b = 0){
    console.log(2)
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
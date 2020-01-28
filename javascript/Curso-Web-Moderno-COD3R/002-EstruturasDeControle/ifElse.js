const imprimirResultado = function(nota){
    if (nota >= 7){
        console.log('Aprovado!')
    }
    else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(6)
imprimirResultado(6.5)
imprimirResultado(8)
imprimirResultado(7.5)
imprimirResultado('Erro!') // apresentará resultado "Reprovado", linguagem fracamente tipada

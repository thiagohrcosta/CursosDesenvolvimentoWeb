const imprimirResultado = function (nota){
    switch (Math.floor(nota)){
        case 10: 
        case 9:
            console.log('Quadro de Honra')
            break
        case 8:
        case 7: 
            console.log('Aprovado')
            break
        case 6: case 5:
            console.log('Recuperação')
            break
        case 4, 3, 2, 1, 0:
            console.log('Reprovado')
            break        
        default:
            console.log('Nota inválida')
    }
    console.log('Fim')
}

imprimirResultado(9)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(3)
imprimirResultado(8)
imprimirResultado(11)
imprimirResultado(8.6)
imprimirResultado(-1)
imprimirResultado(6.76)
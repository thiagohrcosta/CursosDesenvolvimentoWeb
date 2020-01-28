function teste1(num){
    if (num > 7)
        console.log(num)
        console.log('Final')
}

teste1(6)
teste1(8)

// Abaixo é demonstrado um erro, contudo é um código válido
// O ideal é não usar ; dentro de estruturas de controle.

function teste2(num){
    if (num > 7); {   // <--- atenção ao erro '';'' 
        console.log(num)
    }
}

teste2(6)
teste2(8)
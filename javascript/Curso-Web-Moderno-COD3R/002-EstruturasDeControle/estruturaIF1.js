function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota)
    }
    
}

soBoaNoticia(8.1)
soBoaNoticia(6.1) // não será demonstrado por não atingir a condição if

function seForVerdadeirEuFalo(valor){
    if(valor){
        console.log('É verdade...' + valor)
    }
}

seForVerdadeirEuFalo()
seForVerdadeirEuFalo(null)
seForVerdadeirEuFalo(undefined)
seForVerdadeirEuFalo(NaN)
seForVerdadeirEuFalo('')
seForVerdadeirEuFalo(0)
seForVerdadeirEuFalo(-1)
seForVerdadeirEuFalo(' ')
seForVerdadeirEuFalo('?')
seForVerdadeirEuFalo([])
seForVerdadeirEuFalo([1,2])
seForVerdadeirEuFalo({})
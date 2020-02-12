/* Execício Aula 1
    
    Crie um mapa mental para resolver um determinado problema, por exemplo,
    calcular a média aritimética de 4 notas, sabendo que as notas são as 
    seguintes:

    Nota1: 5
    Nota2: 7
    Nota3: 10
    Nota4: 3

*/

/*
    Mapa mental:
    - Definir notas;
    - Realizar a soma das notas
    - Aplicar a média aritimética somando a nota pelo número de provas
*/

const notas = {}
notas.prova1 = 5
notas.prova2 = 7
notas.prova3 = 10
notas.prova4 = 3

const somaDasNotas = notas.prova1 + notas.prova2 + notas.prova3 + notas.prova4
console.log(somaDasNotas)

const mediaAritimetica = somaDasNotas / 4
console.log(mediaAritimetica)

if (mediaAritimetica > 6){
    console.log('Aprovado')
}
else {
    console.log('Recuperação')
}

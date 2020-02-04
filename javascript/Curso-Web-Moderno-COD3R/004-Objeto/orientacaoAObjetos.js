// CÓDIGO NÃO EXECUTÁVEL
// Introdução aos conceitos da Programação Orientada à Objetos

// Procedural
// É baseado no procedimento. Há um trecho de código que recebe um nome
// e é utilizado em vários locais. Há foco no procedimento recebendo valores 
// de entrada, ou seja, há uma função que manipula dados.

processamento(valor1, valor2, valor3)

// Conceito Orientado à objetos
// Há mudança de foco, aqui há dados que em seu interior há funções.

objeto = {
    valor1,
    valor2,
    valor3,
    processamento(){
    // ....
    }
}

// Invoca-se o processamento a partir do dado. Há foco no objeto.
objeto.processamento()

// Princípios importantes:
/* 1. ABSTRAÇÃO:
*  Como pegar um objeto do mundo real e abstraí-lo para entendê-lo como
*  um conjunto de códigos. Por exemplo, faz sentido adicionar dentro do 
*  sistema do DETRAN a opção acelerar só por lidar com veículos? Certamente
*  que não. 
*  O carro é composto por parte mecânica real que é irrelevante para a sua
*  transformação do objeto CARRO em um sistema. Neste caso do DETRAN, a placa
*  o RENAVAN, quem é o dono, se há mais de um condutor. 
*  O mesmo objeto pode ser abstraído de forma diferente, o carro para o DETRAN
*  pode ter necessidades diferentes de uma oficina mecânica
*
*/
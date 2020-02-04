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
*  2. ENCAPSULAMENTO:
*  É ter os detalhes de implementação ocultados e mostrar a quem precisa usar
*  o sistema, uma interface simples que usará apenas o que ela precisa saber
*  para usar o sistema. Informações importantes são escondidas dando apenas
*  a interface de comunicação ao usuário.
*  
*  3. HERANÇA (PROTOTYPE)
*  É um princípio baseado no "É 1", ou seja, há formas de reutilizar código
*  o motor, por exemplo, é objeto e o carro "é 1", não há necessidade de se 
*  colocar a complexidade do motor dentro do carro, basta dizer que o motor
*  pertence ao carro. O motor somado a outros objetos como porta, rodas, 
*  formam o carro, ou seja, objetos simples que no todo formam o todo.
*  A herança significa que você recebe atributos e comportamentos de um
*  objeto pai. 
*
*  4. POLIMORFISMO
*  Significa múltiplas fórmulas. Consegue-se, por exemplo, usar o conceito
*  genérico de carro que uma hora aponta para uma Ferrari, e em outro momento
*  é substituído por uma Lamborghini, onde uma variável mais genérica
*  pode trabalhar com vários tipos específicos.
*/
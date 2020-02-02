// Função construtura com foco na orientação a objetos

function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo privado
    // não há sentido usar VAR na atualidade, dê preferência ao LET
    let velocidadeAtual = 0

    // método público
    // Tornar algo "THIS" visível fora da função
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }
        else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público
    this.getVelocidadeAtual = function ()  {
        return velocidadeAtual
    }
}

// const uno = new Carro()     == tanto faz o uso ou não do ()
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)
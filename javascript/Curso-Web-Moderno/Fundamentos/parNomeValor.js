// par nome/valor

const saudacao = 'Opa'  // contexto léxico 1

function exec(){
    const saudacao = 'Olá!!!' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro', 
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123,
        Cidade: 'Defgh'
    }
}

console.log(saudacao)
console.log(exec(saudacao))
console.log(cliente)


// função factory é uma função que retorna um ojbeto

const prod1 = {
    nome: 'Xbox One',
    preco: 1200
}

const prod2 = {
    nome: 'Playstation 4',
    preco: 1900
}

// Há formas mais fáceis de se criar tais produtos.

//Factory simples

function criarProdutos(){
    return{
        nome: 'Xbox One',
        preco: 1200
    }
}

console.log(criarProdutos())
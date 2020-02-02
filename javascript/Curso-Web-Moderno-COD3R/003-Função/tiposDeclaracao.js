// quando se define uma função da forma abaixo, ele primeiro carrega as funções
// e depois começa a executar o código, isso significa que ele já conhece as
// funções ''function declaration'' ainda que esteja abaixo do código.
// O que não functiona com "function expression".

console.log(soma(3,4))

// function declaration =====================
function soma (x, y){
    return x + y
}
console.log(soma(5,4))

// function expression ======================
const sub = function (x, y){
    return x - y
}
console.log(sub(10,4))

// named function expression ================
const mult = function mult(x, y){
    return x * y
}
console.log(mult(2,10))


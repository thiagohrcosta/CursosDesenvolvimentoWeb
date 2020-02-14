// console.log(global)

globalThis.MinhaApp = {
    saudacao(){
        return 'Estou aqui!'
    },
    nome: 'Sistema Teste'
}


globalThis.MinhaApp2 = Object.freeze({
    saudacao(){
        return 'Estou aqui!'
    },
    nome: 'Sistema Teste'
})
const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()

// ambos os resultados acima será 10 não respeitando a variável.
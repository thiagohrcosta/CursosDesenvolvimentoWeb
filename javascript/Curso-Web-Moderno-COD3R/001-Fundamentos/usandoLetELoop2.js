const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

// devido ao let, os valores serão devidamente impressos.

funcs[2]()
funcs[8]()


const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)

if(anonimo){
    process.stdout.write('Bom dia Anônimo!/n')
    process.exit()
}
else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Bom dia ${nome}!!\n`)
        process.exit()
    })
}
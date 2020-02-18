// Não aceita repetição / não indexada

const times = new Set()
times.add('Atletico - MG')
times.add('Palmeiras')
times.add('Flamengo')
times.add('São Paulo')
times.add('Cruzeiro')

console.log(times)
console.log(times.size)
console.log(times.has('Palmeiras'))

times.delete('Cruzeiro')

console.log(times)

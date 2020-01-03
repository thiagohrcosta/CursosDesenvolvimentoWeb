/* String nada mais é que uma cadeia de caracteres
* que no Javascript pode ser delimitado por "", 
* '' e ainda, pode utilizar as crases.
*/

const escola = "Cod3r"
console.log(escola.charAt(4))
console.log(escola.charAt(5)) // retornará nulo.

console.log(escola.charCodeAt(3)) // exprime o valor unicode de "3".
console.log(escola.indexOf('3')) // indica o índice

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))

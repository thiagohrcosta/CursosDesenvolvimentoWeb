console.log('a =', a)
var a = 2
console.log('a =', a)

// ============
var a
console.log('a =', a)
a = 2
console.log('a =', a)

// =============
function teste(){
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

teste()
console.log('a =', a)

// =============
// Não há como fazer hoisting com ''let''

console.log('b =', b)
let b =2
console.log('b =', b)

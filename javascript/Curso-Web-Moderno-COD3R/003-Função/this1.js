function f1() {console.log(this == window)}

f1()

document.getElementsByTagName('body')[0].onclick = f1

function f2() {console.log(this == document)}
f2();

const body = document.getElementsByTagName('body')[0]

function f2() { console.log(this === body)}
f2()

const f3 = () => console.log(this === window)
f3()

document.getElementsByTagName('body')[0].onclick = f3
// () => console.log(this === window)

this === window
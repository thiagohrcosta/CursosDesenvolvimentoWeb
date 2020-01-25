var e = 9 % 6 // 3
console.log(e)

// odd or even

var number = 45
var evenOrOdd =  number % 2;

if (evenOrOdd == 0){
    console.log("Even")
}
else{
    console.log("Odd")
}

var number2 = 40;
var evenOrOdd =  number2 % 2;

if (evenOrOdd == 0){
    console.log("Even")
}
else{
    console.log("Odd")
}

// Precedents rules on math 

var cost = 3 + 5 * 2 // 13  
var cost2 = (3 + 5) * 2 // 14

// Dog Age to Human age Formula
// humanAge = (dogAge - 2) x 4 + 21

var dogAge = prompt("Type the age or your dog in number?");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("Your dog has " + humanAge + " years old in human years.");
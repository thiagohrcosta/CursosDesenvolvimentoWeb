/*  var n = Math.random();

0 - 0.999999999999999

// Roll a dice with 6 faces // 

var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);

*/

var firstName = prompt("Type your name:")
var loverName = prompt("Type the name of your lover:")

var loveCalculator = Math.random();
loveCalculator = loveCalculator * 100;
loveCalculator = Math.floor(loveCalculator) + 1;

alert("The LOVE SCORE of " + firstName + " and " + loverName + " is " + loveCalculator + " %.");

if (loveCalculator < 60){
    alert("You have no chance!")
}
else{
    alert("Go for it!!!")
}
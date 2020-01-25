
var guestList = ["Karev", "Grey", "O´Malley", "Steves", "Yang"]
console.log(guestList);
console.log(guestList.length);

console.log(guestList[0]); // Karev 

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)){
    alert("Welcome!!!");
}
else{
    alert("Sorry, maybe next time your name is on the list.")
}
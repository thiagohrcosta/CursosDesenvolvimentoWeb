// word.toUpperCase()

var name = "thiago";
var nameUpperCase = name.toUpperCase();
console.log(nameUpperCase);

var name2 = prompt("type your name:")
var nameUpperCase = name2.toUpperCase();
alert(nameUpperCase)


// ==================== CHALLENGE ================= //

// First I created a prompt to get a user name doesn´t matter if
// is writting in upper our lower case.

var name3 = prompt("Type your first name:")

// Slice the first letter of the name
var sliceName = name3.slice(0,1);

// Slice the rest of the name 
var sliceRestName = name3.slice(1, name3.length)

// Upper case the fist letter and lower case the rest of the name
var firstLetterUp = sliceName.toLocaleUpperCase();
var restLetterDown = sliceRestName.toLowerCase();

// Show alert with the result, the first letter in upper case
// and the rest in lower case
alert("Your name is: " + firstLetterUp + restLetterDown);

// Or can use concatenate 
var concatenateName = firstLetterUp + restLetterDown;
alert("Hello, " + concatenateName);
/* 
var name = "Thiago";
var a = name.slice(0,1);
console.log(a)

var name = "Thiago";
var a = name.slice(0,3);
console.log(a)


var name = "Thiago";
var a = name.slice(-6,-3);
console.log(a)

*/

// ============= Little Twitter project =============== //
// Adding 140 characters limit

var tweet = prompt("Compose your tweet:");
var tweetUnder140 = tweet.slice(0,140);
alert(tweetUnder140);

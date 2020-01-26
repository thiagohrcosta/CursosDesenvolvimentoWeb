
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

//dice1.png - dice6.png
var randomDiceImg = "dice" + randomNumber1 + ".png";

//images/dice1.png - images/dice6.png
var randomImageSource = "images/" + randomDiceImg;

// get the first dice
var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSource);

// ============= CODE FOR SECOND DICE ============= //

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

//dice 1.png - dice6.png
var randomDice2Img = "dice" + randomNumber2 + ".png";

//images/dice1.png - images/dice6.png
var randomImage2Source = "images/" + randomDice2Img;

// get the second dice
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImage2Source);
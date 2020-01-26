
var randomNumber1 = Math.random()
randomNumber1 = randomNumber1 * 6
randomNumber1 = Math.floor(randomNumber1) + 1;

//dice1.png - dice6.png
var randomDiceImg = "dice" + randomNumber1 + ".png" 

//images/dice1.png - images/dice6.png
var randomImageSource = "images/" + randomDiceImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSource);



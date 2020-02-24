
const buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickPattern = [];

// Starting the game
var started = false

var level = 0

$(document).keypress(function () {
    if (!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});


$('.btn').click(function(){
    var userChosenColour = $(this).atrr("id");

    userClickPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatedPress(userChosenColour);

    checkAnswer(userClickPattern.length - 1);

})

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(() =>{
                nextSequence();
            }, 1000);
        }
    }
    else {
        console.log("WRONG!");
    }
}

function nextSequence(){

    userClickedPattern = []

    level++

    $("#level-title").text("Level" + level);

    var randomNumber = Math.floor(Math.random() *4);

    var randomChosenColour = buttonColours[randomNumber]

    gamePattern.push(randomChosenColour)

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // Refactoring the code - adding a function instead the code
   playSound(randomChosenColour)
}

function playSound(name){
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3")
    audio.play();        
}

function animatedPress(currentColor){
    $("#" + currentColor),addClass("pressed");

    // Just testing some arrow function style
    setTimeout( () => {
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}
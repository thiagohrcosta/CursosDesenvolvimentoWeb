
const buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickPattern = [];

$('.btn').click(function(){
    var userChosenColour = $(this).atrr("id");

    userClickPattern.push(userChosenColour);

    playSound(userChosenColour);

})

function nextSequence(){
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
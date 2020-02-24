
$("h1").text("Bye");

$("button").text("Don´t Click Me")

$("button").html("<em>Stop Clicking me!</em>")
/* 

document.querySelectoAll()

$("h1").removeClass("big-title");

$("h1").addClass("big-title margin-50");


*/

$("a").attr("href", "http://www.yahoo.com")

$("h1").click(function(){

    $("h1").css("color", "red");

});

/*
for (var i = 0; i < 5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color = "blue"
    });
}
*/

$("button").click(function(){
    $("h1").css("color", "purple");
})

$("input").keypress(function(event){
    console.log(event.key);
})

/* CHALLENGE  
    Change the H1 text to show what the user is typing
*/

$("input").keypress(function(event){
    $("h1").text(event.key);
})

$("h1").on("mouseover", function(){
    $("h1").css("color", "yellow")
})

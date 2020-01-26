// document.querySelector("h1").innerHTML = "Good Bye";

document.getElementsByTagName("li")[2].style.color = "red";

document.getElementsByClassName("btn")[0].style.color = "blue";

document.getElementById("title").innerHTML = " Good Bye";

document.querySelector("#title");
document.querySelector(".btn");

document.querySelector("li a").innerHTML = " Google´s site";

document.querySelector("button").style.backgroundColor = "yellow";

// Adding a class 
document.querySelector("button").classList.add("invisible");

// Remove a class
document.querySelector("button").classList.remove("invisible");

// Toggle class
document.querySelector("button").classList.toggle("invisible");

// Adding a class 
document.querySelector("h1").classList.add("huge");

// Adding innerHTML
document.getElementById("title").innerHTML = "<em>Hello There</em>";

// Manipulate attributes
document.querySelector("a").attributes;

document.querySelector("a").getAttribute("href");

document.querySelector("a").setAttribute("href", "https://www.bing.com")


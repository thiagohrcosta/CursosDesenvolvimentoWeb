const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello, World!</h1>") 
});

app.get("/contact", function(req, res){
    res.send("Contact me at: myemail@email.com")
});

app.get("/about", function(req, res){
    res.send("<h1>Thiago Costa</h1><br><em>Web and System Developer</em>")
})
app.listen(3000, function(){
    console.log("Server started on port 3000");
});


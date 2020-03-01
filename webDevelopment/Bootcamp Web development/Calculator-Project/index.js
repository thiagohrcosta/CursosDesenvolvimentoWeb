const express = require("express");
const app = express();

app.get("/", function(req, res) {
    // sendfile is use to point to another file, document, or simple html page.
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res){
    res.send("Thanks for posting that");
})

app.listen(3000, function(){
    console.log("Calculator Project running on port 3000.")
});


const express = require("express");
const app = express();

app.get("/", function(req, res) {
    res.send("Hello World - Calculator")
})

app.listen(3000, function(){
    console.log("Calculator Project running on port 3000.")
});


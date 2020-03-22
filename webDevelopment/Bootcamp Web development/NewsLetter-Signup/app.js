//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public")); // CSS and IMAGE
app.use(bodyParser.urlencoded({
    extended: true})
);

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res){

    const firstName = req.body.fName;
    const lastName = req.body.lName;
    const email = req.body.email;

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    https.request(url[,options][,callback]);

    

})



app.listen(3000, function(){
    console.log("Server is running on port 3000.");
})


// API KEY
// 6706fda1f12bada8705a9804647dfc78-us19

// LIST ID
// b145eba022
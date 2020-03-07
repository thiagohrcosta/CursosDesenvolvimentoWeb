const express = require("express");
const https = require("https");

const app = express();


app.get("/", function(req, res){

    const url = "https://api.openweathermap.org/data/2.5/weather?q=Contagem,br&appid=e908c91227bde0523b0a8a97474705cc&units=metric"
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const object = {
                name: "Thiago",
                favouriteFood: "Filet a parmegiana"
            }
            console.log(JSON.stringify(object));
        })
    })
    

    res.send("Server is up and running.")
})




app.listen(3000, function(){
    console.log("Server is running on port 3000.")
})
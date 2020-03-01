const express = require("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res) {
    // sendfile is use to point to another file, document, or simple html page.
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of calculation is " + result);
});


// BMI Calculator method ======================

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/BMIcalculator.html");
})

app.post("/bmiCalculator", function(req, res){
    
    var weightBMI = parseFloat(req.body.bmiWeight);
    var heightBMI = parseFloat(req.body.bmiHeight);

    var resultBMI = weightBMI / (heightBMI * heightBMI);

    /*
    res.send("Your BMI is " + resultBMI.toFixed(2));
    */
    if(resultBMI < 18.5){
        res.send("Your BMI is " + resultBMI.toFixed(2) + " what´s meaning <strong>low weight</strong>.");
    }
    else if (resultBMI >= 18.5 && resultBMI <= 24.9){
        res.send("Your BMI is " + resultBMI.toFixed(2) + " what´s meaning <strong>normal weight</strong>, congratulation.");
    }
    else if (resultBMI >= 25 && resultBMI <= 29.9){
        res.send("Your BMI is " + resultBMI.toFixed(2) + " what´s meaning <strong>overweight</strong>.");
    }
    else if (resultBMI >= 30 && resultBMI <= 34.9){
        res.send("Your BMI is " + resultBMI.toFixed(2) + " what´s meaning <strong>overweight</strong> Level 1 - ALERT!");
    }
    else if (resultBMI <= 35 && resultBMI <= 39.9){
        res.send("Your BMI is " + resultBMI.toFixed(2) + " what´s meaning <strong>overweight</strong> Level 2 - ALERT ALERT!!");
    }
    else{
        res.send("Your BMI is " + resultBMI.toFixed(2) + " what´s meaning <strong>overweight</strong> Level 3 ALERT ALERT ALERT!!!")
    }


})


app.listen(3000, function(){
    console.log("Calculator Project running on port 3000.")
});


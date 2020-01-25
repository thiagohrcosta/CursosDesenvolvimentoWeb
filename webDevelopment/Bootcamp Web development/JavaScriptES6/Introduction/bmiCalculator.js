
// Create a function below

/* 

BMI = weight (kg) / height2 (m2)


function bmiCalculator(weight, height){
    var bmi = weight / (height * height)
    return bmi;
}

*/

function bmiCalculator(weight, height){
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}


var bmi = bmiCalculator(80, 1.8);
console.log(bmi);
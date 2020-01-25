/* 

var tomClany = ["Red October"]

tomClany.push("Jack Ryan")

console.log(tomClany);

// Wait Jack Ryan it´s a character, not a Book Title, remove that name //

tomClany.pop("Jack Ryan");

console.log(tomClany);

*/

var output = []
var count = 1;

function fizzBuzz(){

    if (count % 3 === 0 && count % 5 == 0){
        output.push("FizzBuzz");
    }
    else if (count % 3 == 0){
        output.push("Fizz");
    }
    else if (count % 5 == 0){
        output.push("Buzz");
    }
    else{
        output.push(count);
    }
    count++;

    console.log(output);
}

console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());
console.log(fizzBuzz());


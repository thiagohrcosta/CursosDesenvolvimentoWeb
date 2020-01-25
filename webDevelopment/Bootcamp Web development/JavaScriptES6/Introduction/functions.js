/*
Functions allow you to create instructions in a block of code.

function nameOfYourFunction(){
    < *** your instructions code *** >
}

to call the function you use get.
    getNameOfYourFunction();
*/

function getMilk(){
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("BuyMilk");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("enterHouse");
}
getMilk();


/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    goRunning();
    
 }
 
 function goRunning(){
    move();
    move();
    turnLeft();
    move();
    move();
    move();
    turnRight();
    move();
    turnLeft();
    move();
    turnRight();
    move();
 }

 // Using some function to better the code
 
/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/

function main(){
    goMove();
    goLeft();
    goMove();
    goRight();
    goMove();
    goLeft();
    goMove();
    
 }
 
 function goMove(){
    move();
    move();
 }
 
 function goLeft(){
    turnLeft();
 }
 
 function goRight(){
    turnRight();
 }

 /**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    goMoveAndBeep();
    goMoveAndBeep();
    putBeeper();
 
    
    
 }
 
 function goMoveAndBeep(){
    putBeeper();
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
    move();
    turnLeft();
    move();
    turnRight();
 
 }
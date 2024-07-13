//--------------------QUESTION 01--------------------//
var userInput = +prompt("Enter a positive integer.....");
var roundValue = Math.round(userInput);
var ceilValue = Math.ceil(userInput);
var floorValue = Math.floor(userInput);

document.write("Number: " + userInput + "<br>");
document.write("Round Off Value: " + roundValue + "<br>");
document.write("Ceil Value: " + ceilValue + "<br>");
document.write("Floor Value: " + floorValue + "<br><br><br>");

//--------------------QUESTION 02--------------------//
var userInput = +prompt("Enter a negative float value point.....");
var roundValue = Math.round(userInput);
var ceilValue = Math.ceil(userInput);
var floorValue = Math.floor(userInput);

document.write("Number: " + userInput + "<br>");
document.write("Round Off Value: " + roundValue + "<br>");
document.write("Ceil Value: " + ceilValue + "<br>");
document.write("Floor Value: " + floorValue + "<br><br><br>");

//--------------------QUESTION 03--------------------//
var userInput = +prompt("Enter any number.....");
var absolute = Math.abs(userInput);
document.write("The Absolute Value of " + userInput + " is : " + absolute + "<br><br><br>");

//--------------------QUESTION 04--------------------//
var diceValue = Math.floor(Math.random() * 6) + 1;
document.write("Random dice value: " + diceValue + "<br><br><br>");

//--------------------QUESTION 05--------------------//
var tossValue = Math.floor(Math.random() * 2) + 1;
document.write(tossValue + "<br><br>");
if (tossValue == 1) {
    document.write("Random coin value: Heads <br><br><br>");
    } else {
        document.write("Random coin value: Tails <br><br><br>");
        }

//--------------------QUESTION 06--------------------//
var randomNumber = Math.floor(Math.random()*100)+1;
document.write("Random number between 1 and 100 is: " + randomNumber + "<br><br>");

//--------------------QUESTION 07--------------------//
var userInput = parseFloat(prompt("Enter your weight.....e.g. 50, 50kgs, 50.2kgs,50.2kilograms."));
            document.write("The weight of User is "+ userInput + " kilograms")

//--------------------QUESTION 08--------------------//
var secretNumber = Math.floor(Math.random()*10)+1;
var userInput = +prompt("guess the secret number between 1 to 10......");
if(userInput===secretNumber){
    alert("CONGRATULATIONS! You Guess THe Secret Number.")
}else{
    alert("SORRY! Try Again..")
}
            
            
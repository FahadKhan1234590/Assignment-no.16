//Q1
var cityName = prompt("Enter city name")
if (cityName === "karachi" || cityName === "Karachi"){
    alert("Welcome to city of lights")
}
else{
    alert("Enter Karachi to display something")
}

//Q2
//Greeting according to gender
var gender = prompt("Greeting \n Enter your gender")
if (gender == "male" || gender == "Male"){
    alert("Good Morning Sir")
}
else if (gender == "female" || gender == "Female"){
    alert("Good Morning Ma’am")
}
else{
    alert("")
}

//Q3
//Signal Light Color Teller
var colorOfTrafficSignal = prompt("Signal Light Color Teller \n Enter any color of traffic signal")

if (colorOfTrafficSignal == "red" || colorOfTrafficSignal == "Red"){
    alert("Red = Must Stop")
}
else if (colorOfTrafficSignal == "yellow" || colorOfTrafficSignal == "Yellow"){
    alert("Yellow = Ready to move")
}
else if (colorOfTrafficSignal == "green" || colorOfTrafficSignal == "Green"){
    alert("Green = Move now")
}
else if (colorOfTrafficSignal == ""){
    alert("")
}
else{
    alert("you have enter the color wrong")
}

//Q4
//Remaining Fuel Checker
var remainingFuel  = +prompt("Remaining Fuel Checker \n Enter the remaining fuel in car in litres")

if (remainingFuel > 0.25){
    alert("Fuel is ok in car")
}
else if (remainingFuel == ""){
    alert("")
}
else if (remainingFuel < 0.25 && typeof remainingFuel == "number" ){
    alert("Please refill the fuel in your car")
}
else if (remainingFuel !== Number){
    alert("Please enter the remaining fuel correctly")
}
else{
    alert("")
}

//Q5
var a = 4
if (++a === 5){
alert("given condition for variable a is true")
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true")
}

var c = 12
if (c++ === 13){
alert("condition 1 is true")
}
if (c === 13){
    alert("condition 2 is true")
}
if (++c < 14){
    alert("condition 3 is true")
}
if(c === 14){
    alert("condition 4 is true")
}

var materialCost = 20000
var laborCost = 2000
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals")
}

if (true){
    alert("True")
}
if (false){
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat")
}


//Q6
//Marks Sheet
var totalMarks = 300
var englishMarks = +prompt("Marks Sheet \n Enter your Marks in English")
var MathsMarks = +prompt("Enter your Marks in Maths")
var ScienceMarks = +prompt("Enter your Marks in Science")
var marksObtained = englishMarks + MathsMarks + ScienceMarks
var percentage = marksObtained / totalMarks * 100
var percentage = percentage.toFixed(2)
var grade;
var remarks;
if(percentage >= 80){
    grade = "A-one"
    remarks = "Excellent"
}
if(percentage >= 70 && percentage < 80){
    grade = "A"
    remarks = "Good"
}
if(percentage >= 60 && percentage < 70){
    grade = "B"
    remarks = "You need to improve"
}
if(percentage < 60){
    grade = "Fail"
    remarks = "Sorry"
}
else{
    alert("")
}
document.write("<h1>Marks Sheet</h1>")   
document.write(`<h2>Total Marks : ${totalMarks}</h2>`)
document.write(`<h2>Marks Obtained : ${marksObtained}</h2>`)
document.write(`<h2>Percentage : ${percentage}%</h2>`)
document.write(`<h2>Grade : ${grade}</h2>`)
document.write(`<h2>Remarks : ${remarks}</h2>`)


//Q7
//Number Guessing Game
var secretNumber = 7
var askinguserforsecretnumber = +prompt("Number Guessing Game \n Guess the number between 1 to 10 ")
if (askinguserforsecretnumber == 7){
    alert("Bingo! Correct answer")
}
else if (askinguserforsecretnumber + 1 == 7){
    alert("Close enough to the correct answer")
}
else if (askinguserforsecretnumber - 1 == 7){
    alert("Close enough to the correct answer")
}
else if (askinguserforsecretnumber == ""){
    alert("")
}
else{
    alert('not a correct answer')
} 

//Q8
var checknumber = +prompt("Enter any number to check if it is divisible by 3")
if (checknumber == ""){
    alert("")
}
else if (checknumber % 3 == 0){
    alert("Your number is divisible by 3")
}
else{
    alert("Your number is not divisible by 3")
}

//Q9
//Even Odd Number Checker
var usernumber = parseInt(prompt("Even Odd Number Checker \n Enter any number to check if it is odd number or even number"))

if (usernumber % 2 === 0 && typeof usernumber === "number"){
    alert("The number is even")
}
else if (typeof usernumber != "number"){
    alert("Enter number only")
}
if (usernumber % 2 > 0 && typeof usernumber === "number"){
    alert("The number is odd")
}
else{
    alert("")
}

//Q10
//Temperature Checker
var temperature = +prompt("Temperature Checker \n Enter Temperature in number")
if (temperature > 40){
    alert("It is too hot outside")
}
else if (temperature >= 30 && temperature < 40 ){
    alert("The Weather today is Normal")
}
else if (temperature >= 20 && temperature < 30 ){
    alert("Today’s Weather is cool")
}
else if (temperature >= 10 && temperature < 20 ){
    alert("OMG! Today’s weather is so Cool")
}
else if (temperature == ""){
    alert("")
}
else if (temperature < 10){
    alert("Today’s weather is Cold")
}
else{
    alert("")
}

//Q11
//Calculator
var number1 = +prompt("Calculator \n Enter first number")
var operation = prompt("Calculator \n Enter operation to perform (+,-,*,/,%)")
var number2 = +prompt("Calculator \n Enter second number")
if (operation == "+"){
  alert(number1 + number2)
}
else if (operation == "-"){
    alert(number1 - number2)
}
else if (operation == "*"){
    alert(number1 * number2)
}
else if (operation == "/"){
    alert(number1 / number2)
}
else if (operation == "%"){
    alert(number1 % number2)
}
else{
    alert("")
}

document.write("<br><br><a href='chapters12-13.html' target='_blank'><h2>chapters12-13</h2></a>")
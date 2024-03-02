//Q1
var input = prompt("Write a character (number or string) to see what is the type of character you wrote")
var hasNumber = /\d/
var hasAnyLetter = /^[a-zA-Z]+$/
if (input.length > 1){
    alert('Please write only one character')
}
else if (hasNumber.test(input) == false && input.toUpperCase() === input == true ){
    alert("Upper case letter")
} 
else if (hasNumber.test(input) == false && input.toUpperCase() === input == false ){
    alert("Lower case letter")
}   
else if (hasAnyLetter.test(input) == false && hasNumber.test(input) == true){
    alert("number")
}
else{
    alert("")
}

//Q2
var number1 = +prompt("Greater Integer checker \n Enter the first number")
var number2 = +prompt("Greater Integer checker \n Enter the second number")

if (number1 > number2){
    alert(`${number1} is greater than ${number2}`)
}
else if (number1 < number2){
    alert(`${number2} is greater than ${number1}`)
}
else if (number1 == number2){
    alert(`${number1} and ${number2} are equal`)
}
else{
    alert("")
}


//Q3
var checknumber = +prompt("Number Checker \n Write any number to check if it is postive negative or zero")

if (checknumber > 0){
    alert("number is positive")
}
else if (checknumber < 0){
    alert("number is negative")
}
else if (checknumber == 0){
    alert("number is zero")
}
else{
    alert("")
}

//Q4
var checkvowel = prompt("Write any one letter to see if it is a vowel or not")
if (checkvowel.length > 1){
    alert("Writen only 1 letter")
}
else if (checkvowel.match(/[aeiou]/gi)){
    alert("The letter you wrote is a vowel ")
}
else{
    alert("The letter you wrote is not a vowel ")
}

//Q5
var password = prompt("Enter random password")
var confirmpassword = prompt("Enter the password again to check")

if (confirmpassword.length == ""){
    alert("Please enter your password")
}
else if (password == confirmpassword){
    alert("Correct! The password you entered matches the original password")
}
else if (password != confirmpassword){
   alert("Incorrect password")
}

else{
    console.log('')
}

//Q6
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}

//Q7
var time = prompt("Enter the time in clock format like (1900 = 7pm) to be greeted")

if (time >= "0000" && time < "1200"){
 alert("Good Morning!")
}
else if (time >= "1200" && time < "1700"){
    alert("Good afternoon!")
}
if (time >= "1700" && time < "2100"){
    alert("Good evening!")
}
if (time >= "2100" && time < "2359"){
    alert("Good night!")
}
else{
    console.log('')
}    

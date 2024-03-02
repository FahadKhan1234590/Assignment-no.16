//Chapter 10 (if statements)

//Q1
var city = "Karachi"
if (city = "Karachi") {
     console.log("The City OF Lights")
}

//Q2
var x = 10
var y = 10

if (x === y) {
   valueofz = +prompt("value of z?")
   z = valueofz
   console.log(z)
}

//Q3
var zipCode = 10010

if (zipCode == 10010){
    alert('Karachi')
}
else{
    alert('Please write correct city')
}

//Q4
var a = 1
if (a == 1){
    a = 2
    console.log(`new value assigned to a (${a})`)
}
else{
    console.log('')
}


//Chapter 11 (Comparison Operators)
//Q1
var c = 3
var d = 4

if (c != d){
    console.log('yes')
}
else{
    console.log('no')
}

//Q2
var e = 10
var f = 11

if (e  > f){
    console.log("e is greater than f")
}
else if (f  > e){
    console.log("f is greater than e")
}
else if (e  == f){
    console.log("e and f are equal")
}
else{
    console.log('')
}

//Q3
var g = 10

if (g != 20){
    g = 20
    console.log(g)
}

//Q4
if (10 != 14){
     alert("congratulations!")   
}
else{
    console.log("")
}

//Q5
var name = prompt("Enter your first name")
if (name != 'harry'){
   alert("No match")
}
else{
    alert("")
}


//Chapter 12 (if…else and else if statements)

//Q1
var a = 10
var b = 10

if (a > b){
   alert(`a is greater than b`)
}
else if (b > a){
    alert(`b is greater than a`)
}
else if (a == b){
    alert(`a is equal to b`)
 }
else{
    alert("")
} 

//Q2
var totalMarks = 200
var subject1 = +prompt("Percentage Calculator \n Enter your first subject marks")
var subject2 = +prompt("Enter your second subject marks")
var obtainedMarks = subject1 + subject2
var percentage = obtainedMarks / totalMarks * 100
var grade;
if (percentage >= 90 && percentage <= 100){
   alert(`Percentage: ${percentage}% \n
          Grade : A+
   `)
}
else if (percentage >= 80 && percentage < 90){
    alert(`Percentage: ${percentage}% \n
           Grade : A
    `)
 }
else if (percentage >= 70 && percentage < 80 ){
    alert(`Percentage: ${percentage}% \n
           Grade : B
    `)
} 
else if (percentage >= 60 && percentage < 70 ){
    alert(`Percentage: ${percentage}% \n
           Grade : C
    `)
}
else if (percentage >= 50 && percentage < 60 ){
    alert(`Percentage: ${percentage}% \n
           Grade : D
    `)
}
else if (percentage >= 40 && percentage < 50 ){
    alert(`Percentage: ${percentage}% \n
           Grade : E
    `)
}
else if (percentage < 40 ){
    alert(`Percentage: ${percentage}% \n
           Grade : F
    `)
}
else{
    alert("")
}


//Q3
var a = 20
if (a === 10){
    alert("a is 10");
}
else{
    alert(`The correct value of a is ${a}`)
}

//Q4
var city = prompt("Enter any city name")

if (city === "karachi" || city === "Karachi"){
    alert("You entered Karachi")
}

else if (city === "lahore" || city === "Lahore"){
    alert("You entered lahore")
}
else {
    alert(`You entered ${city}`)
}


//Chapter 13 (Testing sets of conditions)

//Q1
var a = 20
var b = 3
var c = 35
var d = 7

if (a == b && c == d){
    alert("yes")
}
else{
    alert("no")
}

//Q2
if (a == b || c !== d){
    alert("yes")
}
else{
    alert("no")
}

//Q3
var name = "Hamza"
var age = 25

if (name == "Hamza" || name == "Arsalan" && age < 60){
    alert("yes")
}
else{
    alert("no")
}

//Q4
var num1 = 27
var num2 = 43

if (num1 > num2 ){
    alert(`${num1} is greater than ${num2}`)
}
else if (num1 < num2 ){
    alert(`${num1} is smaller than ${num2}`)
}
else{
    alert("")
}

//Q5
var firstName = "Fahad"
var lastName = "Khan"
var firstNameprompt = prompt("Enter your first name")
var lastNameprompt = prompt("Enter your last name")

if (firstNameprompt  != ""){
    firstNameprompt = firstNameprompt[0].toUpperCase() + firstNameprompt.slice(1)
}
else{
    console.log("")
}
if (lastNameprompt  != ""){
     lastNameprompt = lastNameprompt[0].toUpperCase() + lastNameprompt.slice(1)
}
else{
    console.log('')
}

if (firstName === firstNameprompt && lastName === lastNameprompt){
    alert("your name is matched with the initialized variables")
}
else{
    alert("your name is not matched with the initialized variables")
}


//Chapter 14 (If statements nested) 

//Q1
var password = 10

if (password != null){
    if(password > 5 == false){
       alert("Password must be greater than 5")
    }
    else if (password > 5){
        alert("OK")
    }
}
else{
    alert('')
}

//Q2
if (a == 1){
    if(c === "Max"){
        alert("OK")
    }
}
else{
    alert("")
}

//Q3
if (a == 1 && c === "Max"){
    alert("OK")
}
else{
    alert("")
}

//Q4
var number1 = 40
var number2 = 40

if(number1 == number2){
    if(number1 < number2 || number1 == number2){
        alert("number1 is equal to number2")
    }
}
else{
    alert("")
}

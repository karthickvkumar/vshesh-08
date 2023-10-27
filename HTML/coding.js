// Primitive Type
// Number - Any Numberical Value from Positive, Negative, Decimal, Fraction

// string - Any Text Value but it should be enclosed inside single or double quote

// boolen - true or false 

// Variable Creation (Temp storage)
// syntax 
// var variable_name = value;
// var -> Keyword 
// variable_name -> Placeholder (It should be a proper and meaningful name, contain only A-Z, a-z, 0-9, _, $)
// value -> input data

var rollnumber = 45786565;

var email_id = "kathick212@gmail.com";

var result = true;

// Null - Non Exist value 

// undefined - A variable has been created but its value will not be assigned

var future_referene;

// Object Type / Non-Primitve / User Defined 

// Object - It is a collection of key and value pair
// syntax 
// var variable_name = {
//   key : value,
//   key : value,
//   key : value
// }

// key - similar to variable name (It should be a proper and meaningful name, contain only A-Z, a-z, 0-9, _, $)

var first_name = "mr.abc";
var last_name = "zyx";
var age = 24;
var roll_number = 78846585;
var standard = "XI";

var student_information = {
  first_name: "mr.abc",
  last_name: "zyx",
  age: 24,
  roll_number: "457AER856",
  standard: "XI"
};

// Array - It is a List of Data and it should have similar data type
// syntax 
// var variable_name = [value1, value2, value3, ... , valueN];

var student_list = [
  {
    first_name: "mr.abc",
    last_name: "zyx",
    age: 24,
    roll_number: "457AER856",
    standard: "XI"
  },
  {
    first_name: "mr.abc",
    last_name: "zyx",
    age: 24,
    roll_number: "457AER856",
    standard: "XI"
  },
  {
    first_name: "mr.abc",
    last_name: "zyx",
    age: 24,
    roll_number: "457AER856",
    standard: "XI"
  }
];

console.log(student_information);

console.log(student_list);
console.log(first_name);

// Function - It is used to write code (Block of code)
// syntax - Function Definition 
// function function_name(){
//   we should write code inisde
// }

// syntax - Function Invocation (To run the function)
// onclick="function_name()" (via HTML Attribute)

// function - keyword
// function_name - Placeholder (It should be a proper and meaningful name, contain only A-Z, a-z, 0-9, _, $)

function printWelcomeMessage() {
  // var message = "Hello! Good Day";
  var message = prompt("Enter your message");
  console.log(message);
  alert(message);
}


// Operators
// 1. Arithmetic Operator +, -, *, / , %, ++, --
// 2. Assignment Operator = 
// 3. Comparision Operator < (less than) <= (less than or equal to) > (greater than) >= (greater than or equal to) == (equality) != (not equality) ===, !==
// 4. Logical Operator && (AND), || (OR), ! (NOT)

// AND &&
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// OR || 
// true || true = true
// true || false = true
// false || true = true
// false || false = false

// NOT !
// !true = false
// !false = true

// If Else Condition 
// syntax 
// if(condition){
//   if block TRUE 
// }
// else{
//   else block FLASE
// }

// Problem Statement 
// Find whether a given user age is eligible to Vote in India

// Solution 
// 1. To pass a number to my javascript program (user age)
// 2. To write a code, it should verify
//  2.1 - If the number is greater than or equal to 18 --- The user is eligible for Vote
//  2.2 - If the number is less than 18 -- The user is Not eligible to Vote

function check_voiting_eligiblity() {
  var age = prompt("Enter you Age");
  if (age >= 18) {
    alert("The user is eligible for Vote");
  }
  else {
    alert("The user is Not eligible for Vote");
  }
}

// Multiple IF Else Condition 
// synatx 
// if(Condition){

// }
// else if(Condition){

// }
// else{

// }

// Problem Statement:
// Find whether the given user age belong to which Age Category 
// 1. Minor - User age is less than 18
// 2. Major - User age is greater than or equal to 18 and less then 60
// 3. Senior - User age is greater or equal to 60

function check_age_catorgory() {
  var age = prompt("Enter you Age");
  if (age < 18) {
    alert("User belongs to Minor Category");
  }
  else if (age >= 18 && age < 60) {
    alert("User belongs to Major Category")
  }
  else {
    alert("User belongs to Senior Category")
  }
}

// Loop 
// syntax
// for(intialization; condition; increment/decrement ){
//  code 
// }

for (var count = 1; count <= 20; count++) {
  console.log("The loop is running on count ", count);
}

// Problem Statment 
// To find all even number for the given N number of Limit 
// 1. To pass a number value (Nth number)
// 2. Number % 2 == 0 --- The Number is even 
// 3. Create loop -> From 1 to Nth number

function findEvenNumbers() {
  var lastNumber = prompt("Enter the Last Number");
  for (var startNumber = 1; startNumber <= lastNumber; startNumber++) {
    if (startNumber % 2 == 0) {
      console.log(startNumber, "is a even number");
    }
  }
}

// Switch Case 
// syntax 
// switch(expression){
//   case value :
//     code block
//     break;
//   case value :
//     code block
//     break;

//   default:
//     code block
// }

// Progam - To create a program for simple arithmetic operations 
// Input - number1, symbol, number2 

function calculator() {
  try{
    var number1 = prompt("Enter Number 1");
    var symbol = prompt("Enter one arithmetic operator (+,-,*,/)");
    var number2 = prompt("Enter Number 2");
    var result;
    switch (symbol) {
      case '+':
        result = parseInt(number3) + parseInt(number2);
        alert(result);
        break;
      case '-':
        result = number1 - number2;
        alert(result);
        break;
      case '*':
        result = number1 * number2;
        alert(result);
        break;
      case '/':
        result = number1 / number2;
        alert(result);
        break;
      default:
        alert("Invalid arithmetic operator");
    }
  }
  catch(exception){
    console.error(exception);
    alert("Something went wrong, pls try later");
  }
}

// Error - Bug
// 1. Uncaught SyntaxError - Mistake in the program syntax (format) (Getting red color line in console)
// 2. Uncaught ReferenceError - Mistake in Vairiable or Function Name (Getting red color line in console) 
// 3. Logical Error - Incorrect output value (No red color line in console)

// Exception Handling / Error Handling
// Run Time Error - There might be a reference or syntax error - But program fail to find it during initally (Error happend during program execution)
// syntax 
// try{
//  All our logic inside the try block 
// }
// catch(exception){
//   Inform error to user 
// }

// Scope - The way how program access variable 
// 1. Local Scope - Defining a variable inside a function (we cannot access variable outside the function where we definied it)
// 2. Global Scope - Defining a variable outside a function (It can be accessable inside any function)

var message_global = "Good Day!";

function welcomeMessage(){
  var message = "Hello All! Good Day";
  alert(message_global);
}

function greetingMessage(){
  alert(message_global);
}

// Timers 
// setTimeout - It is used to delay the code execution 
// syntax
// setTimeout(function(){
//   code logic
// }, milliseconds);

// 1 second - 1000 milliseconds

function delayCode(){
  alert("Delay code function exection started");

  setTimeout(function(){
    alert("Time Delay code executed");
  }, 5000);
}


// setInterval  - It is used to run a code in given time interval 
// syntax 
// setInterval(function(){
//  code logic
// }, milliseconds);
var timer;

function TimeLoop(){
  alert("Time Loop function exection started");

  timer = setInterval(function(){
    alert("Time Loop code executed");
  }, 5000);
}

// clearInterval - It is used to stop the Set Interval loop 

function stopInterval(){
  clearInterval(timer);
}

// Storage 
// 1. Local Storage 
// 2. Session Storage 

// Local Storage - Storing small value in browser permanently, max size if 5 MB to 13 MB 
// There are 4 types of actions - Add value, Read value, Edit value, Delete value

// Add new value
// localStorage.setItem("key", value);
// value - Number, String and Boolean

localStorage.setItem("username", "karthick@gmail.com");
localStorage.setItem("first_name", "karthick");
localStorage.setItem("last_name", "kumar");
localStorage.setItem("age", 28);

// Read value 
// localStorage.getItem(key);
// after taking this value, we can use variable to store it.
localStorage.getItem("username");

//Edit or Update value 
// localStorage.setItem("existingkey", newValue);
localStorage.setItem("username", "vk@yahoo.com");

// Delete Value 
// 1. Delete All value
localStorage.clear();

// 2. Delete a particular value

// localStorage.removeItem("key");
localStorage.removeItem("last_name");

// Session Storage - Storing small value in browser temporary (till the use close brower tab), max size is 5 MB to 13 MB 
// There are 4 types of actions - Add value, Read value, Edit value, Delete value

// Add value 
// sessionStorage.setItem("key", value);

sessionStorage.setItem("accountName", "karthickkumar");

// Read Value 
// sessionStorage.getItem("key");

sessionStorage.getItem("accountName");

// Edit value
// sessionStorage.setItem("existingkey", newValue);
sessionStorage.setItem("accountName", "kk");

// Delete Value 
// 1. Delete All value
// sessionStorage.clear();

// 2. Delete a particular value
// sessionStorage.removeItem("key");

var student = { 
  name : "mr.abc", age : 24 
};

var list = [ { 
  name : "mr.abc", age : 24 
}, { 
  name : "mr.abc", age : 24 
}];
// To Store Object or Array into localStorage / sessionStorage
// Convert Object / Array to String form-at 
// JSON.stringify(variable);

localStorage.setItem("student_object", JSON.stringify(student));
localStorage.setItem("student_array", JSON.stringify(list));

// Reconver from String formated Object / Array to Actual
// JSON.parse(stringifyOutput);

JSON.parse(localStorage.getItem("student_object"));
JSON.parse(localStorage.getItem("student_array"));

// Operation in Array
var nameList = ["karthick", "kumar", "yuvaraj"]; 

console.log(nameList);

// To get number of record inside Array (getting count)
// array_variable_name.length;
console.log(nameList.length);

// To Add new value into Array
// array_variable_name.push(value);

function addValueToArray(){
  var name = prompt("Enter you name");
  nameList.push(name);
  alert(nameList);
  console.log(nameList);
}

// To edit or modify existing value in Array
// array_variable_name[index] = new value;

nameList[1] = "mr.abc"

// To delete a value from Array
// array_variable_name.splice(index, deleteCount);
nameList.splice(1, 1);

// Setting up pre-request software insalltion for React JS
// Download NODE JS

// https://nodejs.org/en


// Widows Search -> cmd -> Open Command Prompt  -> Type

// npm install -g npx
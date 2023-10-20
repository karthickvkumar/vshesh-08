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
  first_name : "mr.abc",
  last_name : "zyx",
  age : 24,
  roll_number : "457AER856",
  standard : "XI"
};

// Array - It is a List of Data and it should have similar data type
// syntax 
// var variable_name = [value1, value2, value3, ... , valueN];

var student_list = [
  {
    first_name : "mr.abc",
    last_name : "zyx",
    age : 24,
    roll_number : "457AER856",
    standard : "XI"
  },
  {
    first_name : "mr.abc",
    last_name : "zyx",
    age : 24,
    roll_number : "457AER856",
    standard : "XI"
  },
  {
    first_name : "mr.abc",
    last_name : "zyx",
    age : 24,
    roll_number : "457AER856",
    standard : "XI"
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

function printWelcomeMessage(){
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

function check_voiting_eligiblity(){
  var age = prompt("Enter you Age");
  if(age >= 18){
    alert("The user is eligible for Vote");
  }
  else{
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

function check_age_catorgory(){
  var age = prompt("Enter you Age");
  if(age < 18){
    alert("User belongs to Minor Category");
  }
  else if(age >= 18 && age < 60){
    alert("User belongs to Major Category")
  }
  else{
    alert("User belongs to Senior Category")
  }
}

// Loop 
// syntax
// for(intialization; condition; increment/decrement ){
//  code 
// }

for(var count = 1; count <= 20; count++){
  console.log("The loop is running on count ", count);
}

// Problem Statment 
// To find all even number for the given N number of Limit 
// 1. To pass a number value (Nth number)
// 2. Number % 2 == 0 --- The Number is even 
// 3. Create loop -> From 1 to Nth number

function findEvenNumbers(){
  var lastNumber = prompt("Enter the Last Number");
  for(var startNumber = 1; startNumber <= lastNumber; startNumber++){
    if(startNumber % 2 == 0){
      console.log(startNumber, "is a even number");
    }
  }
}


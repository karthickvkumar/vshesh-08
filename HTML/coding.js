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
// onclick="function_name()" (via HTML Attribut)

// function - keyword
// function_name - Placeholder (It should be a proper and meaningful name, contain only A-Z, a-z, 0-9, _, $)

function printWelcomeMessage(){
  var message = "Hello! Good Day";
  console.log(message);
  alert(message);
}
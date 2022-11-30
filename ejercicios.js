//ejercicio 1

// primeros comentarios

/*primeros comentrios con
  salto de lineas*/ 


//ejercicio 2
var myName;

//ejercicio 3

// Setup
var a;

// Only change code below this line

a= 7;

//ejercicio 4 - Assign the contents of a to variable b.



// Setup
var a;
a = 7;
var b;

// Only change code below this line

b=a

//ejercicio 5 - Define a variable a with var and initialize it to a value of 9.

var a=9;

//ejercicio 6 - Create two new string variables: myFirstName and myLastName and assign them the values of your first and last name, respectively.
var myFirstName= 'Leandro'
var myLastName= 'Tombetta'

//ejercicio 7 -Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.
// Only change code below this line
var a=5;
var b=10;
var c="I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

//ejercicio 8 -Modify the existing declarations and assignments so their names use camelCase.

// Variable declarations
var studlyCapVar ;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//ejercicio 9 - Update the code so it only uses the let keyword.

let catName = "Oliver";
let catSound = "Meow!";

// ejercicio 10 - Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices. Do not change the strings assigned to the variables.
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

//ejercicio 11 - Change the 0 so that sum will equal 20.

const sum = 10 + 10;

//ejercicio 12 - Change the 0 so the difference is 12.

const difference = 45 - 33;

//ejercicio 13 - Change the 0 so that product will equal 80.

const product = 8 * 10;

//ejercicio 14 - Change the 0 so that the quotient is equal to 2.

const quotient = 66 / 33;

// ejercicio 15 -Change the code to use the ++ operator on myVar.
let myVar = 87;

// Only change code below this line
myVar++;


//ejercicio 16 - Change the code to use the -- operator on myVar.
let myVar = 11;

// Only change code below this line
myVar --;


//ejercicio 17 -Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).
const ourDecimal = 5.7;

// Only change code below this line

var myDecimal= 3.4

//ejercicio 18 -Change the 0.0 so that product will equal 5.0.
const product = 2.0 * 2.5;


//ejercicio 19 -Change the 0.0 so that quotient will equal to 2.2.

const quotient = 4.4 / 2.0;

//ejercicio 20 -Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.

let remainder = 11;

remainder=remainder % 3

//ejercicio 21 -Convert the assignments for a, b, and c to use the += operator.

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c +=7;


//ejercicio 22 -Convert the assignments for a, b, and c to use the -= operator.

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -=6;
b -=15;
c -=1;


//ejercicio 23 - Convert the assignments for a, b, and c to use the *= operator.

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

//ejercicio 24 - Convert the assignments for a, b, and c to use the /= operator.

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /=  12;
b /=  4;
c /=  11;

//ejercicio 25 Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:

const myStr = "I am a \"double quoted\" string inside \"double quotes.\"";


//ejercicio 26 - Change the provided string to a string with single quotes at the beginning and end and no escape characters.

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';


//ejercicio 27 - Change the provided string to a string with single quotes at the beginning and end and no escape characters.

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

//ejercicio 28 - Assign the following three lines of text into the single variable myStr using escape sequences.

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

//ejercicio 29 -Build myStr from the strings This is the start. and This is the end. using the + operator. Be sure to include a space between the two strings

const myStr = "This is the start." + " This is the end."; // Change this line


//ejercicio 30 - Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr, then add on the second string.

let myStr="This is the first sentence. ";
myStr += "This is the second sentence."

//ejercicio 31 - Set myName to a string equal to your name and build myStr with myName between the strings My name is and and I am well!

// Only change clean code below this line
const myName = "Leandro";
const myStr = "My name is " + myName +"My name is";


//ejercicio 32 - Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.

// Change code below this line
const someAdjective = "unString";
let myStr = "Learning to code is ";
myStr +=someAdjective

//ejercicio 33 - Use the .length property to set lastNameLength to the number of characters in lastName.

// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;


//ejercicio 34 - Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

//ejercicio 35 -  Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.

// Setup
let myStr = "Jello World";

// Only change code below this line
myStr= "Hello World"; // Change this line
// Only change code above this line

console.log(myStr)

//ejercicio 36 - Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.

// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

//ejercicio 37 - Use bracket notation to find the last character in the lastName variable.



// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length -1]; // Change this line

//ejercicio 38 - Use bracket notation to find the second-to-last character in the lastName string.

// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

//ejercicio 39 - In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = myNoun+" "+ myAdjective +" " +myVerb+" " + myAdverb; // Change this line

// Only change code above this line



//ejercicio 40 - Modify the new array myArray so that it contains both a string and a number (in that order).

// Only change code below this line
const myArray = ["asdsa", 12];
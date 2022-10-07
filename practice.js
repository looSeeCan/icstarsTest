//Kiong
// juan
// wendy
///CONSOLE
/// this is a test from looSeeCan
console.log("CONSOLE")

console.log(42);
console.log(`I have been preparing for "icstars" for about 3 months now.`);

//COMMENTS
console.log("COMMNETS");

// single line comments
/*multi line comments*/

//DATA TYPES
console.log("DATA TYPES");

/*Data types are the classifications we give to different types of data that we use in programmning.
 * In JavaScript, there are seven fundamental data types: */

// 1. Number: Any number, including numbers with decimals: 4, 8, 1516, 24.42.
/* 2. String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc) surrounded by
 *    single quotes: '.....' or double quotes ".....". Though we prefer single quotes. Some people like to think of
 *    string as a fancy word for text.*/
/* 3. Boolean: This data type only has two possible values - either true or false (without quotes). It's helpful
 *    to think of booleans as on and off switches or as an answer to a yes and no question.*/
/* 4. Null: This data type represents the intentional absence of a value and is represented by the keyword null
 *    (without quotes).*/
/* 5. Undefined: This data type is denoted by the keyword undefinde (without quotes). It also represents the absence
 *    of a vlue though it has a different use than null.*/
/* 6. Symbol: A newer feature to the language, symbols are unique identifiers, usefull in more complex coding.
 *    no need to worry about these for now.*/
/* 7. Object: Collections of related data.*/

/*The first 6 of these are considered primitive data types. They are the most basic data types in the language.
 * Objects are more complex and you will learn more about them as you progress thru JavaScript. At first, seven
 * types may not seem like that many, but soon you will see the world opens with possibillities once you start
 * leverageing each one. As you learn more about objects, you'll be able to create complex collections of data.*/

console.log("JavaScript");
console.log("2011");
console.log("Woohoo! I love to code! #codecademy");

//ARITHMETIC OPERATORS
console.log("ARITHMETIC OPERATORS");

/*An operator is a character that performs a task in our code. JavaScript has several built-in arithmetic operators
 * , that allow us to perform mathematical calculations on numbers. These include the following operators and their
 * corrosponding symbols: */
 
 // 1. Add: +
 // 2. Subtract -
 // 3. Multiply *
 // 4. Divide /
 // 5. Remainder %
       /* the remainder operator, sometimes called the modulo, returns the number that remains after the right-hand
       number divides into the left-hand number as many times as it evenly can: 11 % 3 = 2, becasuse, 3 fits into
       * 11 2 times, leaving 2 as the remainder*/
console.log(42 + 3.5);
console.log(2021 - 1969);      
console.log(240 / 65);
console.log(.2708 * 100);
console.log(11 % 3);

//STRING CONCATENATION
console.log("STRING CONCATENATION");

console.log("I am going to use concatenation for this sentence.");
console.log("I" + " " + "am" + " " + "going" + " " + "to" + " " + "use" + " " + "concatenation" + " " + "for" + " "
 + "this" + " " + "sentence.");
console.log("I " + "am " + "going " + "to " + "use " + "concatenation " + "for " + "this " + "sentence. ");

//PROPERTIES
console.log("PROPERTIES");

console.log("PROPERTIES".length);
//the . is another operator. We call it the dot operator.

console.log("Teaching " + "the " + "world " + "how " + "to " + "code.".length);
console.log("Teaching the world how to code.".length);
console.log("Teachingtheworldhowtocode.".length);

//METHODS
console.log("METHODS");

/*Remember thet methods are actions that we can perform. JavaScript provides a number of string methods*/
/* we call, or use, these methods by appending an instance with: a period (the dot operator), the name of the method
 * , and opening and closing parenthesis*/

console.log("Codecademy".toUpperCase());
console.log("Codecademy".toLowerCase());
console.log("Codecademy".startsWith("C"));
console.log("Codecademy".endsWith("y"));
console.log("         Remove                   whitespace   ".trim()); /*so the whitespace is only before and after
not inbetween the string*/

//BUILT-IN OBJECTS
console.log("BUILT-IN OBJECTS");

//Math object. The great thing about objects is that they have methods

let num = Math.random();
let num1 = 5
console.log(num); // prints a random num between 0 and 1.
console.log(num * num1); // prints a random num between 0 and 5. Remember that 0 is inclusive and 5 in exclusive
console.log(Math.floor(num * num1)); // floor returns the largest integer <= a given num
//without the variables the code looks like
Math.floor(Math.random() * 5);

// a method that returns the smallest integer >= a decimal num
console.log(Math.ceil(1.01));

//Number object
console.log(Number.isInteger(123.3));
///VARIABLES
console.log("VARIABLES");

var myName = "Lucycan Ly"; /*var is short for variable, myName is the varables name, = is the assignment operator
it assigns the value "Lucycan Ly" to the variable myName. You can also say that the myName variable is initialized
* with the value "Lucycan Ly"*/
myName = "Sheng Yang";
console.log(myName);

// var in no longer used in es6 changes
let myName1 = "Lucycan Ly";
const myName2 = "Sheng Yang";

//MATHEMATICAL ASSIGNMENT OPERATORS
console.log("MATHEMATICAL ASSIGNMENT OPERATORS");

/*let w = 4;
w = w + 1;
console.log(w);*/

//another way to write the above code
let w = 4;
w += 1;
console.log(w);

w -= 1;
console.log(w);

w /= 2; // expected output 2
console.log(w);

w *= 3; // expected output 6
console.log(w);

w %= 4//  expected output 2
console.log(w);

//THE INCREMENT AND DECREMENT OPERATOR
console.log("THE INCREMENT AND DECEREMENT OPERATOR");

let a = 10; a++; console.log(a); a--; console.log(a);

let gainDollar = 3; let lostDollar = 50; gainDollar ++, lostDollar --; console.log(gainDollar, lostDollar);

//STRING CONCATENATION WITH VARIABLES
console.log("STRING CONCATENATION WITH VARIABLES");

let myPet = "armadillo"; console.log("I own a pet " + myPet + ".");

//STRING INTERPOLATION
console.log("STRING INTERPOLATION");

//using template literals in ES6

const myPet1 = "tiger"; console.log(`I own a pet ${myPet1}.`);

//TYPEOF OPERATOR
console.log("TYPE OF OPERATOR");

/*While writng code, it can be usefull to keep track of the data types of the variables in your program. If you
 * need to check the data type of a variables value, you can use the typeOf operator*/
const unknown = "foo"; const unknown1 = 21; const unknown2 = true; const unknown3 = null;
console.log(typeof unknown, typeof unknown1, typeof unknown2, typeof unknown3, )


///CONDITIONAL STATEMENTS
console.log("CONDITIONAL STATEMENTS");

//If STATEMENTS
console.log("IF STATEMENTS");

if (true) {console.log("This messaage will print.");}

let sale = true; sale  = false; if (sale) {console.log("Time to buy!");} else{console.log("Time to wait for a sale!");};

//COMPARISON OPERATORS
console.log("COMPARISON OPERATORS");

/* less than: < , greater than: >, less than or equal to <=, greater than or equal to: >=, is equal to: ===,
 * is not equal to: !==*/

/*All comparison statements evaluate to either true or false and are made up of: two values that will be compared
 An operator that separates the values and compares them accordingly (>, <, <=, >=, ===, !==)*/
 
let hungerLevel = 7; if (hungerLevel > 7) {console.log("Time to eat!");} else {console.log("We can eat later!");};

//LOGICAL OPERATORS
console.log("LOGICAL OPERATORS");

//the and operator: &&, the or operator: ||, the not operator(bang operator): !.

//when we use the && operator, we are checking that two things are true, both conditions must be true:
let stopLight = "green"; let pedestrians = false;
if (stopLight === "green" && pedestrians === false) {console.log("GO");} else {console.log("STOP");};

//if we only care about either condition being true we can use the || operator:
let day = "Saturday";
day = "Friday";
if (day === "Saturday" || day === "Sunday") {console.log("Enjoy the weekend!");} else {console.log("Do some work!");};

//the ! operator reverses or negates, the value of boolean:
let excited = true; console.log(!excited);
let sleepy = false; console.log(!sleepy);

//TRUTHY OR FALSY
console.log("TRUTHY OR FALSY");

//Let's consdier how non-boolean data types, like strings or numbers are evaluated when checekd inside a condition.
/*Sometimes you will want to check if a variable exists and you won't neccessarilly want it to = a specific
 * value - you'll only check to see if the varible has been assigned a value.*/
let myVariable = ""; console.log(typeof myVariable); //null and empty strings evaluate to false
if (myVariable) {console.log(`String ${myVariable}`);} else {console.log("The variable does not exist.")};

let wordCount = 100; //if there is a value in wordCount then true, if not then false
if (wordCount) {console.log("Great you started your work!");} else {console.log("Better get to work!");};

let favoritePhrase = "";
if (favoritePhrase) {console.log("This string doesn't seem to be empty.");}
 else {console.log("This string is definately empty.")};

//TRUTHY AND FALSY ASSIGNMENT
console.log("TRUTHY AND FALSY ASSIGNMENT");

/*let userName = ""; let defaultName; console.log(typeof userName, typeof defaultName);
if (userName) {defaultName = userName} else {defaultName = "Stranger"};
console.log(defaultName);//expected output = Stranger*/

//short hand for the code above using || operator
//instead of using an if statement the variable userName is falsy so the "Stranger" gets assigned
//short circuit evaluation
let userName = ""; let defaultName = userName || "Stranger"; console.log(defaultName);

let tool = "marker"; let writingUten = tool || "pen";
console.log(`The ${writingUten} is mightier than the sword.`); /*expected output is going to be
marker, because, the or operator is checking to see if the varable tool has a value. It does, so it evaluates
* to truthy and the value "marker" is assigned to writingUten */

//TERNARY OPERATOR
console.log("TERNARY OPERATOR");

//use ternary operator to simplify an if else statement
let isNightTime = true;
if (isNightTime) {console.log("Turn on the lights!");} else {console.log("Turn off the lights!");};

//ternary
isNightTime = !true;
isNightTime ? console.log("Ternary: Turn on the lights!") : console.log("Ternary: Turn off the lights!");

let isLocked = true;
isLocked ? console.log("You will need a key to open the door.") : console.log("You will not need a key to open the door.");

//use if statement for above
if (isLocked) {console.log("You will need a key to open the door.");} else {console.log("You will not need a key to open the door.");};

let favoritePhrase1 = "Love That!";
favoritePhrase1 === "Love That shit!" ? console.log("This is my favorite phrase.") : console.log("This is not.");

//ELSE IF STATEMENT
console.log("ELSE IF STATEMENT");

/*the else if statement always conmes after the if statement and before the esle statement. The else if statement
 * also takes a condition*/
let stopLight1 = "red";
if (stopLight1 === "red") {console.log("Stop!");} else if (stopLight1 === "yellow") {console.log("Slow down!");}
 else if (stopLight1 === "green") {console.log("Go!");} else {console.log("Be cautious!");};

let season = "Fall"
if (season === "spring") {console.log("It's Spring!");}
 else if (season === "Summer") {console.log("It's Summer!");}
 else if (season === "Fall") {console.log("It's Fall!");}
 else if (season === "Winter") {console.log("It's Winter!");}
 else {console.log("The weather is wierd these days!");};

//THE SWITCH KEYWORD
console.log("THE SWITCH KEYWORD");

/*else if statements are a great tooll if we need to check multiple conditions. In programming, we often find our
 * selves needing to check multiple values and handling them differently*/
let groceryItem = "pear";

if (groceryItem === "tomato") {console.log("Tomatoes are $0.49.");}
 else if (groceryItem === "papaya") {console.log("Papay's are $1.29.");} else {console.log("Invalid Item.");};
 
//switch
switch (groceryItem) {
  case "papaya": console.log("Papay's are $1.29."); break;  
  case "tomato": console.log("Tomatoes are $0.49."); break;
  case "apple": console.log("Apples are $0.79."); break;
};

let athleteFinalPos = "third place";
switch (athleteFinalPos) {
  case "first place" : console.log("Gold");break;
  case "second place" : console.log("Silver");break;
  case "third place" : console.log("Bronze");break;
  default: console.log("No medal awarded.");  
};


///FUNCTIONS
console.log("FUNCTIONS");

/*A function is a reusable block of code that groups together a sequence of statements to perform a specific task*/

//FUNCTION DECLARATIONS

/*just how a variable declaration binds a value to a variable name, a function declaration binds a function to a name,
or an identifier*/
function greetWorld() {console.log("Hello World!");};
// function = function keyword, greetWorld() = identifier,  {} = function body, block of statements, code that is executed

function getReminder() {console.log("Water the plants.");};
function greetInSpanish() {console.log("Buenas Tardes.")};

//CALLING A FUNCTION
console.log("CALLING A FUNCTION");
function sayThanks() {console.log("Thank you for your purchase, we appreciate your business!");};

//call the above function
sayThanks();

//PARAMETERS AND ARGUMENTS
console.log("PARAMETERS AND ARGUMENTS");

function sayThanks(name) {console.log(`Thank you for your purchase ${name}. We appreciate your business.`);};
sayThanks("Lucycan Ly");

//DEFAULT PARAMETERS
console.log("DEFAULT PARAMETERS");

/*One of the features added in ES6 is the abbility to use default parameters. Default parameters allow parameters to
 * have a defualt value in case there is no argument passed into the function or if the argument is undefined when called*/
function greeting (name = "") {console.log(`Hello ${name}`);};
greeting("Sheng Yang");
greeting();

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs")
{console.log(`Remember to buy ${item1}.`); console.log(`Remember to buy ${item2}.`); console.log(`Remember to buy ${item3}.`);};
makeShoppingList("bacon", "sausage", "honey" );

//RETURN
console.log("RETURN");

/*When a function is called, the computer will run thru the functions code and evaluate the result of calling the
function. By default the resulting value is undefined*/
function rectangleArea(width, height) {let area = width * height};
console.log(rectangleArea(5, 7)); //undefined

//to pass back information from a function call, we use a return statement
function recArea(width, height)
{if(width < 0 || height < 0) {return "You need positive integers to calculate.";} else {return width * height};
};

console.log(recArea(1, -1));
console.log(recArea(1, .1));

function monitorCount(rows, columns) {return rows * columns;};
const numOfMonitors = monitorCount(5, 4)
console.log(numOfMonitors);

//HELPER FUNCTIONS
console.log("HELPER FUNCTIONS");

/*We can also use the return value of a function inside another function. These functions being called within another
 * function are often reffered to as helper functions. Since each function is carrying out a specific task, it makes
 * our code easier to read and debug if neccessary*/
function multiBy9fifths(number) {return number * 9/5};
function getFehren(celsius) {return multiBy9fifths(celsius) + 32;};

console.log(getFehren(15)); /*calls getFehren, passes the argument 15 to the param celsius, the return calls the
multiBy9fifths function with the celsius argument (15), passes that to the number parameter, the return multiplies
* number 15 by 9/5, then 32 is added*/
// expected output (15 * 9/5) + 32 = 59

//FUNCTION EXPRESSIONS
console.log("FUNCTION EXPRESSIIONS");

const plantNeedsWater = function(day) {if (day ==="Wednesday") {return true} else {return false}};
console.log(plantNeedsWater("Wednesday"));

//ARROW FUNCTIONS
console.log("ARROW FUNCTIONS");

const plantNeedsWater1 = day => {if (day === "Friday") {return true} else {return false};}
console.log(plantNeedsWater1("Monday"));

//CONCISE BODY ARROW FUNCTIONS
console.log("CONCISE BODY ARROW FUNCTIONS");

/*javaScript also provides several ways to refactor arrow function syntax. The most condensed form of the function is
as concise body.*/
const plantNeedsWater2 = day => day === "Monday" ? true : false; //the curly braces and the return keyword is ommitted
console.log(plantNeedsWater2("Monday"));

///SCOPE
console.log("SCOPE");

//BLOCKS AND SCOPE
console.log("BLOCKS AND SCOPE");

const city = "New York City";
//function declaration
function logCitySkyLine() {let skyScraper = "Empire State Building"};
//function expression
const logCitySkyLine1 = function() {let skyScraper = "Empire State Building";};
//arrow function
const logCitySkyLine2 = () => {let skyScraper = "Empire State Building";};

//BLOCK SCOPE
console.log("BLOCK SCOPE");

/*when a variable is defined inside a block, it is only accessible to the code within the curly braces
 * We say that the variable has block scope, because, it is only accessible to the lines of code within that block.
 * Variables that are declared with block scope are known as local variables, because, they are only available to the
 * code that is part of the same block*/
const logVisibleLights = () => {const lightWaves = "Moonlight"; console.log(lightWaves);};
//console.log(lightWaves); //error, not defined
logVisibleLights();

//SCOPE POLLUTION
console.log("SCOPE POLLUTION");

let num2 = 50; const logNum = () => {num2 = 100; console.log(num2);}; logNum();
console.log(num2); //because num2 is declared globaly, it is changed by the block code in the function

//PRACTICE GOOD SCOPING
console.log("PRACTICE GOOD SCOPING");

//we should folow best practices for scoping variables as tightly as possible using block scope
//tightly scoping your variables will greatly improve your code in several ways

//it will make your code more legible, since the block will organize your code in discreet sections
//it makes your code more understandable since it clarifies which variables are associated with different parts of the program rather than having to keep track of them line after line
//its easier to maintain your code since your code will be modular
//it will save memory in your code because it will cease to exists afer the block finishes running

const logSkyColor1 = () => {const dusk = true; let color = "blue";
if (dusk) {let color = "pink"; console.log(color);} console.log(color);};
logSkyColor1();


///ARRAYS
console.log("ARRAYS");

//Organizing and storing data is a fundamental concept of programming.

let newYearsRes = ["Keep a journal", "Take a falconry class", "Learn how to juggle",];
console.log(newYearsRes[0], newYearsRes[1], newYearsRes[2]);
console.log(newYearsRes[0][1]); //expected output e

//ACCESSING ELEMENTS
console.log("ACCESSING ELEMENTS");

const famousSayings = ["Fortune favors the brave.", "A joke is a very serious thing.", "Where there is love there is life."];
const listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[1], famousSayings[2]);

//UPDATE ELEMENTS
console.log("UPDATE ELEMENTS");

let season1 = ["Spring", "Summer", "Fall",  "Winter"];
//change element "Fall" to "Autumn"
season1[2] = "Autumn"; console.log(season1);

//ARRAYS WITH LET AND CONST
console.log("ARRAYS WITH LET AND CONST");

let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Siracha"];
const utensils = ["Fork", "Knife", "Chopsticks","Spork"];

condiments[0] = "Mayo"; console.log(condiments);
condiments = ["Mayo"];

utensils[3] = "Spoon"; console.log(utensils);

//THE .LENGTH PROPERTY
console.log("THE .LENGTH PROPERTY");

//returns the number of items in the array
const objectives = ["Learn a new language", "Read 52 books", "Run a marathon"]; console.log(objectives.length);

//THE .PUSH METHOD
console.log("THE .PUSH METHOD");

const chores = ["wash dishes", "do laundry", "take out trash"]; chores.push("homework", "QT");
console.log(chores);

//THE .POP METHOD
console.log("THE .POP METHOD");

//removes the last item of the array
console.log(chores.pop());
console.log(chores); chores.pop(); console.log(chores);

//MORE ARRAY METHODS
console.log("MORE ARRAY METHODS");

const groceryList2 = ["orange juice", "bananas", "coffee beans", "brown rice","pasta", "coconut oil", "plantains"];

//remove the first item from the array
console.log(groceryList2.shift()); console.log(groceryList2);

//add to the begining of the list
console.log(groceryList2);
console.log(groceryList2.unshift("popcorn")); console.log(groceryList2);

//separate the grocerylist
console.log(groceryList2.slice(1, 5));

const pastaIndex = groceryList2.indexOf("pasta");
console.log(pastaIndex);

//ARRAYS AND FUNCTIONS
console.log("ARRAYS AND FUNCTIONS");

const flowers = ["peony", "daffodil", "marigold",]; const addFlower = arr => arr.push("lilly"); addFlower(flowers);
console.log(flowers);

const concept = ["Arrays", "can", "be", "mutated",]; const changeArr = arr => {arr[3] = "MUTATED";};
changeArr(concept); //expected output "mutated" = "MUTATED"
console.log(concept);

function removeElement(newArr) {newArr.pop()}; removeElement(concept); console.log(concept);

///NESTED ARRAYS
console.log("NESTED ARRAYS");

const nestedArr = [[1, 2, 3, 4], [2, 3]]
console.log(nestedArr[0][0], nestedArr[0][1], nestedArr[0][2], nestedArr[0][3]);
//index [2, 3]
console.log(nestedArr[1][0], nestedArr[1][1]);

let numClusters = [[1, 2], [3, 4], [5, 6],]; const target = numClusters[2][1]; console.log(target);

let randomInt = (min, max) => {min = Math.ceil(min); max = Math.floor(max);
let x = Math.floor(Math.random() * (max - min) + min); return x};

console.log(`Random Integer: ${randomInt(1, 70)}`);
 

///LOOPS
console.log("LOOPS");

//REPEATING TASK MANUALY
console.log("REPEATING TASK MANUALLY");

let vacationSpots = ["China", "Mongolia", "Japan",];
console.log(vacationSpots[0], vacationSpots[1], vacationSpots[2]);

//THE FOR LOOP
console.log("THE FOR LOOP");

for (let i = 0; i < 11; i++) {console.log(i);};

//LOOPING IN REVERSE
console.log("LOOPING IN REVERSE");

for (let counter = 0; counter < 4; counter++) {console.log(counter);};

//loop the above backwards
for (let counter = 3; counter >= 0; counter--) {console.log(counter);};

//LOOPING THRU ARRAYS
console.log("LOOPING THRU ARRAYS");

const vacationSpots1 = ["Bali", "Paris", "Tulum",];
for (let i = 0; i < vacationSpots1.length; i++) {console.log(vacationSpots1[i]);};

//NESTED LOOPS
console.log("NESTED LOOPS");

const bobsFollowers = ["Lucycan Ly", "Sheng Yang", "Pang Xiong", "Salena Vang",];
const tinasFollowers = ["Mai", "Lucycan Ly", "Sheng Yang",];
const mutualFollowers = [];
for (let i = 0;  i < bobsFollowers.length; i++) {
for (let j = 0; j < tinasFollowers.length; j++) {
 if (bobsFollowers[i] === tinasFollowers[j]) {mutualFollowers.push(bobsFollowers[i]);}
}
};
console.log(mutualFollowers);

//THE WHILE LOOP
console.log("THE WHILE LOOP");






console.log("I am sitting in my cubicle at the moment")

const cards = ["diamond", "spade", "heart", "club"];
let currentCard;

//THE WHILE LOOP
console.log("THE WHILE LOOP");

//a for loop that prints 1, 2, 3
for (i = 1; i < 4; i++) {console.log(i);};

//a while loop that prints 1, 2, 3
let j = 1;
while (j < 4) {console.log(j); j++};

while (currentCard != "spade") { currentCard = cards[Math.floor(Math.random() * 4)];}
console.log(currentCard);

//THE BREAK KEYWORD
console.log("THE BREAK KEYWORD");

/**in our code, when we want to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasnt
 * been met, we can use the keyword break*/ 
for (let i = 0; i < 99; i++) {if (i > 2 ) {break;}; console.log("banana")}; console.log("Orange");

const rapperArray = ["Lil Kim", "Jay Z", "Notorious B.I.G.", "Tupac",];
//log each element in the array with a for loop //if 'Notorious B.I.G. is selected then break
for (let i = 0; i < rapperArray.length; i++) {
    //console.log(rapperArray[i]);
    if (rapperArray[i] === "Notorious B.I.G.") {console.log(rapperArray[i]); break;} else {console.log(rapperArray[i]);};
};
console.log("And if you don't know, now you know");

//HIGHER ORDER FUNCTIONS
console.log("HIGHER ORDER FUNCTIONS");

//JavaScript functions behave like any other data type in the language; we can assign functions to variables, and we can reassign them to variables

const announceThatIamDoingImportantWork = () => {console.log("I am doing very important work!")}
announceThatIamDoingImportantWork();
//I don't understand this:
/*Notice how we assign "announceThatIamDoingImportantWork" without () as the value to the busy variable. We want to assign the value of the 
function itself, not the value it returns when invoked*/
const busy = announceThatIamDoingImportantWork;
busy();

const checkThat2plus2equals4million = () => {
    for (let i = 1; i < 1000000; i++) {
        if ((2 + 2 ) != 4) {
            console.log("Something has gone vary wrong :(");
        }
    };  
};
const is2p2 = checkThat2plus2equals4million;
is2p2();
console.log(is2p2.name);

//FUNCTIONS AS PARAMETERS
console.log("FUNCTIONS AS PARAMETERS");

/*Since functions can behave like any other type of data in JavaScript, it might not surprise you to learn that we can also pass functions
(into other functions) as parameters */

const timeFuncRuntime = funcParameter => {
    let t1 =  Date.now(); let t2 = Date.now();
    console.log(t1, funcParameter(), t2);
    return t2 - t1;
};
const add1to1 = () => 1 + 1; console.log(timeFuncRuntime(add1to1));

//im not sure why this argument does not pass on to the funcion 
/*timeFuncRuntime((add1to1) => {
    for (let i = 10; i > 0; i--) {
        console.log(i);
    };
});*/
console.log("right here");
//time2p2 = timeFuncRuntime(is2p2); //this code was giving me an undefined for the funcParameter
time2p2 = timeFuncRuntime; console.log(time2p2(is2p2)); //it gives me an undefined because "is2p2" does not return anything
//but, the correct way to declare this variable with the function value is without the () and then pass the argument when you invoke the variable
//console.log(timeFuncRuntime(is2p2));

const checkConsistantOutPut = (func, value) => {
    let firstTry = func(value);
    let secondTry = func(value);
    if (firstTry === secondTry) {
        return firstTry
    }
        else {
            return "This function returned inconsistant results."
        };
};
const addTwo = num => num + 2;

console.log(checkConsistantOutPut(addTwo, 10));

console.log("PLUS5");
let plus5 = num => {
    return num + 5;
};
let f = plus5; console.log(f(10), f(11)); //declare the variable with the value of the function without the () and then pass the argument when
//you invoke the variable

console.log("isEven");
const isEven = n =>  n % 2 == 0;
let printMsg = (evenFunc, num) => {const isNumEven = evenFunc(num); console.log(`The number ${num} is an even number: ${isNumEven}.`); };

printMsg(isEven, 11); console.log(isEven(10));

 //ITERATORS
console.log("ITERATORS");

const groceries = ["brown sugar", "salt", "cranberries", "walnuts",];

groceries.forEach(function(groceryItem){console.log(`- ${groceryItem}`)});
//groceries.forEach(groceryItem => {console.log(`- ${groceryItem}`)});
//for ( let i = 0; i < groceries.length; i++) {console.log("- " + groceries[i]);};

const fruits = ["mango", "papaya", "pineapple", "apple",];
const fruit = type => console.log(`I want to eat a(n) ${type}.`);

fruits.forEach(fruit); //remember a callback function is a function passed as an argument to another function

//THE .MAP METHOD
console.log("THE .MAP METHOD");

const numbers = [1, 2, 2, 4, 5, 6, 5];
const bigNumbers = numbers.map(x => x * 10); console.log(bigNumbers);

const animals = ["Hen", "Elephant", "Lama", "Leapord", "Ostich", "Whale", "Octopus", "Rabbit", "Lion", "Dog"];
const secretMessage = animals.map(animal => animal[0]);
console.log(secretMessage);

const henEverything = animals.map(animal => animal = "Hen");
console.log(henEverything);

//THE .FILTER METHOD
console.log("THE .FILTER METHOD");

const words = ["chair", "music", "pillow", "brick", "pen", "door"];
const shortWords = words.filter(word => word.length < 6);
console.log(shortWords);

//googed this, don't understand what is going on here, but it works to find duplicates
const toFindDuplicates = number => numbers.filter((item, index) =>  numbers.indexOf(item) !== index)
const duplicateElementa = toFindDuplicates(numbers);
console.log(duplicateElementa);

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNums = randomNumbers.filter(smallNum => smallNum < 250);
console.log(smallNums);

const favoriteWords = ["nostalgia", "hyperbole", "fervent", "esoteric", "serene"];
const longFavWords = favoriteWords.filter(moreThan7 => moreThan7.length > 7);
console.log(longFavWords);

//THE .FINDINDEX METHOD
console.log("THE .FINDINDEX");

const jumbledNums = [123, 25, 78, 5, 9,];
const lessThanTen = jumbledNums.findIndex(num => num < 10);
console.log(lessThanTen); console.log(jumbledNums[3]);

console.log("animals");
const animals1 =  ["hippo", "tiger", "lion", "seal", "cheatah", "monkey", "salamander", "elephant"];
const foundAnimal = animals1.findIndex(animal => animal === "elephant");
console.log(foundAnimal);

//find the first animal that starts with s
const findS = animals1.findIndex(animalS => animalS[0] === "s");
console.log(findS);

//THE .REDUCE METHOD
console.log("THE .REDUCE METHOD");

//the .reduce method returns a single value after iterating thru the elements of an array, thereby reducing the arrray
const numbers1 = [1, 2, 4, 10];
const summedNUm = numbers1.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(summedNUm);

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log(`The value of the accumulator is ${accumulator}`);
    console.log(`The value of the accumulator is ${currentValue}`);
    return accumulator + currentValue;
    
//to check the value being used as we itterate thru the array
}, 10); 

console.log(newSum);

//ITERATOR DOCUMENTATION
console.log("ITERATOR DOCUMENTATION");

const words1 = ["unique", "uncanny", "pique", "oxymoron", "guise"];
console.log(words1.some(word => word.length < 6));

const interestingWords = words1.filter(longerthan5charac => longerthan5charac.length > 5); console.log(interestingWords);
console.log(interestingWords.every(word => word.length > 5));

const cities1 = ["Orlando", "Dubai", "Edinburgh", "Chennai", "Accra", "Denver", "Eskisehir", "Medellin", "Yokohama"];
const num3 = [1, 50, 75, 200, 350, 525, 1000];

cities1.forEach(city => console.log(`Have you visited ${city}?`));
const longCities = cities1.filter(city => city.length > 7); console.log(longCities);

console.log(num3.reduce((accumulator, currentValue) => accumulator + currentValue));
const smallerNums = num3.map( num => num - 5); console.log(smallerNums);

const lessThan = num3.some(function(num){
    return num < 0;
});
console.log(lessThan);

//INTRODUCTION TO OBJECTS
console.log("INTRODUCTION TO OBJECTS");

/*its time to learn more about the basic structure that permeates nearly every aspect of JavaScript programming: OBJECTS*/
//CREATING OBJECT LITERALS
console.log("CREATING OBJECT LITERALS");

let  = {};//an empty object

let spaceShip1 = {homePlanet: "Earth", "Fuel type": "diesel", "Active Mission": true, numCrew: 5, color: "silver", flightPath: ["Venus", "Mars", "Saturn"]};
let fasterShip = {"Fuel type": "Turbo Fuel", color: "silver",};

//ACCESSING PROPERTIES
console.log("ACCESSING PROPERTIES");
//BRACKET NOTATION, .NOTATION
const crewCount = spaceShip1.numCrew; console.log(crewCount); const planetArray = spaceShip1.flightPath; console.log(planetArray);
const isActive = spaceShip1["Active Mission"]; console.log(isActive);
let propName = "Active Mission"; console.log(spaceShip1[propName]);

//PROPERTY ASSIGNMENT
console.log("PROPERTY ASSIGNMENT");

/*We can either use bracket notation or dot notation and the assignment operator to add new key-value pairs to an object or change
an existing property */

const spaceShip2 = {type: "shuttle"};
//spaceShip2 = {type: "Alien"}; type error: assignment to constant variable
spaceShip2.type = "Alien"; // change the value of the type property
spaceShip2["Speed"] = "Mach 5" // if the key does not exist, it will be created
spaceShip2["Mission"] = "Explore the Universe";
console.log(spaceShip2); 
delete spaceShip2["Mission"]; console.log(spaceShip2);
spaceShip2["color"] = "silver"; console.log(spaceShip2);
spaceShip2["color"] = "glorious gold"; console.log(spaceShip2);
spaceShip2["numEngines"] = 10; console.log(spaceShip2);

//METHODS
console.log("METHODS");

//when the data stored on an object is a function, we call that a Method. A property is what an object has, while a method is what an object does

const alienShip = {
    invade: function () {
        console.log(`Hello! We have come to dominate your planet. Instead of earth, it shall be called New Xaculon.`);
    },
    //with new method syntax ES6
    invade1 () {
    console.log(`We have come to save you from yourselves!`);
    },
    retreat() {console.log(retreatMessage)}, takeOff() {console.log(`Spim.....Borp...Glix.. BlastOff!`)},
};
alienShip.invade(); alienShip.invade1();

let retreatMessage = "We no longer wish to conquer your planet. It is full of Humans, which we do not care for.";
alienShip.retreat(); alienShip.takeOff();

//NESTED OBJECTS
console.log("NESTED OBJECTS");

const spaceShip3 = {
    passengers: [{name: 'Lucycan Ly', age: "42"}, {name: "Sheng Yang", age: 33}, ],
    telescope: {yearBuilt: 2018, model: "91031-XLT", focalLength: 2032, },
    crew: {captain:{name: "Sandra", degree: "Computer Engineering", encourageTeam() {console.log("We got this!");}, "favorite foods": ["cookies", "cakes", "candy", "spinach"]}, },
    engine:{model: "Nimbus2000",},
    nanoElectronics: {computer: {terabytes: 100, monitors: "HD", },"back-up": {battery: "Lithium", terabytes: 50, }}, 
};
console.log(spaceShip3["nanoElectronics"]["computer"]["monitors"], spaceShip3.nanoElectronics["back-up"].battery);
capFav = spaceShip3["crew"]["captain"]["favorite foods"][0];
//spaceShip3["passengers"] = [{name: "LUcycan Ly", age: 42,}]; console.log(spaceShip3.passengers);
//spaceShip3["passengers"] = {name: "YoukaVang Her", age: 24}; 
console.log(spaceShip3["passengers"][0]["name"]); // indexing the passengers array
console.log(spaceShip3["passengers"][1]["name"]);

//PASS BY REERENCE
console.log("PASS BY REFERENCE");

/*Objects are passed by refference. This means when we pass a variable assigned to an object into a function as an argument, the computer interperets
the parameter name as pointing to the space in memory holding that object*/
const spaceShip4 = {homePlanet: "Earth" , color: "silver", }; console.log(spaceShip4);

//TODO:
//FIXME:

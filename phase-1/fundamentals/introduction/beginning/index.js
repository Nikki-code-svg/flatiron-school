/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 12, 2024
Created August 21, 2023

Core Deliverables
1. Learn about variables, types, arrays, conditional statements,
   functions, and scope.
2. Complete the three challanges.

*/

// ~ Variables
// -> constants, variables, logging, annotations
console.log("hi");
// const = variables that will not change value. i.e. not reassigned
const firstName = "Nicole";

// let = a variable that can change value i.e. reassigned

let number = 5;
console.log(number);
number = 6;
console.log(number);

// ~ Types
// -> undefined, null*, boolean, number, string
// Booleans are true or false
const isItRaining = false;


// ~ Objects
// -> definition, bracket/dot notation, stringify
// An object named `dog` with a string property `firstName` and a number property `age`.
//object is a list of one thing
const dog = {
    firstName: "Benji",
    age: 4
};

console.log(dog.firstName);
console.log(dog["firstName"]);

dog.age = 5
console.log(dog.age);

console.log(JSON.stringify(dog));
//json.stringify changes object into string
// you can change a small thing a about an const not the whole thing
// both work to print an object either . or []


// ~ Arrays
// -> definition, access, modification
// array is 
// An array of prices, each a number
const prices = [30, 40, 10, 60];

console.log(price[1]);
prices[2] = 20;
console.log(prices[2]);


// ~ Conditionals
// if, if-else, if-else-if-else, ternary
const isItRaining = false;

// If it's raining, console.log() something about it raining.
if (isItRaining === true) {
     console.log("Hey, bring an umbrella!");
    } else {
// if it's NOT raining, then console.log() something anout sunniness!
    console.log("You won't need an umbrella today.");
}

const age = 21;
// if the user is at least 21, say they're of age..
  if (age >= 21) {
    console.log("You're of age.");
} else if (isItRaining) {
    // if the user is younger than 21 AND it's raining, then log age and raining.
    console.log("Not of age, and it's raining.");
}

// If the user is over 21 and its raining, then log "21R"
//if the user is over 21 and it is not raining, then log "21"
//if the user is less and it is raining, log "YR".
//if the user is less and it is NOT raining, log "Y".

const age = 21;
const isItRaining = true;


if (age >= 21 && isItRaining === true) {
    console.log("21R");

}    if (age >= 21 && isItRaining === false) {
    console.log("21");
  }   if (age <= 21 && isItRaining === true) {
       console.log("YR");
    } if (age <= 21 && isItRaining === false) {
        console.log("Y");
     }

     // or do this

     if (age >= 21 && isItRaining) console.log("21R");
     if (age >= 21 && !isItRaining) console.log("21");
     if (age < 21 && isItRaining) console.log("YR");
     if (age < 21 && !isItRaining) console.log("Y");

     // or do this

     let message ="";
     if (age >= 21) message = "21";
     else  message ="Y";
     if (isItRaining) message += "R";

     console.log(message);

/*    === equals
> greater than
< less than
>= greater than or equal to
<= less than or equal to
&& and
|| or
! not
*/


// ~ Functions
// -> name, parameters, body, return, annotations
// -> methods, forEach, callback functions, anonymous functions

/*
*takes a greeting and recipicent, and return
* @param {string} greeting the greeting to recipient.
*/
// greet "Hello", Sakib ===> "Hello, Sakib!"
// greet "Hi", "Elizbeth" ===> "Hi, Elizbeth"
function greet(greeting, recipient) {
     console.log(greeting);
     console.log(recipient);
}
greet("Hello", "Sakib");
greet("hi", "Elizbeth");

 function greet(greeting, recipient) {
    // string interpolation
    console.log(`${greeting}, ${recipient}!`);
 } 
 // string concatenation
 console.log(greeting + ", "  + recipient + "!");

 // is good for using the value again later on, like math
  return greeting + ", " + recipient + "!"



const words = ["jump", "escalate", "people"];

function printWord(word) {
    console.log(word);
}

// iterate over the array words
// this will print each word or whatever is in the array
words.forEach(printWord);

// place holder vision
words.forEach(() => {});
words.forEach((word) => { console.log(word)});
 
 // ~ Scope
// -> global, local, closures, function hoisting

const a = "A"; //global
function localFunction() {
    const a = "AA";
    console.log(a);
    const b = "B";
    console.log(b);
}
localFunction();
console.log(a);
console.log(b);
// scope where we can name things

// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.
const numbers = [10, 20, 30, 40];
function sum(numbers) {
  let sumNumber = 0;
  numbers.forEach((number) => (sumNumber+=number));
  console.log(sumNumber);
}
sum(numbers);


// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.

const double = numbers  
    let doubleNum = 0;
    numbers.forEach (number, index) => (doubleNum[index] = number*2)
    console.log(numbers);
    
double(numbers);

// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.
const words = ["Happy", "Sleepy", "World"];
function lowercase(words) {
   console.log(words.toLowerCase());
}


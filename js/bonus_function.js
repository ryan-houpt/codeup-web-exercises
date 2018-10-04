// ================ SIMPLE FUNCTION DRILLS
// 1) Make a function called returnTwo() that returns the number 2 when called
// ---Test this function with console.log(returnTwo())
function returnTwo(number) {
    return 2;
}

console.log(returnTwo());


// 2) Make a function called returnName() that returns the string of your name
// ---Test this function with console.log(returnName())

function returnName(name) {
    return "My name is Ryan";
}

console.log(returnName());

// 3) Make a function called addThree() which takes in a number input and returns the number plus 3.
// ---Test this function with console.log(addThree(5))

function addThree(number) {
    return parseFloat(number) + 3;
}

console.log(addThree(5));

// 4) Make a function called sayString() which returns the string input passed in.
// ---Test this function with console.log(sayString())

function sayString(strinput) {
    var strinput = "Hello there!";
    return strinput;
}

console.log(sayString());

// 5) Make a function called sayHowdy() which console.logs the string “Howdy!”
// ---Test this function by directly calling sayHowdy()
// ---Remember this function does not need a defined return value

function sayHowdy() {
    var howdy = console.log("Howdy");
}

sayHowdy();

// ================ CHALLENGE FUNCTION DRILLS
// Write a function called `identity(input)` that takes in an argument called input and returns that input.

function identity(input) {
    return input;
}


// Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that function call.

function getRandomNumber(min, max) {
    var random = Math.floor((Math.random() * 3) + 5);
    return random
}

console.log(getRandomNumber());

// Write a function called `first(input)` that returns the first character in the provided string.

function first(input) {
    return input.substring(0, 1);
}

console.log(first("abc"));

// Write a function called `last(input)` that returns the last character of a string

function last(input) {
    return input.slice(-1);
}

console.log(last("abd"));

// Write a function called `rest(input)` that returns everything but the first character of a string.

function rest(input) {
    return input.slice(1);
}

console.log(rest("dfsad"));

// Write a function called `reverse(input)` that takes a string and returns it reversed.

function reverse(input) {
    // Step 1. Use the split() method to return a new array
    var splitString = input.split("");

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

console.log(reverse("hello"));
// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.

function isNumeric(input) {
    return isNaN(input);
}

console.log(isNumeric("hi"));

// Write a function called `count(input)` that takes in a string and returns the number of characters.

function count(input) {
    return input.length;
}

console.log(count("hi how are you today?"));

// Write a function called `add(a, b)` that returns the sum of a and b

function add(a, b) {
    return a + b;
}

console.log(add(4, 4));
// Write a function called `subtract(a, b)` that return the difference between the two inputs.

function subtract(a, b) {
    return a - b;
}

console.log(subtract(4, 2));
// Write `multiply(a, b)` function that returns the product

function multiply(a, b) {
    return a * b;
}

console.log(multiply(4, 4));

// Write a divide(numerator, denominator) function that returns a divided by b

function divide(numerator, denominator) {
    return numerator / denominator;
}

console.log(divide(4, 2));

// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`

function remainder(number, divisor) {
    return number % divisor;
}

console.log(remainder(4, 3));
// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.

function square(a) {
    return Math.pow(a, 2)
}

console.log(square(4));

// # Super Duper Gold-Star Bonus
// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators

function sumOfSquares(a, b) {
    return add(square(a), square(b));
}

console.log(sumOfSquares(2, 2));
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math
//
//function you want to apply. a and b are the two numbers to run that function on.


function doMath(operator, a, b) {
    return operator(a, b)
}

console.log(doMath(subtract, 5, 2));
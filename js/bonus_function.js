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



//
// Make a function named isOdd(number)

function isOdd(number) {
    if (number % 2 === 0)
        return true;
    else
        return false;
}

console.log(isOdd(5));

// Make a function named isEven(number)

function isEven(number) {
    if (number % 2 !== 0)
        return true;
    else
        return false;
}

console.log(isEven(5));

// Make a function named identity(input) that returns the input exactly as provided

function identity(input) {
    return input;
}

console.log(identity(5));

// Make a function named isFive(input)

function isFive(input){
    if (input === 5)
        return true;
    else
        return false;
}

console.log(isFive(4));

// Make a function named addFive(input) that adds five to some input.

function addFive(input){
    return (parseFloat(input) + 5);
}

console.log(addFive(5));

// Make a function named isMultipleOfFive(input)

function isMultipleOfFive(input){
    if (input % 5 === 0)
        return true;
    else
        return false
}

console.log(isMultipleOfFive(13));

// Make a function named isThree(input)

function isThree(input){
    if (input === 3)
        return true;
    else
        return false;
}

console.log(isThree(3));

// Make a function named isMultipleOfThree(input)

function isMultipleOfThree(input){
    if (input % 3 === 0)
        return true;
    else
        return false
}

console.log(isMultipleOfThree(6));

// Make a function named isMultipleOfThreeAndFive(input)

function isMultipleOfThreeAndFive (input){
    if (input % 3 === 0 && input % 5 === 0)
        return true;
    else
        return false;
}

console.log(isMultipleOfThreeAndFive(10));

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n

function isMultipleOf(target, n){
    if (target % n === 0)
        return true;
    else
        return false;
}

console.log(isMultipleOf(10, 3));

// Make a function named isTrue(boolean)

function isTrue(boolean){
    if (boolean === true)
        return true;
    else
        return false;
}

console.log(isTrue(false));

// Make a function named isFalse(boolean)

function isFalse(boolean){
    if (boolean === false)
        return true;
    else
        return false;
}

console.log(isFalse(false));
// Make a function named isTruthy(input), remember that values other than true will behave like true

function isTruthy(input){
    if (input !== false)
        return true;
    else
        return false;
}

console.log(isTruthy(1));

// Make a function named isFalsy(input), remember that values other than false behave like false

function isFalsy(input){
    if (input === false)
        return true;
    else
        return false;
}

console.log(isFalsy(!true));

// Make a function named isVowel(letter)

function isVowel(letter){
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u")
        return true;
    else
        return false;
}

console.log(isVowel("b"));

// Make a function named isConsonant(letter)

function isConsonant(letter){
    if (letter !== "a" && letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u")
        return true;
    else
        return false;
}

console.log(isConsonant("b"));

// Make a function named isCapital(letter)

function isCapital(letter){
    if (letter === letter.toUpperCase() && letter !== letter.toLowerCase())
        return true;
    else
        return false;
}

console.log(isCapital("b"));

// Make a function named isLowerCase(letter)

function isLowerCase(letter){
    if (letter !== letter.toUpperCase() && letter === letter.toLowerCase())
        return true;
    else
        return false;
}

console.log(isLowerCase("B"));

// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter

function hasLowerCase(words){
    if (words !== words.toUpperCase() && words === words.toLowerCase())
        return true;
    else
        return false;
}

console.log(hasLowerCase("agfgdd"));

// Make a function named isSpace(letter) that returns if a character is a space character

function isSpace(letter){
    if (letter === " ")
        return true;
    else
        return false;
}

console.log(isSpace("fg"));

// Make a function named isZero(number)

function isZero(number){
    if (number === 0)
        return true;
    else
        return false;
}

console.log(isZero(3));

// Make a function named notZero(input) that returns true if the input is not zero

function notZero(input){
    if (input !== 0)
        return true;
    else
        return false;
}

console.log(notZero(5));

// Write a function named lowerCase(string)

function lowerCase(words){
    return words.toLowerCase()
}

console.log(lowerCase("GDFGDSFG"));

// Write a function named double(n) that returns a number times two

function double(n){
    return (parseFloat(n) * 2)
}

console.log(double(4));

// Write a function named triple(n) that returns a number times 3

function triple(n){
    return (parseFloat(n) * 3)
}

console.log(triple(4));

// Write a function named quadruple(n) that returns a number times 4

function quadruple(n){
    return (parseFloat(n) * 4);
}

console.log(quadruple(4));

// Write a function named half(n) that returns 1/2 of the provided input

function half(n){
    return (parseFloat(n) / 2);
}

console.log(half(4));

// Write a function named cube(n) that returns n * n * n

function cube(n){
    return (n * n * n)
}

console.log(cube(2));

// Write a function named squareRoot(n) that returns the square root of the input

function squareRoot(n){
    return (Math.sqrt(n))
}

console.log(squareRoot(4));

// Write a function named cubeRoot(n) that returns the cube root of the input

function cubeRoot(n){
    return (Math.cbrt(n));
}

console.log(cubeRoot(10));

// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative,
// and false for all else.

function invertSign(number){
    if (number < 0)
        return (Math.abs(number));
    else
        return (-Math.abs(number));
}

console.log(invertSign((-4)));
// Write a function named degreesToRadians(number)

function degreesToRadians(number){
    var pi = Math.PI;
    return number * (pi / 180);
}

console.log(degreesToRadians(100))

// Write a function named radiansToDegrees(number)

function radiansToDegrees(number){
    var pi = Math.PI;
    return number * (180 / pi);
}

console.log(radiansToDegrees(1.23));

// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.

function isBlank(input){
    if (input === " ")
        return true;
    else
        return false;
}

console.log(isBlank(" "));

// Make a function named trim(string) that removes empty spaces before and after the input.

function trim(words){
    return words.trim();

}

console.log(trim("    kjlfdglkdfkjg    "));

// Make a function named areEqual(input1, input2) that returns if both inputs have the same value

function areEqual(input1, input2){
    if (input1 == input2)
        return true;
    else
        return false;
}

console.log(areEqual(1, false));

// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.

function areIdentical(input1, input2){
    if (input1 === input2)
        return true;
    else
        return false;
}

console.log(areIdentical(4, 4));

// Make a function named not(input) returns the input with a flipped boolean

function not(input){
    if (input == false)
        return true;
    else
        return false;
}

console.log(not(1));
// Make a function named notNot(input) that the negation of the negation of the input.

function notNot(input){
    return !!input
}

console.log(notNot(true));

// Make a function named and(predicate1, predicate2) that returns the logical operation of AND

function and(predicate1, predicate2) {
    if (predicate1 && predicate2)
        return true;
    else
        return false;
}

console.log(and(1, 1));
// Make a function named or(predicate1, predicate2) that returns the logical operation of OR

function or(predicate1, predicate2){
    if (predicate1 || predicate2)
        return true;
    else
        return false;
}

console.log(or(0, false));

// Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have.
// Generate a random number between 1 up to and including the number of sides.

function rollDice(sides){
    return Math.floor(Math.random() * Math.floor(sides));
}

console.log(rollDice(6));


//
// ================================= EVEN MORE FUNCTION BONUSES
// 1) Create a function that will return how many whitespace characters are at the beginning and end of a string.

function whiteSpaceCounter(words){
    return words.split(" ").length-1
}

console.log(whiteSpaceCounter("   fdfd   "));

// 2) Create a function that takes in two string inputs. If the second string input is present in the first, return the first input
// string with the second input string removed from it.
//
// If the second string input is present multiple times in the first, the second
// string will only be removed where it first occurs in the first string.
//
// If the second string input is not present in the first,
// return the first string as entered in the function.

function twoWord(word1, word2) {
    if (word1.search(word2)) {
        return word1.replace(word2, "");
    } else
        return word1;
}

console.log(twoWord("worldisbob", "bob"));
// 3) Create a function that takes in a string and returns true if the last letter is an "a" (otherwise, return false).

function detectLastLetter(input){
    if (input.indexOf("a") >= 0)
        return true;
    else
        return false;
}
console.log(detectLastLetter("dfkjgfdg"));

// 4) EXTRA CHALLENGE: create a function that will return how many whitespace characters are at the beginning of a string
// (hint: use regex).

function countWhiteSpaces (input) {
    var counter = /^\s*/;
    var whiteSpaces = input.match(counter)[0].length;

    return whiteSpaces;
}

console.log(countWhiteSpaces("    hi, I have so many white spaces."));

// 5) Create a function returnTrueMessage() that returns the string "Hey, it's true!"
// Create a function returnFalseMessage() that returns the string "Hey, it's false!"
// Create a function returnMessage() that takes in a function and returns the call to the function
// Experiement passing in different functions.

function returnTrueMessage(input) {
    return "Hey, it's true!"
}

function returnFalseMessage(input) {
    return "Hey, it's false!"
}

function number1(input) {
    if (input === 1)
        return true;
    else
        return false;
}

function returnMessage(input) {
    if (input === true)
        return "Hey, it's true!";
    else
        return "Hey, it's false!";
}

console.log(returnMessage(number1(1)));
// 6) Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if
// they are an admin. The function will return true if the username is not the same as the password and the user is at least 18 years old.
// If the user is an admin, they do not have to be a certain age but the password must still not match the username.

function willLoginUser(username, password, age, admin){
    if (username !== password && age >= 18)
        return true;
    if (admin === true && username !== password)
        return true;
    else
        return false;
}

console.log(willLoginUser("bob", "bob", 18, false));

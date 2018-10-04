// "use strict";
//
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * if what the user enters is not a number, use an alert to tell them that, and
//  * do *not* display any of the above information.
//  *
//  * Can you refactor your code to use functions?
//  */
//
// var userColor = prompt("Quick! Pick a color");
//
// var userChoice = confirm("Would you like to enter a number?");
// console.log(userChoice);
//
// if (userChoice === false) {
//     alert("aww sorry you don't want to play")
// } else {
//     var userNumber = prompt("Great! What number do you pick?")
//     var evenOrOdd = parseFloat(userNumber) % 2;
//     var plusOneHundred = parseFloat(userNumber) + 100;
//
//     if (isNaN(userNumber) === true) {
//         alert("Please enter a number")
//     } else {
//         if (evenOrOdd === 0) {
//             alert("Your number is even")
//         } else {
//             alert("Your number is odd")
//         }
//         alert("Your number plus 100 is " + plusOneHundred);
//
//         if (parseFloat(userNumber) < 0) {
//             alert("Your number is Negative")
//         }
//         else {
//             alert("Your number is positive")
//         }
//     }
// }
//
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message that related to that
//  * color. Only worry about the colors defined above, if the color passed is not
//  * one of the ones defined above, return a message that says so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
//
// function analyzeColor(colorInput) {
//     if (colorInput === "blue") {
//         alert("Blue is the color of the sky");
//     } else if (colorInput === "red") {
//         alert("Red is the color of one of my cups");
//     } else if (colorInput === "orange") {
//         alert("Orange is the color of a fruit");
//     } else if (colorInput === "yellow") {
//         alert("Yellow is the color of a banana");
//     } else if (colorInput === "green") {
//         alert("Green is the color of grass");
//     } else if (colorInput === "indigo") {
//         alert("Indigo is a color");
//     } else if (colorInput === "violet") {
//         alert("Violet is a color too");
//     } else {
//         alert("I don't think thats a color...")
//     }
// }
//
//
// analyzeColor("red");
//
//
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color everytime the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your function and console.log the results.
//  * You should see a different message everytime you refresh the page
//  */
//
// analyzeColor(randomColor);
//
//
// /**
//  * TODO:
//  * Refactor your above function to use a switch-case statement
//  */
//
// function analyzeColorSwitch(colorInput) {
//     switch (colorInput) {
//         case "blue":
//             alert("Blue is the color of the sky");
//             break;
//         case "red":
//             alert("Red is the color of one of my cups");
//             break;
//         case "orange":
//             alert("Orange is the color of a fruit");
//             break;
//         case "yellow":
//             alert("Yellow is the color of a banana");
//             break;
//         case "green":
//             alert("Green is the color of grass");
//             break;
//         case "indigo":
//             alert("Indigo is a color");
//             break;
//         case "violet":
//             alert("Violet is a color too");
//             break;
//         default:
//             alert("I don't think thats a color...")
//     }
// }
//
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
//
//
// analyzeColorSwitch(userColor);
//
//
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Suppose there's a promotion in Walmart, each customer is given a randomly
//  * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
//  * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
//  * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
//  * all for free!.
//  *
//  * Write a function named `calculateTotal` that accepts a lucky number and total
//  * amount, and returns the discounted price.
//  *
//  * Example:
//  * calculateTotal(0, 100) // returns 100
//  * calculateTotal(4, 100) // returns 50
//  * calculateTotal(5, 100) // returns 0
//  *
//  * Test your function by passing it various values and checking for the expected
//  * return value.
//  */

function calculateTool(luckyNumber, totalPrice) {

    if (luckyNumber === 1) {
      var luckyNumberPercentage = .10
    } else if (luckyNumber === 2) {
        luckyNumberPercentage = .25
    } else if (luckyNumber === 3) {
        luckyNumberPercentage = .35
    } else if (luckyNumber === 4) {
        luckyNumberPercentage = .5
    } else if (luckyNumber === 5) {
        luckyNumberPercentage = 1
    } else if (luckyNumber === 0) {
        luckyNumberPercentage = 0
    }

    var finalPrice = totalPrice - (totalPrice * luckyNumberPercentage);

    return alert("Your final price is $" + finalPrice.toFixed(2))
}

calculateTool(2, 100);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

    var luckyNumberRandom = Math.floor(Math.random() * 6);

    var userBill = prompt("What was your total bill?");

    if (isNaN(userBill) === true) {
        alert("Hmm... I don't think that was the total of your bill....");
    }
    else {
        alert("Congratulations your lucky number is " + luckyNumberRandom);
        calculateTool(luckyNumberRandom, userBill);
    }


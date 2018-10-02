/*
// problem 1

var inputString = prompt("What is the input string?");

if (inputString === "") {
    // user pressed OK, but the input field was empty
    alert("Please insert something")
} else if (inputString) {
    // user typed something and hit OK
    alert(inputString + " has " + inputString.length + " characters")
}


// problem 2

alert("Time for a Mad Lib!");

var noun = prompt("Please enter a noun");
var verb = prompt("Please enter a verb");
var adverb = prompt("Please enter a adverb");
var adjective = prompt("Please enter a adjective");

alert("Do you " + verb + " your " + adjective + " " + noun + " " + adverb + "? Thats hilarious!");

// 3. Simple math
//   Example Output
//       What is the first number? 10
//       What is the second number? 5
//       10 + 5 = 15
//       10 - 5 = 5
//       10 * 5 = 50
//       10 / 5 = 2
//   Constraints
//   • Values coming from users will be strings. Ensure that you convert these values to numbers before doing the math.
//   • Keeptheinputsandoutputsseparatefromthenumerical conversions and other processing.
//   • Generate a single output statement with line breaks in the appropriate spots.


var firstNumber = parseFloat(prompt("What is the first number?"));
var secondNumber = parseFloat(prompt("What is the second number?"));
var numberAdded = (firstNumber + secondNumber);
var numberSubtracted = (firstNumber - secondNumber);
var numberMultiplied = (firstNumber * secondNumber);
var numberDivided = (firstNumber / secondNumber);

alert(firstNumber + " + " + secondNumber + " = " + numberAdded +  "\n" +
      firstNumber + " - " + secondNumber + " = " + numberSubtracted + "\n" +
      firstNumber + " * " + secondNumber + " = " + numberMultiplied + "\n" +
      firstNumber + " / " + secondNumber + " = " + numberDivided);

// 4. Area of a rectangular room
//   When working in a global environment, you’ll have to present information in both metric and Imperial units. And you’ll need to know when to do the conversion to ensure the most accurate results.
//   Create a program that calculates the area of a room. Prompt the user for the length and width of the room in feet. Then display the area in both square feet and square meters.
//   Example Output
//       What is the length of the room in feet? 15
//       What is the width of the room in feet? 20
//       You entered dimensions of 15 feet by 20 feet.
//       The area is
//       300 square feet
//       27.871 square meters
// The formula for this conversion is
// m^2 = f^2 × 0.09290304
// Constraints
// • Keep the calculations separate from the output. • Use a constant to hold the conversion factor.





var length = parseFloat(prompt("Please enter length of the room"));
var width = parseFloat(prompt("Please enter width of the room"));

var feet = (length * width);
const meters = (feet)*0.09290394;

alert("You entered the dimensions of " + length + " feet by " + width + " feet." + "\n" +
       "The area is" + "\n" + feet + " Square Feet" + "\n" + meters.toFixed(5) + " Square Meters");


// 5. Pizza Party
// Division isn’t always exact, and sometimes you’ll write programs that will need to deal with the leftovers as a whole number instead of a decimal.
// Write a program to evenly divide pizzas. Prompt for the number of people, the number of pizzas, and the number of slices per pizza. Ensure that the number of pieces comes out even. Display the number of pieces of pizza each person should get. If there are leftovers, show the number of leftover pieces.
// Example Output
//        How many people? 8
//        How many pizzas do you have? 2
//        8 people with 2 pizzas
//        Each person gets 2 pieces of pizza.
//        There are 0 leftover pieces.


var numberOfPeople = parseFloat(prompt("How many people?"));
var numberOfPizzas = parseFloat(prompt("How many Pizzas?"));
var slicesPerPizza = (8)
var slicesPerPerson = ((numberOfPizzas * slicesPerPizza) / numberOfPeople);
var leftoverPizzaSlices = ((numberOfPizzas * slicesPerPizza) % numberOfPeople);

alert(numberOfPeople + " people with " + numberOfPizzas + " pizzas");
alert("Each person gets " + slicesPerPerson.toFixed(0) + " pieces of pizza" + "\n" + "There are " + leftoverPizzaSlices + " leftover pieces");



//6. Paint Calculator
// Sometimes you have to round up to the next number rather
// than follow standard rounding rules.
// Calculate gallons of paint needed to paint the ceiling of a room. Prompt for the length and width, and
assume one gallon covers 350 square feet. Display the number of gallons needed to paint the ceiling as a whole number.
// Example Output
//        You will need to purchase 2 gallons of
//        paint to cover 360 square feet.
// Remember, you can’t buy a partial gallon of paint. You must round up to the next whole gallon.
// Constraints
// • Use a constant to hold the conversion rate.
// • Ensure that you round up to the next whole number.


var lengthOfRoom = parseFloat(prompt("What is the length of the room?"));
var widthOfRoom = parseFloat(prompt("What is the width of the room?"));
const sizeOfRoom = parseFloat(lengthOfRoom * widthOfRoom)
var oneGallon = (350);
var gallonsNeeded =  (sizeOfRoom / oneGallon);
var roundedGallonsOfPaint = Math.ceil(gallonsNeeded)

alert("You will need to purchase " + roundedGallonsOfPaint + " gallons of " + "\n" + "paint to cover " + sizeOfRoom + " square feet.")


// 7. Currency conversion
// At some point, you might have to deal with currency exchange rates, and you’ll need to ensure your calculations are
// as precise as possible.
// Write a program that converts currency. Specifically, convert euros to U.S. dollars. Prompt for the amount of money in euros you have,
// and prompt for the current exchange rate of the euro.
//Print out the new amount in U.S. dollars. The formula for currency conversion is


*/

var euros = parseFloat(prompt("How many Euros do you currently have?"));
var usDollars = (euros * .87);

alert("The current exchange rate for Euros is .87" + "\n" + "You currently have " + usDollars + " USD");

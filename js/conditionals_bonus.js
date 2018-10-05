// // ================================= CONDITIONALS BONUSES
// // __
// // Write a function makeJustinMessage() that returns the string "It's Justin!" if the input to the function is the string
// // "justin" and "It's not Justin" otherwise.
// //     If the input contains white space or numbers, return the string "INVALID INPUT".
//
// function makeJustinMessage(input) {
//     if (input === "justin")
//         return "It's Justin!";
//     if (input === " " || isNaN(input) === false)
//         return "INVALID INPUT";
//     else
//         return "It's not Justin";
// }
//
// console.log(makeJustinMessage(""));
//
// //     __
// // Write a function that returns a string describing the action to be taken for a given street light color input.
// // For example, if the function input is the string "red", a message like "STOP!" could be returned from the function.
// // Input should not be case sensitive.
//
// function streetLightColor(input) {
//     switch(input) {
//         case "red":
//             alert("STOP!");
//             break;
//         case "yellow":
//             alert("Go Slow!");
//             break;
//         case "green":
//             alert("GO GO GO!");
//             break;
//     }
// }
//
// console.log(streetLightColor("red"));
// //     __
// // Create a function that simply returns an input as an output. If no input is passed to the function when it is called,
// // return the string "no input provided."
//
// function returner(input){
//     if (input === "")
//         return "no input provided";
//     else
//         return input;
// }
//
// console.log(returner());
//
//
// // __
// // Create a function that returns a unique message string for a given digit input.
// // If the input is not a single digit, return the string "too many digits". If the input is not a number, return "invalid input".
// // String digits like "1" or "9" are valid inputs.
//
// function numberReturn(input) {
//     if (input > 9)
//         return "too many digits.";
//     if (isNaN(input) === true)
//         return "invalid input";
//     else switch (input) {
//         case 1:
//             alert("its 1");
//             break;
//         case 2:
//             alert("its 2");
//             break;
//         case 3:
//             alert("its 3");
//             break;
//         case 4:
//             alert("its 4");
//             break;
//         case 5:
//             alert("its 5");
//             break;
//         case 6:
//             alert("its 6");
//             break;
//         case 7:
//             alert("its 7");
//             break;
//         case 8:
//             alert("its 8");
//             break;
//         case 9:
//             alert("its 9");
//             break;
//     }
// }
//
// console.log(numberReturn("hello"));
// //     __
// // Create a function that prompts a user for their favorite day of the week and alerts a unique message based on the day.
// //     Catch any invalid inputs (not indicating a day of the week).
// // For each day, allow the user to enter the abbreviated day (e.g. 'Monday', 'monday', 'Mon', or 'mon')
//
// function favoriteDay(day) {
//     day = prompt("What is your favorite day?");
//     var favDayLowerCase = day.toLowerCase();
//     if (favDayLowerCase === "monday" || favDayLowerCase === "mon")
//         return alert("it is monday");
//     if (favDayLowerCase === "tuesday" || favDayLowerCase === "tues")
//         return alert("it is tuesday");
//     if (favDayLowerCase === "wednesday" || favDayLowerCase === "wed")
//         return alert("it is wednesday");
//     if (favDayLowerCase === "thursday" || favDayLowerCase === "thurs")
//         return alert("it is thursday");
//     if (favDayLowerCase === "friday" || favDayLowerCase === "fri")
//         return alert("it is friday");
//     if (favDayLowerCase === "saturday" || favDayLowerCase === "sat")
//         return alert("it is saturday");
//     if (favDayLowerCase === "sunday" || favDayLowerCase === "sun")
//         return alert("it is sunday");
// }
//
// favoriteDay();
//
// // __
// // Create a function that prompts the user for an input and then alerts if the input is a number or not a number.
// // - use an if/else
// //     - refactor to use a ternary operator
//
// function notANumber(input){
//     if (isNaN(input) === true)
//         return alert("that is not a number!");
//     else
//         return alert("that is a number!");
// }
//
// console.log(notANumber(4));
//
// // __
// // Create a function that prompts a user for a season (Spring, Summer, Fall (or Autumn), Winter).
// // The function then alerts the months available in that season and then asks the user to pick a given month.
// // After selecting the month, alert a unique message for the month.
// // - account for any invalid user input
// // - case of input should not matter
// // - accept both abbreviations and full names of the months
//
// function seasons(seasonchoice) {
//     seasonchoice = prompt("pick your favorite season");
//     var seasonLower = seasonchoice.toLowerCase();
//
//     if (seasonLower === "spring") {
//         var month = prompt("Choose a month; March, April, May");
//         switch (month.toLowerCase()) {
//             case "march":
//                 alert("march is a cool month");
//                 break;
//             case "april":
//                 alert("april is a cool month");
//                 break;
//             case "may":
//                 alert("may is a cool month");
//                 break;
//         }
//     }
//     if (seasonLower === "summer") {
//         var month = prompt("Choose a month; June, July, August");
//         switch (month.toLowerCase()) {
//             case "june":
//                 alert("june is a cool month");
//                 break;
//             case "july":
//                 alert("july is a cool month");
//                 break;
//             case "august":
//                 alert("august is a cool month");
//                 break;
//         }
//     }
//     if (seasonLower === "fall") {
//         var month = prompt("Choose a month; september, october, november");
//         switch (month.toLowerCase()) {
//             case "september":
//                 alert("september is a cool month");
//                 break;
//             case "october":
//                 alert("october is a cool month");
//                 break;
//             case "november":
//                 alert("november is a cool month");
//                 break;
//         }
//     }
//     if (seasonLower === "winter") {
//         var monthwinter = prompt("Choose a month; december, january, february");
//         switch (monthwinter.toLowerCase()) {
//             case "december":
//                 alert("december is a cool month");
//                 break;
//             case "january":
//                 alert("january is a cool month");
//                 break;
//             case "february":
//                 alert("february is a cool month");
//                 break;
//         }
//     }
// }
//
// seasons();

// __
// GOLD STAR BONUS
// Create a distance-unit-conversion application.
//     Prompt the user for unit of measurement.
//     Prompt the user for a value.
//     Prompt the user for a second unit of measurement to convert to.
//     Possibly define multiple functions to convert: inchesToFeet, feetToMiles, milesToLightYears
// then the opposite versions: lightYearsToMiles, milesToFeet, feetToInches
// Use these conversion functions to make the correct unit conversion
// Potentially, you will need a large switch case to account for the possible unit conversions,
//     i.e. what conversion functions will need to be called in and in what order.



function distanceUnitConverstion(firstUnitOfMeasure, measurement, secondUnitOfMeasure) {

    var firstUnitOfMeasure = prompt("Please pick a first unit of measure; inches, feet, miles, light years");
    var measurement = prompt("What is the unit you are looking to convert?");
    var secondUnitOfMeasure = prompt("What is the unit you want to convert too? inches, feet, miles, light years");

    if (firstUnitOfMeasure === "inches") {
        switch (secondUnitOfMeasure) {
            case "inches":
                alert(measurement + " inches");
                break;
            case "feet":
                alert((measurement / 12) + " feet");
                break;
            case "miles":
                alert(((measurement / 12) / 5280) + " miles");
                break;
            case "light years":
                alert((((measurement / 12) / 5280) / 5.879e+12) + " light years")
                break;
        }
    }
    if (firstUnitOfMeasure === "feet") {
        switch (secondUnitOfMeasure) {
            case "inches":
                alert((measurement * 12) + " inches");
                break;
            case "feet":
                alert(measurement + " feet");
                break;
            case "miles":
                alert((measurement / 5280) + " miles");
                break;
            case "light years":
                alert(((measurement / 5280) / 5.879e+12) + " light years");
                break;
        }
    }
    if (firstUnitOfMeasure === "miles") {
        switch (secondUnitOfMeasure) {
            case "inches":
                alert(((measurement * 5280) * 12) + " inches");
                break;
            case "feet":
                alert((measurement * 5280) + " feet");
                break;
            case "miles":
                alert(measurement + " miles");
                break;
            case "light years":
                alert((measurement / 5.879e+12) + " light years");
                break;
        }
    }
    if (firstUnitOfMeasure === "light years") {
        switch (secondUnitOfMeasure) {
            case "inches":
                alert((((measurement * 5.879e+12) * 5280) * 12) + " inches");
                break;
            case "feet":
                alert(((measurement * 5.879e+12) * 5280) + " feet");
                break;
            case "miles":
                alert((measurement * 5.879e+12) + " miles");
                break;
            case "light years":
                alert(measurement + " light years");
                break;
        }
    }
}

distanceUnitConverstion();
    // DOUBLE GOLD STAR BONUS
    // Allow unit conversion to metric system units




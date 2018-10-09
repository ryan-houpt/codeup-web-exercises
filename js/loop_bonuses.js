// ================================= LOOPS BONUSES
// BONUSES 1:
// Write a function to toggle all characters in a string: in a given string, toggle all characters to their opposite case.
// Special characters will not change.
//     Example input: "aBc12#"
// Example output: "AbC12#"

// function toggleString (input) {
//     var input2 = "";
//
//     for (i = 0; i < input.length; i++) {
//         if (input.charAt(i) === input.charAt(i).toLowerCase()) {
//             input2 += input.charAt(i).toUpperCase();
//         } else if (input.charAt(i) === input.charAt(i).toUpperCase()) {
//             input2 += input.charAt(i).toLowerCase();
//         } else {
//             input2 += input.charAt(i)
//         }
//     }
//     console.log(input2)
// }
//
//
// console.log(toggleString("HeLlo"));



// BONUS 2:
// Write a function that takes a given string appended with a number at the end. The program will check the length of the string
// to verify the string is equal to the number appended. If the number appended equals the string length, output "Yes".
// if the number appended does not equal the string length, output "No".
//     Example Input: "geek5"
// Example Output: "Yes"
// Example Input: "codingchallenge25"
// Example Output: "No"





//
// Loop Bonuses
//
// 1. Write a function named countVowels that takes in any string and returns the number of vowels in the string. (ignore "y")
//
// countVowels("Codeup") should return 3
// countVowels("banana") should return 3
// countVowels("Hi Everybody!") should return 4





//
// 2.  Write a function named count9 that takes in any string or number and returns the number of times that the numeral 9
// or the character "9" shows up

function count9 (input) {

}



//
// 3. Write the loop and code necessary to sum all integers between 1 to 100, including 100.
//
//
// function sumOdds (n) {
//     let sum = 0;
//
//     for (let i = 1; i <= n; i++) {
//         sum += i
//     }
//
//     return sum
// }
//
// console.log(sumOdds(100));






// 4. Write a loop that plays "99 bottles of beer" song. It should say bottle instead of bottles when there's only one,
// and the song is over when there are 0 bottles.


// for (i = 99; i >= 1; i--) {
//     if (i > 1) {
//         console.log(i + " bottles of beer on the wall. " + i + " bottles of beer! Take one down, pass it around... " + (i - 1) +
//             " bottles of beer on the wall.")
//     } else if (i === 2) {
//         console.log(i + " bottles of beer on the wall. " + i + " bottles of beer! Take one down, pass it around... " + (i - 1) +
//             " bottle of beer on the wall.");
//     } else {
//         console.log(i + " bottle of beer on the wall. " + i + " bottle of beer! Take one down, pass it around... well damn... were out of beer")
//     }
// }

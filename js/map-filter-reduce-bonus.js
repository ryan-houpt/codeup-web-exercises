// // ======= BONUS 1 Problems
// const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
// const customers = [
//     {
//         name: "Fred",
//         age: 58,
//         occupation: "Police Officer",
//         noOfPurchases: 4
//     },
//     {
//         name: "Samantha",
//         age: 54,
//         occupation: "Teacher",
//         noOfPurchases: 18
//     },
//     {
//         name: "Charles",
//         age: 38,
//         occupation: "Librarian",
//         noOfPurchases: 9
//     }
// ];
// // // *** hints for these problems and additional bonuses are below
// // // PROBLEM 1 - create an array of the first letters of each fruit
//
// const fruitLetter = fruits.map((fruit) => fruit[0]);
//
// console.log(fruitLetter);
//
// // // PROBLEM 2 - create array of user objects based on the customers array
// // // of objects (each user object should just have name and age properties)
//
// const nameAndAge = customers.map(({name, age}) => {
//     return {
//         name,
//         age
//     }
// });
//
// console.log(nameAndAge);
//
// // // PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// // // containing the same properties as the objects on the customers objects
//
//
// let customerFilter = customers.filter((customer) => customer.occupation === "Teacher" || customer.occupation === "Police Officer");
//
// console.log(customerFilter);
//
//
// // // PROBLEM 4 - determine the average age of customers
//
// let ages = customers.map((customer) => customer.age);
//
// let sum = ages.reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue
// }, 0);
//
// let averageAge = sum / 3;
//
// console.log(averageAge);


//
// ======= BONUS 2 Problems
// Given the following array...
const names = ["John", "Max", "Ronald"];


// complete the bonuses below...
// - Create an array where all names are given a last name of Smith.

let lastNames = names.map((name) => name + " Smith");

console.log(lastNames);

// - Create an array where each word is in all caps

let capitalized = names.map((name) => name.toUpperCase());

console.log(capitalized);

// - Create an array where all names have more than 3 letters

let moreThanThreeLetters = names.filter((name) => name.length > 3);

console.log(moreThanThreeLetters);

// - Create an array of names with only the last two letters of each name

let lastTwoLetters = names.map((name) => name.substring(name.length -2));

console.log(lastTwoLetters);

// - Create a total count of all letters

let getLength = names.map((name) => name.length);

let totalCount = getLength.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
}, 0);

console.log(totalCount);

// - Create a string of all letters in alphabetical order

let join = names.join('');
let array = join.split('');
let sort = array.sort();
let inOrder = sort.join('');

console.log(inOrder);

// - Create an array of word objects with properties of wordLength, firstLetter, lastLetter

let wordObjects = names.map((name) => {
    return {
        wordLength: name.length,
        firstLetter: name[0],
        lastLetter: name[name.length - 1]
    }
});

console.log(wordObjects);

// - Create a string of all vowels in the entire array of names

let vowels = array.filter((letter) => letter === 'a' || letter === "i" || letter === 'o' || letter === 'e' || letter === 'u';

console.log(vowels);
// - Create a single object with properties



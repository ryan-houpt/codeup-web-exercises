(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var people = ["Ryan", "Jeremy", "Paul", "Tom"];


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

console.log(people.length);



    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */


console.log(people[0]);
console.log(people[1]);
console.log(people[2]);
console.log(people[3]);


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

for (var i = 0; i < people.length; i++) {
    console.log("the person at index " + i + " is " + people[i]);
}



    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    people.forEach(function(element) {
        console.log(element)
    });


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

function firstItem (people) {
        console.log(people[0]);
}

function secondItem (people) {
    console.log(people[1]);
}

function lastItem (people) {
    var lastItem = people.length - 1;
    console.log(people[lastItem]);
}

firstItem(people);

secondItem(people);

lastItem(people);
})();


// ================================= ARRAY BONUSES
// 1. Create a function that returns a random day of the week

var randomDay = Math.ceil(Math.random() * 6);
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log(days[randomDay]);


// 2. Create a function that takes a single letter and returns what number the letter is in the alphabet. Ignore case.
// someFunction("a") // returns 1
// someFunction("z") // returns 26

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function alphabet (input) {
        return (letters.indexOf(input) + 1);
}

console.log(alphabet("a"));

// 3. Create a function that returns the longest string in a given array of string elements

var array = ['first item', 'second item is longer than the third one',
    'third longish item', 'but this one is most definetly the longest because I said so, so there it is'];

var length = 0;
var longest;

for(var i=0; i < array.length; i++){
    if(array[i].length > length){
        var length = array[i].length;
        longest = array[i];
    }
}

console.log(longest);

// 4. Create a function that takes in two arrays of number inputs. If all numbers added together in the first array is equal to
// all the number inputs added in the second array, return true, otherwise, false. Only add together numeric elements but either array
// may contain non-numeric elements.
//     var arr1 = ['bob', 1, true, 1, 2];
// var arr2 = [2, null, undefined, 0, 2, "apple"]
// exampleFunction(arr1, arr2) // returns true


var array1 = [1, 2, 3, 8, 10].reduce((a, b) => a + b, 0);
var array2 = [1, 2, 3, 8, 10].reduce((a, b) => a + b, 0);

function compareArrays(array1, array2) {
     if (array1 === array2) {
         return true;
     }  else
         return false;
}

console.log(compareArrays(array1, array2));



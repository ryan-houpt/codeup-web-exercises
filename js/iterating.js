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

    people.forEach(function(element, index, array) {
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
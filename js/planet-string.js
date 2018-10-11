(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */


    planetsArray = planetsString.split("|");

    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var stringBR = planetsArray.join("<br>");

    console.log(stringBR);


    var array1 = [1, 2, 3,];
    var array2 = [,4, 5, 6];


    function addTwoArrays (array1, array2) {
        var array1split = array1.join(",");
        var array2split = array2.join(",");
        var arrayjoin = array1split + array2split;
        var arrayjoinarray = arrayjoin.split(",");
        return arrayjoinarray;
    }

    console.log(addTwoArrays(array1, array2));

    var randomQuote = Math.ceil(Math.random() * 6);
    var quote = ["“Dont cry because its over, smile because it happened.“ ― Dr. Seuss",
        "“Be yourself; everyone else is already taken.” ― Oscar Wilde",
        "“So many books, so little time.” ― Frank Zappa",
        "“You only live once, but if you do it right, once is enough.” ― Mae West",
        "“Be the change that you wish to see in the world.” ― Mahatma Gandhi",
        "“In three words I can sum up everything I've learned about life: it goes on.” ― Robert Frost",
        "“If you tell the truth, you don't have to remember anything.” ― Mark Twain"];

    console.log(quote[randomQuote]);


    // function getNFibonacci(n) {
    //     var fibonacciSequenceStart = [1, 1, 2];
    //
    //
    //     do {
    //         var fibonacciSequenceFirstNumber = fibonacciSequenceStart.pop().length - 1;
    //         var fibonacciSequenceSecondNumber = fibonacciSequenceStart.pop.length -2;
    //         var fibonacciSequenceNewNumber = (fibonacciSequenceFirstNumber + fibonacciSequenceSecondNumber);
    //         var fibonacciSequenceJoin = fibonacciSequenceStart.push(fibonacciSequenceNewNumber)
    //     }
    //     while (n < fibonacciSequenceJoin.length);
    //
    //     return fibonacciSequenceJoin
    // }
    //
    //
    // console.log(getNFibonacci(5));

    var array = [1,2,3,4];

    function moveFirstToLast(array) {
        var arrayshift = array.shift();
        array = array.push(arrayshift);

        return array
    }

    console.log(moveFirstToLast(array));


})();
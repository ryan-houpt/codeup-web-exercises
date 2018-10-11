(function() {
    "use strict";

    var blogPost = {
        author: "ryan",
        averageRating: 5,
        datePosted: 10/11/2018,
        title: "Where the red fern grows",
        noOfShares: 5000,
        noOfViews: 100000,
        isFlagged: true,
        lastUpdated: 10/12/2018,
        content: "history"
    };

    var blogPost = {};

    blogPost.author = "ryan";
    blogPost.averageRating = 5;
    blogPost.datePosted = 10/11/2018;
    blogPost.title = "Where the red fern grows";
    blogPost.noOfShares = 5000;
    blogPost.noViews = 10000;
    blogPost.isFlagged = true;
    blogPost.lastUpdated = 10/12/2018;
    blogPost.content = "History";


    console.log(blogPost);




    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Ryan",
        lastName: "Houpt",
    };

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */


    person.sayHello = "Hello! my name is " + person.firstName + " " + person.lastName + "! How are you today?";

    console.log(person.sayHello);

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */



    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];



    var discount = .12;
    var costNeeded = 200;
    var ryanDiscount = (shoppers[1].amount * discount);
    var ryanDiscontTotal = (shoppers[1].amount - ryanDiscount);
    var georgeDiscount = (shoppers[2].amount * discount);
    var georgeDiscountTotal = (shoppers[2].amount - georgeDiscount);

    console.log("To take advantage of the discount you will need to spend $" + costNeeded + " or more");
    console.log("Here is what everyone spent..." + shoppers[0].name + " who spent $" + shoppers[0].amount + ".");
    console.log("Here is what everyone spent..." + shoppers[1].name + " who spent $" + shoppers[1].amount + ".");
    console.log("Here is what everyone spent..." + shoppers[2].name + " who spent $" + shoppers[2].amount + ".");


    shoppers[0].discount = function () {
        console.log(shoppers[0].name + " did not spend enough to receive the discount so his total is $" + shoppers[0].amount);
    };
    shoppers[0].discount();


    shoppers[1].discount = function (){
        console.log(shoppers[1].name + " did receive the discount! His total bill was $" + shoppers[1].amount + ". He saved $"
            + ryanDiscount + ". His final amount after discount was $" + ryanDiscontTotal);
    };

    shoppers[1].discount();


    shoppers[2].discount = function (){
        console.log(shoppers[2].name + " did receive the discount! His total bill was $" + shoppers[2].amount + ". He saved $"
            + georgeDiscount + ". His final amount after discount was $" + georgeDiscountTotal);
    };

    shoppers[2].discount();


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    var books = [
        {
            title: "Ship of fools", authorFirst: "Tucker", authorLast: "Carlson"
        },
        {
            title: "The wonky donkey", authorFirst: "Craig", authorLast: "Smith"
        },
        {
            title: "The next person you meet", authorFirst: "Mitch", authorLast: "Albom"
        },
        {
            title: "Dare to Lead", authorFirst: "Brene", authorLast: "Brown "
        },
        {
            title: "Every Breath", authorFirst: "Nicolas", authorLast: "Sparks"
        }];


console.log(books[0].title);
console.log(books[0].authorFirst);
console.log(books[0].authorLast);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(element, index){
       console.log("Book # " + (index + 1) + "\n" + "Title: " + books[index].title + "\n" + "Auther: " + books[index].authorFirst + " "
       + books[index].authorLast + "\n" + "---")
    });




    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     */

    function createBook (){
        var bookTitle = prompt("What is the title of the book you would like to add?");
        var authorName = prompt("What is the name of the author? First and Last name");

        var authorArray = authorName.split(" ");

        var authorFirst = authorArray.shift();
        var authorLast = authorArray.pop();

        var fullBookString = (bookTitle + "," + authorFirst + "," + authorLast);
        var fullBookArray = fullBookString.split(",");

        books.push(fullBookArray);

        return books;
    }

    console.log(createBook());


// * - Create a function named `showBookInfo` that accepts a book object and
//     *   outputs the information described above. Refactor your loop to use your
//     *   `showBookInfo` function.

    var bookSearch = prompt("What is the author name or book title?");

    function searchBookInfo () {

        books.includes(bookSearch);

        if (books.includes(books) === true) {
            var indexOfSearch = books.indexOf(books.includes(bookSearch));
            return books[indexOfSearch];
        } else
            return alert("I can't find that book");

       // books.forEach(function(index){
       //     if (index < books.length && books.indexOf(bookSearch) === true) {
       //         return books[i]
       //     } else
       //         return alert("Sorry I could not find that book");
       // })
    }
    searchBookInfo()









// Exercise 1. Write a function called makeCar that takes in two strings, make and model, and returns an object with those properties
// Example: makeCar("VW", "beetle") returns the object {"make": "VW", "model", "beetle"}



    function makeCar (make, model) {
        var cars = {};
        cars.make = make;
        cars.model = model;

        return cars;

    }

console.log(makeCar("VW", "beetle"));

// Exercise 2. Use the following data to create a sales report
//     The object should have the following properties:
//       title, date, office, and employees.
//       the employees property should hold an array of objects.
//       each employee should be represented by an object with the following properties:
//         employee-number, first-name, last-name, sales-units

var officeReport = {

        title: "Monthly Sales Report",
        date: "03-17-2016",
        office: "Codeup",
        employees: [
            {
                number: 1 ,
                first: "Jane",
                last: "Janeway",
                sales: 3
            },
            {
                number: 3,
                first: "Tricia" ,
                last: "Triciason",
                sales: 5
            },
            {
                number: 4,
                first: "Jeanette",
                last: "Jeanson",
                sales: 4
            },
            {
                number: 5,
                first: "Charles Emerson III",
                last: "Winchester",
                sales: 2
            },
            {
                number: 6,
                first: "Chet",
                last: "Chedderson",
                sales: 8
            },
            {
                number: 7,
                first: "Chaim",
                last: "Chaiamson",
                sales: 12
            },
            {
                number: 8,
                first: "Dale",
                last: "Dalesinger",
                sales: 1
            },
            {
                number: 9,
                first: "Zig",
                last: "Ziglar",
                sales: 50
            },
            {
                number: 10,
                first: "Henry",
                last: "Kissinger",
                sales: 1
            },
            {
                number: 11,
                first: "Arthur",
                last: "Fonzarelli",
                sales: 23
            },
            {
                number: 12,
                first: "Betty",
                last: "Boop",
                sales: 67
            },
        ]

    };






// Exercise 3. On the objects object above, add the following methods
// - getEmployee count should return the total number of employees
// - total number of units sold
// - avg units sold per employee

function getEmployeeCount (){
    return officeReport.employees.length;
}

console.log(getEmployeeCount());

var totalSales = 0;

officeReport.employees.forEach(function(element){
   return totalSales + parseFloat(officeReport.employees.sales);
});


// Exercise 5. On the report object you created with the data above, add the following methods
//  getProfileCount() should return the total number of profiles
//  getActiveCount() should return the number of active profiles
//  sumOfAllBalances() should return sum of the balance of all profiles
//  getAverageBalance() should return the average balance per users
//  getAverageAge() should return the average age of all users
//  getGenderCounts() should return gender count of users as an object: example {"m": 23, "f", 32}
//  getAllCompanyNames() should return an array of all companies represented by the users
//  getMostCommonEyeColor() should return the most commonly occuring eye-color.
//  getBalancesForActiveAndNonActive() should return the balance of all non-active accounts vs. the balance of all active accounts?
//     this last method should return an object that looks like {"active-balances": 23000, "inactive-balances": 4000} w/ different numbers.
















})();
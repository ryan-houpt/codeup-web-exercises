const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let languages = users.filter((user) => user.languages.length >= 3);

console.log(languages);
//
// Use .map to create an array of strings where each element is a user's email address

// var incremented = numbers.map(function(n) {
//     return n + 1;
// });
// console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

let output = users.map(user => user.email);

console.log(output);


// Use reduce to get the total years of experience from the list of users.
// Once you get the total of years you can use the result to calculate the average.


const sum = users.reduce(function (accumulator, user) {
    return accumulator + user.yearsOfExperience;
}, 0);

console.log(sum);

let average = sum / 5;

console.log(average);
//     Use reduce to get the longest email from the list of users.


let longestWord = output.reduce(function(longest, currentWord) {
    if(currentWord.length > longest.length)
        return currentWord;
    else
        return longest;
}, "");

console.log(longestWord);


//     Use reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.



let singleString = users.reduce((accumulator, user) => {
    return accumulator + user.name + ", ";
}, "");

console.log(singleString);
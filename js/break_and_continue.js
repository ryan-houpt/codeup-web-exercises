var userNumber;

while (true) {
    userNumber = parseFloat(prompt("Pick any odd number"));
    if (userNumber % 2 !== 0 && userNumber < 50 && userNumber > 0)
        break;
}

console.log("Number to skip is: " + userNumber);

for (var i = 1; i < 51; i += 2) {
    if (i === userNumber) {
        console.log("Yikes! Skipping number: " + userNumber);
        continue;
    }
    console.log("Here is an odd number " + i);
}
"use strict";


console.log("Hello from external JavaScript!")

alert("Welcome to my website!")

var favcolor = prompt("What is your favorite color?")

alert("Great, " + favcolor + " is my favorite color too!")

alert("I see you rented some movies recently!")

var movieCost = prompt("How much did they cost per day?")

alert("Thanks, I am just trying to figure out how much it might cost me in the future. I see you rented these movies; little mermaid, brother bear, and Hercules. How long did you rent them?")

var littleMermaid = prompt("how long for little mermaid?")

var brotherBear = prompt("how long for Brother Bear?")

var hercules = prompt("how long for Hercules?")

alert("Doing some tabulations....")

var totalLM = (movieCost * littleMermaid)

var totalBB = (movieCost * brotherBear)

var totalH = (movieCost * hercules)

var totalCost = (totalLM + totalBB + totalH)

alert("It looks like your total cost was $" + totalCost.toFixed(2))

alert("I see you have done some extensive coding work for some top companies too!")

alert("it looks like Amazon, Google, and Facebook. Impressive.")

var googlePay = prompt("how much did google pay you?")

var googleHours = prompt("How many hours did you work there?")

var amazonPay = prompt("how much did Amazon pay?")

var amazonHours = prompt("How many hours did you work there?")

var facebookPay = prompt("how much from Facebook?")

var facebookHours = prompt("How many hours did you work there?")

var totalPay = ((googlePay * googleHours) + (amazonHours * amazonPay) + (facebookHours * facebookPay))

alert("wow it looks like you made... $" + totalPay.toFixed(2) + ", nice!!")

alert("so your a student too?")

var full = confirm("is the class you want full?")

var schedule = confirm("does it conflict with your current schedule?")

if (full === false && schedule === false) {
    alert("Great you are in!")
} else {
    alert("sorry it looks like you can't switch...")
}

alert("Wait do you shop at Whole foods too??")

var premium = confirm("Are you a premium member?")

if (premium === true) {
    alert("Fantastic! We can get you the discount with no added produce")
} else {
    alert("No worries! We can still get you the discount!")

    var totalProduce = prompt("How much produce do you have?")

    if (totalProduce >= 2) {
        alert("Awesome! We can get you the discount!");
    } else {
        alert("Well dang... you have to have at least 2...")
    }
}
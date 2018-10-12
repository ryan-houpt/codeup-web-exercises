(function() {
    "use strict";

    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            return (Math.PI * (Math.pow(circle.radius, 2)));
        },


        logInfo: function (doRounding) {
            // TODO: complete this method.

            if (doRounding) {
               return console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(circle.getArea()));
            } else {
                return console.log("Area of a circle with radius: " + this.radius + ", is: " + circle.getArea())
            }
        }
    };

    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");


    var circle5 = {
        radius: 5,

        getArea: function () {
            return (Math.PI * (Math.pow(circle5.radius, 2)));
        },


        logInfo: function (doRounding) {
            if (doRounding === true) {
                return console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(circle5.getArea()));
            } else {
                return console.log("Area of a circle with radius: " + this.radius + ", is: " + circle5.getArea())
            }
        }
    };

    console.log("Raw circle information");
    circle5.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle5.logInfo(true);
})();


//
// ================================= MATH OBJECT BONUS
// Create an application that will calculate the volume of a building based on user input.
//     Account for multiple rooms and a user choice of measurement (between imperial or metric).


alert("So you need to calculate how much volume you have in the building? No problem!");

function volumeOfBuilding () {

    var  differentTotalRooms = 0;

    var numberOfRooms = parseFloat(prompt("How many rooms are in the building?"));
    console.log(numberOfRooms);
    var roomSizes = confirm("Is each room the same size?");

    if (roomSizes === false){
        var rooms = [];
        var i = numberOfRooms;
        for (i ; i < 0; i += 1) {
            rooms.push({

                roomheights: prompt("What is the height of the room" + i + "?"),
                roomWidth: prompt("What is the width of the room" + i + "?"),
                roomLength: prompt("What is the length of the room" + i + "?")

            });

         }
    rooms.forEach(function(element, room){
             differentTotalRooms += rooms[room].roomheights * rooms[room].roomWidth * rooms[room].roomLength
    });

        return alert("The size of the building is " + differentTotalRooms)
    } else {

        var lengthOfRoom = prompt("What is the length of the room?");
        var lengthMeasurment = prompt("Is that in inches or feet?");
        if (lengthMeasurment.toLowerCase() === "inches" || lengthMeasurment.toLowerCase() === "in") {
            lengthOfRoom = (lengthOfRoom / 12)
        }


        var widthOfRoom = prompt("What is the width of the room?");
        var widthMeasurement = prompt("Is that in inches or feet?");
        if (widthMeasurement.toLowerCase() === "inches" || widthMeasurement.toLowerCase() === "in") {
            widthOfRoom = (widthOfRoom / 12)
        } else {
            widthOfRoom = widthOfRoom
        }


        var heightofRoom = prompt("What is the height of the room?");
        var heightMeasurment = prompt("Is that in inches or feet?");
        if (heightMeasurment.toLowerCase() === "inches" || heightMeasurment.toLowerCase() === "in") {
            heightofRoom = (heightofRoom / 12)
        } else {
            heightofRoom = heightofRoom
        }

        var measurementsToSquare = Math.pow((heightofRoom + widthMeasurement + lengthOfRoom), 2)
    }


    var totalVolumeOfBuilding = measurementsToSquare * numberOfRooms;

    return alert("The total volume of the building is " + totalVolumeOfBuilding.toFixed(2));
}

console.log(volumeOfBuilding());


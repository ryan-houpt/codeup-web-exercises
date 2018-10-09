// var x = 2;
//
// do {
//     console.log('while loop iteration #' + x);
//     x *= 2;
// } while (x < 65537 );



// This is how you get a random number between 50 and 100
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
//
// var i = 10;
//
// do {
//     console.log('while loop iteration #' + i);
//     i++;
// } while (i < 10);

var allCones = Math.floor(Math.random() * 50) + 50;


do {
    console.log("You have " + allCones + " cones");
    var conessold = Math.floor(Math.random() * 5) + 1;
    if (allCones >= conessold) {
        allCones = allCones - conessold;
        console.log("I've sold " + conessold + " cones!");
        if (allCones === 0) {
            console.log("I've sold all my cones!");
        }
    }
    else {
        console.log("Dangit I don't have enough cones to sell")
    }


} while (allCones !== 0);

console.log("You have sold all your cones!");
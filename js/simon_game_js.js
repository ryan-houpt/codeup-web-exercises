let userInput = [];
let computerInput = [];



function randomColor() {
    return Math.floor(Math.random()*4) + 1
}

function randomColorSelection() {

    randomColor();
    let i;
    for (i = 2; i < computerInput.length; i += 2) {

        let computerChoice = randomColor();

        if (computerChoice === 1) {
            setTimeout(function () {
                $('#redcard').css('opacity', '1');
            }, 500);
            setTimeout(function () {
                $('#redcard').css('opacity', '.5');
            }, 1000);
        }
        if (computerChoice === 2) {
            setTimeout(function () {
                $('#bluecard').css('opacity', '1');
            }, 500);
            setTimeout(function () {
                $('#bluecard').css('opacity', '.5');
            }, 1000);
        }
        if (computerChoice === 3) {
            setTimeout(function () {
                $('#greencard').css('opacity', '1');
            }, 500);
            setTimeout(function () {
                $('#greencard').css('opacity', '.5');
            }, 1000);
        }
        if (computerChoice === 4) {
            setTimeout(function () {
                $('#yellowcard').css('opacity', '1');
            }, 500);
            setTimeout(function () {
                $('#yellowcard').css('opacity', '.5');
            }, 1000);

            computerInput += computerChoice;
        }




        console.log(computerInput);

    }

}

function runGame() {

}

    $('.boxtic').css('border', '1px solid black');
    $('.rowtic').css('float', 'left');
    $('.boxtic').css('height', '150px');
    $('.boxtic').css('width', '150px');
    $('.boxtic').css('margin', 'auto');
    $('.konamih1').css('margin-left', '700px');
    $('.konamih2').css('margin-left', '700px');
    $('.margin-50').css('margin-left', '50px');
    $('.letter').css('font-size', '100px');

    var reload = $('.button'); //grab the button to reload

function tic() {
    var isX = true; //decides the start of play for the first player

    $('.player-o').hide(); //default hides the second player

    $('.boxtic').click(function () {
        if (isX === true) {
            $(this).children().html('x'); //places the ltter
            isX = false; //switches player
            $(this).off("click"); //turns off the box
            $('.player-o').show(); //shows the players turn
            $('.player-x').hide();
        }
        else {
            $('.player-o').hide();
            $('.player-x').show();
            $(this).children().html('o');
            $(this).off("click");
            isX = true;
        }

    });
}

    reload.click(function() {
        document.location.reload(); //reloads the page
    });
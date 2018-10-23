
    $('.boxtic').css('border', '1px solid black');
    $('.rowtic').css('float', 'left');
    $('.boxtic').css('height', '150px');
    $('.boxtic').css('width', '150px');
    $('.boxtic').css('margin', 'auto');
    $('.konamih1').css('margin-left', '700px');
    $('.konamih2').css('margin-left', '700px');
    $('.margin-50').css('margin-left', '50px');
    $('.x').css('font-size', '100px');
    $('.o').css('font-size', '100px');


function tic() {
    var isX = true;

    $('.player-o').hide();

    $('.boxtic').click(function () {
        if (isX === true) {
                $(this).html('<div class="x">' + 'x' + '</div>');
                isX = false;
                $('.player-o').show();
                $('.player-x').hide();
            }
         else {
                $('.player-o').hide();
                $('.player-x').show();
                $(this).html('<div class="o">o</div>');
                isX = true;
            }
    });
}
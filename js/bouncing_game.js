var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var otterRadius = 10;

function drawOtter () {
    ctx.beginPath();
    ctx.arc(x, y, otterRadius, 5, Math.PI*2);
    ctx.fillstyle = 'red';
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawOtter();

    y += dy;
}

setInterval(draw, 10);
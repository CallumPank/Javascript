var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

var rightPressed = false;
var leftPressed = false;

var x = canvas.width/2;
var y = canvas.height-30;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

function drawPaddle()
{
context.beginPath();
context.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
context.fillStyle = "#0095DD";
context.fill();
context.closePath();

if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
        context.fillStyle = "green";
        context.fill();
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
        context.fillStyle = "green";
        context.fill();
    }
}

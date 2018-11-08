var paddleHeight = 10;
var paddleWidth = 100;
var paddleX = (canvas.width-paddleWidth)/2;

var rightPressed = false;
var leftPressed = false;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

document.addEventListener("mousemove", mouseMovement, false);



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

//movement of paddle with mouse possible now
function mouseMovement(e) {
  var horizontalX = e.clientX - canvas.offsetLeft;
  if (horizontalX > 0 && horizontalX < canvas.width){
    paddleX = horizontalX - paddleWidth/2;
  }

}

function drawPaddle()
{
context.beginPath();
context.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
context.fillStyle = "cyan";
context.fill();
context.closePath();

//if pressed paddle will move 7 pixels and not go off the side of the screen
if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
}

//position of ball
var x = canvas.width/2;
var y = canvas.height-30;

var drawX = 2;
var drawY = -2;

var radiusBall = 10;

document.addEventListener("click", secondBounce, false);

function secondBounce()
{
    drawY = -2;

}

function ballDraw()
{
  context.beginPath();
  context.arc(x, y, radiusBall, 0, Math.PI*2);
  context.fillStyle = "#FF0092";
  context.fill();
  context.closePath();

  //if the distance between the center of the ball and the edge of wall is exactly the same as the radius of the ball
  //it will change the movement direction
  if(x + drawY > canvas.width-radiusBall || x + drawY < radiusBall) {
        drawX = -drawX;

    }

    //if ball hits bottom of screen page will reload
    if (y + drawY < radiusBall) {
      drawY = -drawY;
    }
    else if (y + drawY > canvas.height-radiusBall) {
        if (x > paddleX && x < paddleX + paddleWidth){
          drawY = -drawY
        }
        else {
          document.location.reload();
        }
    }
}

setInterval(draw, 1);

var dx = 2;
var dy = -2;

var radiusBall = 10;


function ballDraw()
{
  context.beginPath();
  context.arc(x, y, radiusBall, 0, Math.PI*2);
  context.fillStyle = "green";
  context.fill();
  context.closePath();

  if(x + dx > canvas.width-radiusBall || x + dx < radiusBall) {
        dx = -dx;

    }

    if(y + dy > canvas.height-radiusBall || y + dy < radiusBall) {
        dy = -dy;

    }
}

setInterval(draw, 1);

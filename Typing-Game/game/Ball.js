var dx = 2;
var dy = -2;

var radiusBall = 10;

function ballDraw()
{

  context.beginPath();
  context.arc(x, y, radiusBall, 0, Math.PI*2);
  context.fillStyle = "#0095DD";
  context.fill();
  context.closePath();

}

setInterval(draw, 10);

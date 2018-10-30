function draw()
{
  context.clearRect(0, 0, canvas.width, canvas.height);
  ballDraw();
  drawPaddle();
  drawBricks();
  x += dx;
  y += dy;

  if(x + dx > canvas.width-radiusBall || x + dx < radiusBall) {
        dx = -dx;
    }
    if(y + dy > canvas.height-radiusBall || y + dy < radiusBall) {
        dy = -dy;
    }

    if(rightPressed && paddleX < canvas.width-paddleWidth) {
            paddleX += 7;
        }
        else if(leftPressed && paddleX > 0) {
            paddleX -= 7;
        }

}

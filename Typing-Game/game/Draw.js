function draw()
{
  context.clearRect(0, 0, canvas.width, canvas.height);
  ballDraw();
  collisionDetect();
  drawPaddle();
  drawBricks();


  x += dx;
  y += dy;

}

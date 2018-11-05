function collisionDetect()
{
  for (var c=0; c<brickColumnCount; c++)
  {
    for (var r=0; r<brickRowCount; r++)
    {
      var bObject = bricks[c][r];
      if(bObject.status == 1) {
      if(x > bObject.x && x < bObject.x+brickWidth && y > bObject.y && y < bObject.y+brickHeight) {
               dy = -dy;
               bObject.status = 0;
             }
    }
  }
}
}

var score = 0;

//draws score onto canvas
function scoring()
{
  context.font = "16px Arial";
  context.fillStyle = "#BA01FF";
  //last two parameters are coordinates on screen
  context.fillText("Score: "+score, 8, 20);
}

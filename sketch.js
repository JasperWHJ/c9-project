function setup() {
  createCanvas(400,400);
  background(51);
}

function draw() 
{
  if(keyIsDown(RIGHT_ARROW))
  {
    background(rgb(255, 0, 0));
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
  }

  if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }
  
  drawSprites();
}

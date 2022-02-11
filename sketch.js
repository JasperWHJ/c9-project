var ball;

function setup(){
  createCanvas(400,400);
  ball = createSprite(200, 200, 20, 20);
}

function draw(){
  background(30);
  if(keyDown("left") || keyDown("a")){
    ball.x-=3;
  }
  if(keyDown("right") || keyDown("d")){
    ball.x+=3;
  }
  if(keyDown("up") || keyDown("w")){
    ball.y-=3;
  }
  if(keyDown("down") || keyDown("s")){
    ball.y+=3;
  }
  drawSprites();
}

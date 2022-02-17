var sea, ship;
var seaImg, shipImg;

function preload(){
  // loads animation for ship
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  
  // loads image for sea
  seaImg = loadImage("sea.png");
}

function setup(){
  // general
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  // setup ship
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  // general
  background(0);
  sea.velocityX = -3;

  //uncomment code to reset the background
  if(sea.x < 0){
    //sea.x = 0;
    //sea.x = sea.width;
    sea.x = sea.width/8;
    //sea.y = height;
  }

  drawSprites();
}
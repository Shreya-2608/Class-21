var fixed_rect, moving_rect;
var rect1,rect2;

function setup() {
  createCanvas(800,400);
  fixed_rect = createSprite(100,200,50,50);
  fixed_rect.debug = true;
  fixed_rect.velocityX = -3;
  moving_rect = createSprite(700,200,50,50);
  moving_rect.debug = true;
  moving_rect.velocityX = 3;
  rect1 = createSprite(300,200,50,50);
  rect2 = createSprite(500,200,50,50)
}

function draw() {
  background("black"); 
 
  rect1.x = mouseX;
  rect1.y = mouseY;

  if(collided(rect1,rect2)){
    rect1.shapeColor = "red";
    rect2.shapeColor = "red";
  }
 else{
    rect1.shapeColor = "green";
    rect2.shapeColor = "green";
  }

   BounceOff(moving_rect,fixed_rect)
    drawSprites();
}
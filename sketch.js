var movingRect, fixedRect
function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green"

  movingRect = createSprite(450,200,60,70)
  movingRect.shapeColor = "blue"

  movingRect.velocityX = +5
  fixedRect.velocityX = -5
  
}

function draw() {
  background(255,255,255);  
 movingRect.x = mouseX
  movingRect.y = mouseY
  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && FixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 ){
  fixedRect.velocityX = fixedRect.velocityX +1
  movingRect.velocityX = movingRect.velocityX -1
  }
  if  (movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2){
  fixedRect.velocityY = fixedRect.velocityY +1
  movingRect.velocityX = movingRect.velocityX -1
  }
  drawSprites();
}
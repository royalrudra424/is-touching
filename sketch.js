var fixedRect, movingRect,box3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = false;
  box3= createSprite(600, 10, 50, 80);
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect,fixedRect)){
  
  fixedRect.shapeColor =("red");
 movingRect.shapeColor ="red";

}
else{
  fixedRect.shapeColor="green"; 
   movingRect.shapeColor="green";
}
if (isTouching(movingRect,box3)){
  box3.shapeColor="red";



}
  drawSprites();
}

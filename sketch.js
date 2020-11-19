var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);

  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;

  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor="green";
  movingRect.debug=true;

}
function draw() {
  background("black");

  text("Fixed Rect X Position: "+fixedRect.x,600,100);
  text("Fixed Rect Width: "+fixedRect.width,600,120);
  text("Moving Rect X Position: "+movingRect.x,600,140);
  text("Moving Rect Width: "+movingRect.width,600,160);
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x<(movingRect.width+fixedRect.width)/2 &&
   fixedRect.x-movingRect.x<(movingRect.width+fixedRect.width)/2 &&
   movingRect.y-fixedRect.y<(movingRect.height+fixedRect.height)/2 &&
   fixedRect.y-movingRect.y<(movingRect.height+fixedRect.height)/2){

    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

  drawSprites();
}
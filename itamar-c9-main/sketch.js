
var box;


function setup() {
  createCanvas(600,600);
  
box=createSprite(300,300,25,25);
box.shapeColor="purple";

}

function draw() 
{
  background(0);

  if(keyIsDown(UP_ARROW)){
      box.y=box.y -5;
  }

  if(keyIsDown(DOWN_ARROW)){
    box.y=box.y +5;
      }
      if(keyIsDown(LEFT_ARROW)){
        box.x=box.x -5;
    }
  
    if(keyIsDown(RIGHT_ARROW)){
      box.x=box.x +5;
        }
      if (keyDown("space")) {
       background("green") 
      }
    
  drawSprites();
}





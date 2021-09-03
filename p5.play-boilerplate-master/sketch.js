var bow 
var arrow
var bg
var target

function preload(){

bowImage=loadImage("assets/images.png")
arenaImage=loadImage("assets/arena.jpg")
arrowImage=loadImage("assets/NicePng_archery-png_385791.png")
targetImage=loadImage("assets/pngwing.com.png")


}

function setup() {
  createCanvas(1200,1200);
  
  bow=createSprite(200,600,10,10)
  target=createSprite(300,300,10,10)

  bow.rotation=40
  bow.addImage(bowImage)
 
}


function draw() {
  background(arenaImage); 
  bow.y = mouseY
  drawSprites();
}

function keyPressed(){
  if(keyCode === 65){
    arrow=createSprite(200,bow.y,10,10)
    arrow.addImage(arrowImage)
   arrow.scale=.1
   arrow.rotation=46
    arrow.velocityX=10
    arrow.lifetime=200
  }
}
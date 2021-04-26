var wall,thickness
var speed,weight,bullet

function setup() {
  createCanvas(1600,400);
  speed = random(223,331);
  weight = random(30,52);

  bullet = createSprite(50,200,70,15);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  thickness = random(22,83)
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = ("white");

}

function draw() {
  background("black");  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if(damage>10){
   wall.shapeColor = color("green");
    }
   if(damage<10){
    wall.shapeColor = color("red");
   }
   }
  
  drawSprites();
 }
 function hasCollided(lbullet, lwall)
{ bulletRightEdge=lbullet.x + bullet.width;
 wallLeftEdge=lwall.x;
 if(bulletRightEdge>=wallLeftEdge){
   return true
 }
   return false;

}
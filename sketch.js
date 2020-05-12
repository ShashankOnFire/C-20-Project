var car , wall;
var speed , weight;

var Imaginarywall;

var deformation;

function setup() {
  createCanvas(1600,400);

  //applying some random numbers
  speed = random(5,150);
  weight = random(400,1500)
  
  //creating an imaginary wall
  Imaginarywall = createSprite(1470,200,60,height/2);
  Imaginarywall.shapeColor = "black";

  //creating the car
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "white";
  car.velocityX = speed;

  //creating the wall
  wall = createSprite(1570, 200, 60, height/2);
  wall.shapeColor = "white";
}

function draw() 
{
  background("black");

  //Text("test",canvas.width/2,200)

  deformation = 0.5 * weight * speed * speed/22500;

 if (Imaginarywall.x - car.x < car.width/2 + Imaginarywall.width/2)
 {
   car.velocityX = 10;
 }

 if (wall.x - car.x < car.width/2 + wall.width/2){
  if (deformation < 100)
  {
    car.shapeColor = color(0,255,0)
  }
  
  if (deformation > 100 && deformation < 180)
  {
    car.shapeColor = color(230,230,0)
    car.velocityX = 2;

  }

  if (deformation > 180)
  {
    car.shapeColor = color(255,0,0)
    car.velocityX = 0;
  }
 }
  drawSprites();
}
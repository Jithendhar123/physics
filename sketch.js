const Engine  = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;


var bg;
var ground
var pl1,pl2
var box1,box2,box3,box4,box5,box6
var log1,log2,log3
var pink,slingshot;
var enemy1,enemy2,enemy3
var gameState = "onSling"
function preload(){
  bg = loadImage("bg.png")
}
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
    pl1 = new Ground(40,height-20,500,50)
    pl2 = new Ground(1160,height-20,900,50)
    box1 = new box(820, 320, 70, 70);
    box2 = new box(1040, 320, 70, 70);
    log1 = new box(930, 260, 300,20);
    box3 = new box(820, 240, 70, 70);
    box4 = new box(1040, 240, 70, 70);
    log2 = new box(920, 180,300,20);
    box5 = new box(820,160,70,70)
    box6 = new box(1040,160,70,70)
    log3 = new box(920,100,300,20)
    pink = new circle(200,50)
    enemy1 = new enemy(855, 220);
    enemy2 = new enemy(865, 100);
    enemy3 = new enemy(885, 350);
    slingshot = new SlingShot(pink.body, { x: 200, y: 200 });
}

function draw() {
  background(bg);
  Engine.update(engine)
  slingshot.display();
  pink.display();
  enemy1.display();
  enemy2.display();
  enemy3.display();
  ground.display();  
  pl1.display();
  pl2.display();
  fill("grey")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  fill("cyan")
  log1.display();
  log2.display();
  log3.display();
  drawSprites();
}
function mouseDragged()
{
  Matter.Body.setPosition(pink.body,{x:mouseX,y:mouseY});
}

//mouse release function to null the bodyA nd let it fly
function mouseReleased()
{
   sling.fly();
}

//keypressed function to attach stone back to constraint
function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(pink.body,{x:100,y:200});
    sling.attacher(pink.body);
  }
}
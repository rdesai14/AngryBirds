const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball, ground, sling
var box, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19

var engine, world;

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;

     ground = new Ground(1500, 790, 3000, 5);
     ball = new Ball(1700, 400, 40, 40);
     sling = new SlingShot(ball.body,{x:1700, y:100})
    box = new Box(2400,780,50, 50)
    box1 = new Box(2400,730,50, 50)
    box2 = new Box(2400,680,50, 50)
    box3 = new Box(2400,630,50, 50)
    box4 = new Box(2400,580,50, 50)
    box5 = new Box(2200,780,50, 50)
    box6 = new Box(2200,730,50, 50)
    box7 = new Box(2200,680,50, 50)
    box8 = new Box(2200,630,50, 50)
    box9 = new Box(2200,580,50, 50)
    box10 = new Box(2000,780,50, 50)
    box11 = new Box(2000,730,50, 50)
    box12 = new Box(2000,680,50, 50)
    box13 = new Box(2000,630,50, 50)
    box14 = new Box(2000,580,50, 50)
    box15 = new Box(2600,780,50, 50)
    box16 = new Box(2600,730,50, 50)
    box17 = new Box(2600,680,50, 50)
    box18 = new Box(2600,630,50, 50)
    box19 = new Box(2600,580,50, 50)

}

function draw(){

    background(180,0,0)
    Engine.update(engine)

 ball.display()
 ground.display() 
 sling.display()
 box.display()
 box1.display() 
 box2.display()
 box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}
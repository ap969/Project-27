
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
var ropelength,ropestiffness;
function preload()
{
	
}

function setup() {
	createCanvas(800, 450);
    

	engine = Engine.create();
	world = engine.world;
	engine.world.gravity.y = 1;
	ropelength = 300;
	ropestiffness = 0;
	//Create the Bodies Here.
	ball1 = new ball(260,200,35);
	ball2 = new ball(330,265,35);
	ball3 = new ball(400,320,35);
	ball4 = new ball(470,375,35);
	ball5 = new ball(940,430,35);
	rope1 = new chain(ball1.body,{x:260,y:80},ropelength,ropestiffness);
	rope2 = new chain(ball2.body,{x:330,y:80},ropelength,ropestiffness);
	rope3 = new chain(ball3.body,{x:400,y:80},ropelength,ropestiffness);
	rope4 = new chain(ball4.body,{x:470,y:80},ropelength,ropestiffness);
	rope5 = new chain(ball5.body,{x:540,y:80},ropelength,ropestiffness);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update(engine);
  rope1.display();
  ball1.display();
  rope2.display();
  ball2.display();
  rope3.display();
  ball3.display();
  rope4.display();
  ball4.display();
  rope5.display();
  ball5.display();
  rectMode(CENTER);
  fill(200,200,200);
  stroke("white");
  rect(400,80,375,50);
  drawSprites();
 
}




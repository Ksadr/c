var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	GroundObj.display;
	GroundObj=new ground(width/2670,width,20);
	leftSide = new ground(1100,600,20,120);

var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
	Engine.run(engine);
  
}
Matter.bodies.circle(200,200,5)

function draw() {
  rectMode(CENTER);
  background(0);
 
  drawSprites();
 
}




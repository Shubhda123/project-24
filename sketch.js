
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer
var plane
var rubber 
var stone 

function preload()
{
	
}

function setup() {
	createCanvas(1200,1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  hammer=new Hammer(40,100,120,30);
  plane=new Plane(800,600,1600,20);
  rubber=new Rubber(700,450,40);
  stone=new Stone(400,320,100,100);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  hammer.display()
  plane.display()
  rubber.display()
  stone.display()
  

 
}




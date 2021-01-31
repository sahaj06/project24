
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,hammer,rubber,stone;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(650,600,700,30)
hammer = new Hammer(350, 300,50,20)
rubber = new Rubber(600,100,20)
stone = new Stone(550,400,50,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
   ground.display();
   hammer.display();
   stone.display()
   rubber.display();
   
   drawSprites();
 
};




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;


bob1=new Bob(300,350,50);
bob2=new Bob(350,350,50);
bob3=new Bob(400,350,50);
bob4=new Bob(450,350,50);
bob5=new Bob(500,350,50);

  Holder1 = new Holder(400,100,300,40);
  line1= new Line(bob1.body,Holder1.body,-50*2,0);
  line2= new Line(bob2.body,Holder1.body,-25*2,0);
  line3= new Line(bob3.body,Holder1.body,-0*2,0);
  line4= new Line(bob4.body,Holder1.body,25*2,0);
  line5= new Line(bob5.body,Holder1.body,50*2,0);

	Engine.run(engine);
  
}


function draw() {
  background("orange");

  rectMode(CENTER);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();

  Holder1.display();
  line1.display();
  line2.display();
  line3.display();
  line4.display();
  line5.display();


  keyPressed();
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100}); } 
} 

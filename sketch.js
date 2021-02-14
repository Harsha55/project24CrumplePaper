
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper = new Paper(100,500,20)

	left = new Dustbin(595,600,10,140);
	right = new Dustbin(705,600,10,140);
	bottom = new Dustbin(650,665,100,10);

	ground = new Ground(400,690,800,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  left.display();
  right.display();
  bottom.display();

  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-55});
	}

	if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:-10,y:-90})
	}
}




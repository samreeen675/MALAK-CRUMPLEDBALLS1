var ground, box1, box2, box3, ball;
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
	ground = new Ground(400,690,800,10);
	box1 = new dustbin(680, 680, 150, 10);
	box2 = new dustbin(600, 650, 10, 50);
	box3 = new dustbin(760, 650, 10, 50);
	ball = new Paper(80, 150, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
}

// function KeyPressed(){
// 	if (keyCode === UP_ARROW){
// 		Matter.Body.applyForce(ball.body, ball.body.position, {x:85, y:-85});
// 	}
// }



// function keyPressed() {
// 	if (keyCode === UP_ARROW) {

// 	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  
// 	}
// }

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:60, y:-60})
	}
}


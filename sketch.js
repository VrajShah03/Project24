var paper;
var ground;
var dustbin;
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

	var paper=createSprite(40,350,this.body.diameter);
    paper.scale=0.2;

  var dustbin=createSprite(350,350,this.body.width,this.body.height);
  dustbin.scale=0.7;

  var ground=createSprite(355,355,this.body.width,this.body.height)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
   if(keyCode === UP_ARROW){

       Matter.Body.applyForce(paper.body,paper.body.position,{x=85,y=-85});

   }

}


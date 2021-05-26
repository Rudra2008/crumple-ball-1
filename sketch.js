var box1,box2,box3;
var paper;
var engine,world;
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  engine=Matter.Engine.create();
  world=engine.world;
  
	//Create the Bodies Here.
  var option={
	  isStatic:true
	  

  }
  ground=Matter.Bodies.rectangle(400,700,800,10,option)
Matter.World.add(world,ground)
	
  var options={
	  isStatic:false,
	  restitution:0.3,
	  friction:0.5,
	  density:1.2

  }
  paper=Matter.Bodies.rectangle(20,100,20,20,options)
Matter.World.add(world,paper)
	
  
}


function draw() {
	Matter.Engine.update(engine)
  
  background(0);
  rectMode(CENTER)
  rect(paper.position.x,paper.position.y,20,20);
  fill('brown')
  rect(ground.position.x,ground.position.y,800,10);
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper,paper.position,{x:40,y:-120})
  }
}




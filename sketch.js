
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//declare all variables here bobdia also
//ok mam
var ball1,ball2,ball3,ball4,ball5,roof,chain1,chain2,chain3,chain4,chain5,bobDiameter;
var world,engine;

function setup() {

	createCanvas(1600, 700);
    rectMode(CENTER)


    bobDiameter = 60 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


    ball1 = new bob(400,600,60)
    ball2 = new bob(450,600,60)
	ball3 = new bob(500,600,60)
	ball4 = new bob(550,600,60)
	ball5 = new bob(600,600,60)

	//ground = new Ground(0,600,5000,20)
    roof = new Ground(500,300,300,20)

    chain1 = new Chain(ball1.body,roof.body,-bobDiameter*2,0)
 
    chain2 = new Chain(ball2.body,roof.body,-bobDiameter*1,0)
    chain3 = new Chain(ball3.body,roof.body,0,0)
    chain4 = new Chain(ball4.body,roof.body,bobDiameter*1,0)
    chain5 = new Chain(ball5.body,roof.body,bobDiameter*2,0)
   
    
	Engine.run(engine);
  
}



function draw() {
	background("pink")
  rectMode(CENTER);
  
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  
  roof.display()

 chain1.display()
 chain2.display()
 chain3.display()
 chain4.display()
 chain5.display()
 //drawSprites(); 
}

function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});
       // Matter.Body.applyForce(ball5.body,ball1.body.position,{x:78,y:55});
    }
}


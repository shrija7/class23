


//Create namespace for Engine
const Engine=Matter.Engine
//Create namespace for World
const World=Matter.World
//Create namespace for Bodies
const Bodies=Matter.Bodies
//Create namespace for Body
const Body=Matter.Body

function setup() {
  //canvas is created
  createCanvas(400,400);
//our engine is created
engine=Engine.create();
  //Add world to the engine
  world=engine.world

  //ball options
   var ball_options = {
    restitution: 0.95,
    //friction is given to the ball while falling
    frictionAir:0.01
  }
   //ground options
   var ground_options ={
     isStatic: true
   };
  

//ball is created and added to world
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  var xyz={
    //rectangle/ground is made to remain stationery
    isStatic:true
  }

  rectMode(CENTER);
  ellipseMode(RADIUS);
  
  //ground is created
  ground=Bodies.rectangle(200,390,400,20,xyz);
  World.add(world,ground);
}


function draw() 
{
  //background is given
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //ground is made visible
 rect(ground.position.x,ground.position.y,400,20)


  
  
}


const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ground,ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world
  var options ={
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,400,40,options)
  World.add(world,ground)
  var options_ball={
    restitution:0.8
  }
  ball=Bodies.circle(200,100,20,options_ball);
  World.add(world,ball);
  
}

function draw() {
  background("white"); 
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y,400,40)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)
}
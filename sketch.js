const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
const Body= Matter.Body
var engine, world, ball, ground

function setup(){
  createCanvas(400,400)

  engine= Engine.create()
  world= engine.world

  var ground_options= {
    isStatic: true

  }
  ground= Bodies.rectangle(200,390,400,20, ground_options)
  World.add(world,ground)
var ball_options={
  restitution:1, 
  friction:0.01
}
  
ball= Bodies.circle(300,100,10, ball_options)
  World.add(world,ball)

  ball2= Bodies.circle(200,10,20, ball_options)
  World.add(world,ball2)

  wall= Bodies.rectangle(200,150,60,50 , ground_options )
  World.add(world,wall)



}
function draw(){

  background("red")

  Engine.update(engine)
  rectMode(CENTER)
  fill("blue")
  rect(ground.position.x, ground.position.y, 400,20)

  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 30)

  ellipseMode(RADIUS)
  ellipse(ball2.position.x, ball2.position.y, 30)

  rect(wall.position.x, wall.position.y, 60,50)
}
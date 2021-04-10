const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine, myWorld, Ground, Ball

function setup() {
  createCanvas(600,600);

myEngine= Engine.create()
  
myWorld= myEngine.world;

Ground= Bodies.rectangle(300, 590, 600, 20, {isStatic:true})
World.add(myWorld, Ground)

Ball= Bodies.circle(300, 10, 20, {restitution:1.0})
World.add(myWorld, Ball)

}

function draw() {


  background(0);  
  Engine.update(myEngine)
fill("brown")

  rectMode(CENTER)
  rect(Ground.position.x, Ground.position.y, 600, 20)

  fill("white")

  ellipseMode(RADIUS)
  ellipse(Ball.position.x, Ball.position.y, 20, 20)
}
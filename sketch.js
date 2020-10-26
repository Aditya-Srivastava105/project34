const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, rope
var rope2,rope3,rope4,rope5;
var ball2,ball3,ball4,ball5;

function preload(){
 // background = loadImage(Newton.jpg);
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ball = new Ball(200, 200, 80, 80);
  ball2 = new Ball(300,200,80,80);
  ball3 = new Ball(400,200,80,80);
  ball4 = new Ball(500,200,80,80);
  ball5 = new Ball(600,200,80,80);
  rope = new Rope(ball.body, { x: 200, y: 50 });
  rope2 = new Rope(ball2.body, { x: 300, y: 50});
  rope3 = new Rope(ball3.body, { x: 400, y: 50});
  rope4 = new Rope(ball4.body, { x: 500, y: 50});
  rope5 = new Rope(ball5.body, { x: 600, y: 50});

}

function draw() {
  Engine.update(engine);

  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


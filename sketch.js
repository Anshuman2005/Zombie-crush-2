const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let wall1,wall2,bridge;
let stone1,stone2,stone3,stone4,stone5,stone6,stone7,stone8;
var zombie,button;


function preload(){
  zombieImg = loadImage("/assets/zombie.png");
  backgroundImage=loadImage("/assets/background.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  zombie = createSprite(width/2-950, height - 110);
  zombie.addImage("zombie",zombieImg);
  zombie.scale = 0.1;
  zombie.velocityX = 10;

  
  button=createImg("/assets/axe.png");
  button.position(width-200,height/2-50);
  button.size(50,50);
  button.mouseClicked(handleButtonPress);

  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  wall_options={
    isStatic:true
  };
  
  wall1 = new Base(width-1800,height-400,300,300,wall_options);
  wall2 = new Base(width- 150,height-400,300,300,wall_options);
  bridge =new Bridge(40,{x:20,y:550});
  Matter.Composite.add(bridge.body,wall2)
  jointLink = new Link(bridge,wall2);
  stone1 = new Stone(width-800,height-1000,40);
  stone2 = new Stone(width-1000,height-1000,40);
  stone3 = new Stone(width-600,height-1000,40);
  stone4 = new Stone(width-800,height-1000,40);
  stone5 = new Stone(width-600,height-1000,40);
  stone6 = new Stone(width-300,height-1000,40);
  stone7 = new Stone(width-830,height-1000,40);
  stone8 = new Stone(width-800,height-1000,40);
}

function draw() {
  background(51);
  imageMode(CENTER);
  image(backgroundImage,width/2,height/2,windowWidth,windowHeight);

  Engine.update(engine);

  bridge.show();
  stone1.show();
  stone2.show();
  stone3.show();
  stone4.show();
  stone5.show();
  stone6.show();
  stone7.show();
  stone8.show();
  drawSprites();

}

function handleButtonPress(){
  jointLink.detach();
  setTimeout(() => {
    bridge.break();
  }, 1500);
}

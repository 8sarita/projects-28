
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var world,boy;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var stone1;
var chain1;

function preload(){
	boy=loadImage("sboy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone1=new Stone(200,400,50,50);
	chain1=new SlingShot(mango1.body,{x: 400, y: 400});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  stone1.display();
  chain1.display();
  groundObject.display();

  mouseDragged();
  
}
function mouseDragged(){

	Matter.Body.setPosition(mango1.body,{x: mouseX,y: mouseY});
 
 }
 
 function mouseReleased(){
	 
	slingShot.fly();
   
  
}

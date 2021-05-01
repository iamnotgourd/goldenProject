
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var balloonImg,balloon;
function preload()
{
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var render = Matter.Render.create({ element: document.body, engine : engine, options : { width : 800, height : 700, showAngleIndicator : false, wireframes : true } })
	 Matter.Render.run(render);


	//Create the Bodies Here.
	balloon = new Balloon(400,350,50)
	prot = new Protector(335,350,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	prot.display()
	balloon.display()
  drawSprites();
}
function mouse(){

}
function touch(){
	mangoBodyPosition=lmango.body.position 
	stoneBodyPosition=lstone.body.position 
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) 
	if(distance<=lmango.r+lstone.r) { 
		Matter.Body.setStatic(lmango.body,false);
	 }

}
function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.setPosition(prot.body,{x:400, y:285})
	Matter.Body.setAngle(prot.body, PI/2)
}
}



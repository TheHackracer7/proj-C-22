var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	
	
	
	
		options={isStatic:true, restitution: 1}
		
	

	
	
	

	
	

	packageSprite=createSprite(width/2,600, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2,200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, 680, width,10);
	groundSprite.shapeColor="brown";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,options);
	World.add(world, packageBody);
	


	ground = Bodies.rectangle(width/2, 665, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	


	 
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  Engine.update(engine);


  if(keyDown("DOWN_ARROW"))
  {
  
  


 Body.setStatic(packageBody,false);


  
  
  }

  
  drawSprites();
 
}




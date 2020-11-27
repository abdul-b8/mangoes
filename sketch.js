
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, boyIMG;
var stoneObj, tree;
var mango1

function preload()
{
 boyIMG = loadImage("Plucking mangoes/boy.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(250,450,15,15);
	boy.addImage(boyIMG);


	//Create the Bodies Here.

	ground = new Ground(400,680,width,20);

	stoneObj = new Stone(235,420,30);
	
	tree = new Tree (650,640,30,35);
	mango1 = new Mango (620,320,30);
	mango2 = new Mango (610,330,30);
	mango3 = new Mango (600,310,30);
	mango4 = new Mango (640,340,30);
	mango5 = new Mango (650,300,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  boy.display();
  tree.display();
  stoneObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  drawSprites();
 
}

function detectCollision() {
  if (stoneObj.isTouching(mango1 || mango2 || mango3 || mango4 || mango5 )){

	if (stoneObj.isTouching(mango1)){
      mango1.isStatic;false
   }

    if (stoneObj.isTouching(mango2)){
	  mango2.isStatic;false
   }

   if (stoneObj.isTouching(mango3)){
	  mango3.isStatic;false
   }

   if (stoneObj.isTouching(mango4)){
	  mango4.isStatic;false
   }

   if (stoneObj.isTouching(mango5)){
	  mango5.isStatic;false
       }


 }

}

function mouseDragged(){

	Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY})
	
}
	
	function mouseReleased(){
	
	  slingshot.fly();  
	
	}
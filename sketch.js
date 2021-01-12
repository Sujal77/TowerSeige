const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1,stand2,ground;
var block1,block2,block3,block4,block5,block6,block7,block8;
var block9,block10,block11,block12,block13,block14,block15,block16;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var hexImg;
var ball, bgImg;
var slings;
var score=0;
var bg = "bg1.png";
function preload(){
    getBackgroundImg();
    hexaImg=loadImage("polygon.png")
    

}

function setup(){
    createCanvas(1000,600)


    engine= Engine.create()
    world = engine.world;
    Engine.run(engine)
   
   

    ground = new Ground()


    stand1 = new Stand(300,500,300,15)
    stand2 = new Stand(700,370,250,15)
//level1

    block1 = new Box(300,473,30,40)
    block2 = new Box(330,473,30,40)
    block3 = new Box(360,473,30,40)
    block4 = new Box(390,473,30,40)
    block5 = new Box(270,473,30,40)
    block6 = new Box(240,473,30,40)
    block7 = new Box(210,473,30,40)
    // level2
   
    block8 = new Box(300,433,30,40)
    block9 = new Box(330,433,30,40)
    block10 = new Box(360,433,30,40)
    block11 = new Box(270,433,30,40)
    block12 = new Box(240,433,30,40)
    //level3
    
    block13 = new Box(300,393,30,40)
    block14 = new Box(330,393,30,40)
    block15 = new Box(270,393,30,40)
    //top
  
    block16 = new Box(300,353,30,40)
    // 2nd structure
    //level1
  
    box1 = new Box(700,343,30,40)
    box2 = new Box(730,343,30,40)
    box3 = new Box(760,343,30,40)
    box4 = new Box(670,343,30,40)
    box5 = new Box(640,343,30,40)
    //level2
   
    box6 = new Box(700,303,30,40)
    box7 = new Box(730,303,30,40)
    box8 = new Box(670,303,30,40)
    //top
   
    box9 = new Box(700,263,30,40)
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    ground = new Ground(500,550,1000,20)
    slings = new Slingshot(this.ball,{x:100,y:200})

    
    
}

function draw(){
   
    if(bgImg){
    background(bgImg);
    }
    noStroke();
    textSize(35)
    fill("white")
    text("Score  " + score, width-300, 50)

   
    textSize(20);
    
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
    textSize(10);
    text("Press Space to get a second Chance to Play!!",650 ,150);
    stand1.display()
    stand2.display()
    fill("yellow")
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    fill("pink")
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    fill("skyblue")
    block13.display()
    
    block14.display()
    block15.display()
    fill("red")
    block16.display()
    fill("red")
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    fill("blue")
    box6.display()
    box7.display()
    box8.display()
    fill("green")
    box9.display()
    imageMode(CENTER)
    image(hexaImg ,ball.position.x,ball.position.y,40,40);
    ground.display()
    slings.display()

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
   
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();

   
  
    

}
function keyPressed(){
    if(keyCode===32){
        slings.attach(this.ball);

    }
}
function mouseDragged(){
  
   Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY} );

}
function mouseReleased(){
    slings.fly();
}
async function getBackgroundImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJson = await response.json();
    console.log(responseJson)
    var datetime = responseJson.datetime;
    var hour = datetime.slice(11,13)

    if(hour>=6 && hour<=18){
        bg = "bg1.png"

    }
    else{
        bg = "bg2.jpg"

    }
    bgImg = loadImage(bg)
    console.log(bgImg)


}



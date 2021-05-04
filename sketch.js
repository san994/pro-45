const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const SAT = Matter.SAT

var engine,world;

var gameState = "story"

var p = []

var particles = []

function preload(){
  
}
function setup() {
  createCanvas(1000, 600);
  engine = Engine.create()
   world = engine.world

  
   ground = new Ground(500,500,150,10);

    player1 = new Player(550,450,30,30);
    player2 = new Player(460,450,30,30);

  //leftside of ground
     platform1 = new Platform(350,450,100,20);
 
  //rightside of ground
    platform2 = new Platform(650,450,100,20);

  //middle of ground
    platform3 = new Platform(500,350,20,250);
 
  //leftside of middle platform
   platform4 = new Platform(400,350,100,20)
 
  //rightside of middle platform
   platform5 = new Platform(600,350,100,20)

   //leftside and middle of two platform
   platform6 = new Platform(250,400,100,20)

   //rightside and middle of two platform
   platform7 = new Platform(750,400,100,20)
 
   //above the rightside and middle of two platform
   platform8 = new Platform(750,300,100,20)

   //above the leftside and middle of two platform
   platform9 = new Platform(250,300,100,20)
 
   // leftside near mainPlatform
   platform10 = new Platform(400,250,100,20)

   // rightside near mainPlatform
   platform11 = new Platform(600,250,100,20)

  // for next level
  platform12 = new Platform(50,100,20,250)

  //for next level
  platform13 = new Platform(50,100,100,20)

  //for next level
  platform14 = new Platform(50,100,100,20)
 
    mainPlatform = new Platform(500,200,150,20)


     keyPressed()

   

}

function draw() {
  background("lightBlue");
 
  Engine.update(engine);

  if(gameState === "story"){

    textSize(20)
    fill("blue")
    text(" BECAUSE OF OUR FAULT BECAUSE OF POLLUTION THE WORLD IS GOING TO END ",100,50)
    text(" ME AND MY SISTER GOT STUCK IN THE EASTERN SIDE OF CITY ",100,100)
    text(" WE GOT THE MESSAGE THAT ALL SURVIVORS ARE GOING TO ANOTHER PLANET",100,150)
    text(" ALL FLOATING PLATFORMS ARE DAMEGED THATS WHY ONLY ONE PERSON CAN STAND ON ONE PLATFORM",100,200)
    text(" THIS IS OUR FINAL CHANCE OF ESCAPE",100,250)

    button = createButton(" START THE GAME ")

    button.position(250,600)

    button.style("height","50px")

    button.style("width","500px")

    button.style("background","pink")

    button.mousePressed(()=>{

      button1 = createButton(" PLAYING ")
      button1.position(250,600)
      button1.style("height","50px")

      button1.style("width","500px")
  
      button1.style("background","pink")

     gameState = "level1"

    })


  }else if(gameState === "level1"){

  mainPlatform.display()
  mainPlatform.colour = "brown"

  ground.display()
  player1.display()
  player1.colour = "blue"
  player2.display()
  player2.colour = "pink"

   platform1.display()
   platform2.display()
   platform3.display()
   platform4.display()
   platform5.display()
   platform6.display()
   platform7.display()
   platform8.display()
   platform9.display()
   platform10.display()
   platform11.display()
  
  platformCollider()

  }
  
  if(gameState === "level2"){

    setPosition(ground,500,500)
    setPosition(mainPlatform,500,200)
   
    //leftside of ground
    setPosition(platform1,350,500)

    //rightside of ground
    setPosition(platform2,650,500)

    //above ths leftside platform of ground
    setPosition(platform5,400,440)

   //above ths rightside platform of ground
    setPosition(platform4,600,440)

   // above the rigthside platforms
    setPosition(platform3,690,350)

  // above the leftside platforms
    setPosition(platform12,300,350)

  //near rightside of right platform
    setPosition(platform6,750,400)

 //near leftside of left platform
    setPosition(platform7,250,400)

  //above the left patform
    setPosition(platform8,250,300)

  //above the right patform
    setPosition(platform9,750,300)

  //between the left platforms
    setPosition(platform10,100,350)

  //between the rigth platforms
    setPosition(platform11,900,350)

  // leftside near mainplatform 
    setPosition(platform13,370,250)

  // rightside near mainplatform 
    setPosition(platform14,620,250)

 

     ground.display()
    mainPlatform.display()

     player1.display()
     player2.display()

     platform1.display()
     platform2.display()
     platform3.display()
     platform4.display()
     platform5.display()
     platform6.display()
     platform7.display()
     platform8.display()
     platform9.display()
     platform10.display()
     platform11.display()
     platform12.display()
     platform13.display()
     platform14.display()

     

     p.push(platform12,platform13,platform14)

    
      platformCollider()

  }

  if(gameState ==="level3"){

    background("black")

     fill("pink")
     textSize(50)
     text("ING SOON",440,300)
     fill("blue")
     text("UPDATE COM",100,300)
  }

} 

function setPosition(body1,x,y){

Matter.Body.setPosition(body1.body,{x:x,y:y})

}

function keyPressed(){


     if(keyCode === 68){
 
       Matter.Body.applyForce(player1.body,player1.body.position,{x:7,y:-7})

     }


    if(keyCode === 65){

      Matter.Body.applyForce(player1.body,player1.body.position,{x:-7,y:-7})

    }


    if(keyCode === 74){

      Matter.Body.applyForce(player2.body,player2.body.position,{x:-7,y:-7})

    }

  

    if(keyCode === 76){

      Matter.Body.applyForce(player2.body,player2.body.position,{x:7,y:-7})

    }


}

function isTouching(object1,object2){

  if((object1.body.position.x-object2.body.position.x) <= (object2.width/2 + object1.width/2)
  &&(object2.body.position.x-object1.body.position.x) <= (object2.width/2 + object1.width/2)
  &&(object1.body.position.y-object2.body.position.y) <= (object2.height/2 + object1.height/2)
  &&(object2.body.position.y-object1.body.position.y) <= (object2.height/2 + object1.height/2)){
 
    return true
 
  }else{
 
    return false
 
  }
 
 }

 function platformCollider(){

  p.push(platform1,platform2,platform3,platform4,platform5,platform6,platform7,platform8,platform9,platform10,platform11)
   
  for(var pf = 0;pf<p.length;pf++){

  if(p[pf].colour === "blue" && isTouching(player2,p[pf])){
  
    World.remove(world,p[pf].body)
  
  }else if(p[pf].colour === "red" && isTouching(player2,p[pf])){
  
    p[pf].colour = "pink"
   
  
  }else if(p[pf].colour === "pink" && isTouching(player2,p[pf]) && World.remove(world,p[pf].body) ){

    World.add(world,p[pf].body)

   }
  
  if(p[pf].colour === "pink" && isTouching(player1,p[pf])){
  
   World.remove(world,p[pf].body)
  
  }else if(p[pf].colour === "red" && isTouching(player1,p[pf])){
  
    p[pf].colour = "blue"
     
     
  }else if(p[pf].colour === "blue" && isTouching(player1,p[pf]) &&  World.remove(world,p[pf].body) ){

    World.add(world,p[pf].body)

   }

  

   if(mainPlatform.colour === "brown" && isTouching(player2,mainPlatform) && isTouching(player1,mainPlatform)){
  
    mainPlatform.colour = "green"

    gameState = "level2"

    if(gameState === "level2"){

       setPosition(player1,480,450)
       setPosition(player2,550,450)

    for(var pcolour = 0;pcolour<p.length;pcolour++){

       p[pcolour].colour = "red"

    }
  }
   }
  
    if(mainPlatform.colour === "green" && isTouching(player2,mainPlatform) && isTouching(player1,mainPlatform)){
  
      gameState = "level3"
  
     

  }


   
  
  }
 
  }


 
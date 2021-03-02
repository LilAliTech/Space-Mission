var backgroundImg, Background;
var planeImg, plane1;
var gameState = "Play";
var UFOImg,UFO, UFOGroup1, UFOGroup2, UFOGroup3;
var MoneyImg, Money, Money1Group, Money2Group, Money3Group;
var RlauncherImg, Rlauncher, RlauncherGroup,temp;
var heartImage,heart1,heart2,heart3;
var gameoverImg, gameover;
var restartImg, restart;
var score = 0;
var countUFO = 1;
var count=4;
var countcoin = 1;


function preload(){
backgroundImg = loadImage("Background.jpg");
planeImg = loadImage("Army plane2.png");
UFOImg = loadImage("UFO.png");
MoneyImg = loadImage("Money.png");
RlauncherImg = loadImage("Rlauncher.png");
heartImage = loadImage("Heart.png")
MoneyImg = loadImage("Money.png");
gameoverImg = loadImage("gameOver.png");
restartImg = loadImage("restart.png");
}

function setup() {
 createCanvas(600,500);
 Background = createSprite(100,200,10,10);
 Background.addImage(backgroundImg);
 Background.scale=0.8;


 plane1 = createSprite(100,200,10,10);
 plane1.addImage(planeImg);
 plane1.scale = 0.1;

 UFOGroup1=createGroup();
 UFOGroup2=createGroup();
 UFOGroup3=createGroup();

 heart1 = createSprite(40,50,20,50);
 heart1.addImage(heartImage);
 heart1.scale=0.1;
 heart1.depth=plane1.depth-1;
 
 heart2 = createSprite(65,50,20,50);
 heart2.addImage(heartImage);
 heart2.scale=0.1;
 heart2.depth=plane1.depth-1;
 
 heart3 = createSprite(90,50,20,50);
 heart3.addImage(heartImage);
 heart3.scale=0.1;
 heart3.depth=plane1.depth-1;

 gameover = createSprite(250,200,10,10);
 gameover.addImage(gameoverImg);
 gameover.scale=0.3;
   
 restart = createSprite(250,300,10,10);
 restart.addImage(restartImg);
 restart.scale=0.4;
 
 RlauncherGroup=createGroup();
 Money1Group=createGroup();
 Money2Group=createGroup();
 Money3Group=createGroup();
}

function draw() {
    background (180);
    Background.velocityX = -2;
    if(gameState==="Play")
    {
      gameover.visible=false;
      restart.visible=false;
      spawnUFO();
      spawnMoney();
     plane1.setCollider("rectangle", 0,10,145,130);

     if(keyDown("up")&&plane1.y>30){
        plane1.y = plane1.y - 8;
      }


      if(keyDown("up")&&plane1.y>40){
        plane1.y = plane1.y - 8;
     }
     if(keyDown("down")&&plane1.y<450){
        plane1.y = plane1.y + 8;
     }

     if(keyWentDown("space")){
      temp=Rlauncher2(); 
     }

      if(RlauncherGroup.isTouching(UFOGroup1)){
        RlauncherGroup.destroyEach();
        UFOGroup1.destroyEach();
        score=score+1;   
      }
      if(RlauncherGroup.isTouching(UFOGroup2)){
        RlauncherGroup.destroyEach();
        UFOGroup2.destroyEach();
        score=score+1;   
      }
      if(RlauncherGroup.isTouching(UFOGroup3)){
        RlauncherGroup.destroyEach();
        UFOGroup3.destroyEach();
        score=score+1;   
      }

      if(plane1.isTouching(Money1Group)){
        Money1Group.destroyEach();
        score=score+1;   
      }
      if(plane1.isTouching(Money2Group)){
        Money2Group.destroyEach();
        score=score+1;   
      }
      if(plane1.isTouching(Money3Group)){
        Money3Group.destroyEach();
        score=score+1;   
      }
      if(plane1.isTouching(UFOGroup1)){
        UFOGroup1.destroyEach();
        count=count-1;
        if(count===3)
        {
            heart3.visible=false;
        }
        if(count===2)
        {
            heart2.visible=false;
        }
        if(count===1)
        {
            heart1.visible=false;
            gameState="End"
        }
      }
      if(plane1.isTouching(UFOGroup2)){
        UFOGroup2.destroyEach();
        count=count-1;
        if(count===3)
        {
            heart3.visible=false;
        }
        if(count===2)
        {
            heart2.visible=false;
        }
        if(count===1)
        {
            heart1.visible=false;
            gameState="End"
        }
      }  
      if(plane1.isTouching(UFOGroup3)){
        UFOGroup3.destroyEach();
        count=count-1;
        if(count===3)
        {
            heart3.visible=false;
        }
        if(count===2)
        {
            heart2.visible=false;
        }
        if(count===1)
        {
            heart1.visible=false;
            gameState="End"
        }
    }
    }

if(Background.x<0){
  Background.x=Background.width/3;
}
    drawSprites();
    fill("Green");
    textSize(18);
    stroke("White");
    text("Money$$: "+score,400,30)

    
    if(gameState==="End"){
      UFO.velocityX=0;
      plane1.visible=false;
      Background.velocityX=0;
      gameover.visible=true;
      restart.visible=true;
      Money1Group.destroyEach();
      Money2Group.destroyEach();
      Money3Group.destroyEach();
      RlauncherGroup.destroyEach();
      UFOGroup1.destroyEach();
      UFOGroup2.destroyEach();
      UFOGroup3.destroyEach();
    }

    if(mousePressedOver(restart)&&gameState==="End"){
      reset1();
    }
         }

           function Rlauncher2(){
            Rlauncher = createSprite(90,200,10,10);
            Rlauncher.addImage(RlauncherImg);
            Rlauncher.scale=0.050000000000000000;
            Rlauncher.y=plane1.y+5;
            Rlauncher.velocityX=10;
            Rlauncher.lifetime=50;
            RlauncherGroup.add(Rlauncher);
          }


        function spawnUFO(){
          if(frameCount%60===0){
            UFO = createSprite(470,Math.round(random(40,380))) 
            UFO.addImage(UFOImg);
            UFO.scale=0.1;
            UFO.velocityX=-(3+(score/4))
            UFO.lifetime=166.66;
            if(countUFO===1)
            {
              countUFO=countUFO+1;
              UFOGroup1.add(UFO);
            }
            else if(countUFO===2)
            {
              countUFO=countUFO+1;
              UFOGroup2.add(UFO);
            }
            else
            {
               UFOGroup3.add(UFO);
               countUFO=1;
            }
         
         }
        }

        function spawnMoney(){
          if(frameCount%60===0){
            Money=createSprite(470,Math.round(random(30,370)))
            Money.addImage(MoneyImg);
            Money.scale=0.01;
            Money.velocityX=-4;
            Money.lifetime=250;
            
            if(countcoin===1)
             {
               countcoin=countcoin+1;
               Money1Group.add(Money);
             }
             else if(countcoin===2)
             {
               countcoin=countcoin+1;
               Money2Group.add(Money);
             }
             else
             {
                Money3Group.add(Money);
                countcoin=1;
             }
          }
        }

           function reset1(){ 
             gameState="play"
             score=0;
             gameover.visible=false;
             restart.visible=false;
             plane1.visible=true;
             plane1.y=200;
             heart1.visible=true;
             heart2.visible=true;
             heart3.visible=true;
             count=4;
             }
       
          
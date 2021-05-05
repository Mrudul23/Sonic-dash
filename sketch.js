var Sonic, SonicImg, SonicHappy, SonicAni, screen, invisibleGround;
var bomb1,bombImg1;
var OrangebombGroup;
var life1, life2, life3, lifeImg;
var lives = 3;
var score = 0;
var coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, coin11, coin12, coin13, coin14, 
coin15, coinImg;

// mush means mushroom
var mush1, mush2, mush3, mush4, mush5, mush6, mush7, mush8, mush9, mush10, mush11, mush12, mush13, mush14,
mushImg, mushroomGroup;



var gameState;
gameState="PLAY";

function preload() {  
    screen=loadImage("images/image.jpg");
    bombImg1=loadImage("images/bomb.png");
    lifeImg=loadImage("images/life.png");
    coinImg=loadImage("images/coin.png");
    SonicAni=loadAnimation("images/Sonic (1).png","images/Sonic (2).png","images/Sonic (3).png","images/Sonic (4).png","images/Sonic (5).png","images/Sonic (6).png","images/Sonic (7).png","images/Sonic (8).png");
    mushImg=loadImage("images/mushroom.jpg");
    cupImage = loadImage("images/cup.png")
    logo = loadImage("images/Sonic.png")
    inst = loadImage("images/inst.png")
}
function setup() {
    canvas = createCanvas(windowWidth-20,windowHeight-20);

    Sonic=createSprite(120,700);
    Sonic.addAnimation("running",SonicAni);
    Sonic.scale=0.6;
    Sonic.frameDelay = 3

    invisibleGround=createSprite(2500,800,6000,20);
    invisibleGround.visible=false;    

    OrangebombGroup=createGroup();
    GreenbombGroup=createGroup();
    mushroomGroup=createGroup();

    life1=createSprite(1000,random(500,680));
    life1.addImage(lifeImg);
    life1.scale=0.5;

    life2=createSprite(random(2500,3000),random(500,600));
    life2.addImage(lifeImg);
    life2.scale=0.5;

    life3=createSprite(random(4000,4500),random(480,510));
    life3.addImage(lifeImg);
    life3.scale=0.5;

    coin1=createSprite(random(400,500),random(500,600));
    coin1.addImage(coinImg);
    coin1.scale=0.4;
    coin2=createSprite(random(650,800),random(400,500));
    coin2.addImage(coinImg);
    coin2.scale=0.4;
    coin3=createSprite(random(1000,1500),random(500,600));
    coin3.addImage(coinImg);
    coin3.scale=0.4;
    coin4=createSprite(random(1600,2100),random(480,550));
    coin4.addImage(coinImg);
    coin4.scale=0.4;
    coin5=createSprite(random(2500,3000),random(450,500));
    coin5.addImage(coinImg);
    coin5.scale=0.4;
    coin6=createSprite(random(3100,3400),random(500,550));
    coin6.addImage(coinImg);
    coin6.scale=0.4;
    coin7=createSprite(random(3500,4000),random(500,600));
    coin7.addImage(coinImg);
    coin7.scale=0.4;
    coin8=createSprite(random(4100,4500),random(400,450));
    coin8.addImage(coinImg);
    coin8.scale=0.4;
    coin9=createSprite(random(4600,5000),random(500,600));
    coin9.addImage(coinImg);
    coin9.scale=0.4;
    coin10=createSprite(random(5000,5300),random(530,630));
    coin10.addImage(coinImg);
    coin10.scale=0.4;
    coin11=createSprite(random(1000,5100),random(400,430));
    coin11.addImage(coinImg);
    coin11.scale=0.4;
    coin12=createSprite(random(2300,3300),random(530,630));
    coin12.addImage(coinImg);
    coin12.scale=0.4;
    coin13=createSprite(random(4500,5000),random(450,550));
    coin13.addImage(coinImg);
    coin13.scale=0.4;
    coin14=createSprite(random(3100,3400),random(500,600));
    coin14.addImage(coinImg);
    coin14.scale=0.4;
    coin15=createSprite(random(2000,5000),random(490,590));
    coin15.addImage(coinImg);
    coin15.scale=0.4;

    mush1=createSprite(random(1000,1500),730);
    mush1.addImage(mushImg);
    mush1.scale = 0.3
    mush2=createSprite(random(1500,2000),730);
    mush2.addImage(mushImg);
    mush2.scale = 0.3
    mush4=createSprite(random(2600,3000),730);
    mush4.addImage(mushImg);
    mush4.scale = 0.3
    mush5=createSprite(random(3100,3500),730);
    mush5.addImage(mushImg);
    mush5.scale = 0.3
    mush6=createSprite(random(3600,4000),730);
    mush6.addImage(mushImg);
    mush6.scale = 0.3
    mush7=createSprite(random(4100,4500),730);
    mush7.addImage(mushImg);
    mush7.scale = 0.3
    mush9=createSprite(random(1000,5200),730);
    mush9.addImage(mushImg);
    mush9.scale = 0.3
    mush10=createSprite(random(3500,4500),730);
    mush10.addImage(mushImg);
    mush10.scale = 0.3
    mush12=createSprite(5150,730);
    mush12.addImage(mushImg);
    mush12.scale = 0.3
    mush14=createSprite(random(5100,5150),730);
    mush14.addImage(mushImg);
    mush14.scale = 0.3

    mushroomGroup.add(mush1);
    mushroomGroup.add(mush2);
    mushroomGroup.add(mush4);
    mushroomGroup.add(mush5);
    mushroomGroup.add(mush6);
    mushroomGroup.add(mush7);
    mushroomGroup.add(mush9);
    mushroomGroup.add(mush10);
    mushroomGroup.add(mush12);
    mushroomGroup.add(mush14);

    cup = createSprite(5600,600)
    cup.addImage(cupImage)

    logosprite = createSprite(-300,300)
    logosprite.addImage(logo)

    instr = createSprite(-250,650)
    instr.addImage(inst)
    instr.scale=0.8
}
function draw() {
    background("skyblue");
    image(screen,-620,120,7200,800);

  if (gameState==="PLAY") {
    Sonic.visible=true;
    if (keyDown(RIGHT_ARROW)) {
        Sonic.x=Sonic.x+10;
    }
    Sonic.velocityY=Sonic.velocityY+1;
    Sonic.collide(invisibleGround);

    if (Sonic.y>729) {
       if (keyDown(32)) {
        Sonic.velocityY=-30;
       }
    }
    if (Sonic.isTouching(life1)) {
        life1.destroy();
        lives++;
    } else if (Sonic.isTouching(life2)) {
        life2.destroy();
        lives++;
    } else if (Sonic.isTouching(life3)) {
        life3.destroy();
        lives++;
    }
    if (Sonic.isTouching(coin1)) {coin1.destroy(); score+=10;}
    if (Sonic.isTouching(coin2)) {coin2.destroy(); score+=10;}
    if (Sonic.isTouching(coin3)) {coin3.destroy(); score+=10;}
    if (Sonic.isTouching(coin4)) {coin4.destroy(); score+=10;}
    if (Sonic.isTouching(coin5)) {coin5.destroy(); score+=10;}
    if (Sonic.isTouching(coin6)) {coin6.destroy(); score+=10;}
    if (Sonic.isTouching(coin7)) {coin7.destroy(); score+=10;}
    if (Sonic.isTouching(coin8)) {coin8.destroy(); score+=10;}
    if (Sonic.isTouching(coin9)) {coin9.destroy(); score+=10;}
    if (Sonic.isTouching(coin10)) {coin10.destroy(); score+=10;}
    if (Sonic.isTouching(coin11)) {coin11.destroy(); score+=10;}
    if (Sonic.isTouching(coin12)) {coin12.destroy(); score+=10;}
    if (Sonic.isTouching(coin13)) {coin13.destroy(); score+=10;}
    if (Sonic.isTouching(coin14)) {coin14.destroy(); score+=10;}
    if (Sonic.isTouching(coin15)) {coin15.destroy(); score+=10;}

    if (Sonic.isTouching(mush1)) {mush1.destroy(); lives--;}
    if (Sonic.isTouching(mush2)) {mush2.destroy(); lives--;}
    if (Sonic.isTouching(mush4)) {mush4.destroy(); lives--;}
    if (Sonic.isTouching(mush5)) {mush5.destroy(); lives--;}
    if (Sonic.isTouching(mush6)) {mush6.destroy(); lives--;}
    if (Sonic.isTouching(mush7)) {mush7.destroy(); lives--;}
    if (Sonic.isTouching(mush9)) {mush9.destroy(); lives--;}
    if (Sonic.isTouching(mush10)) {mush10.destroy(); lives--;}
    if (Sonic.isTouching(mush12)) {mush12.destroy(); lives--;}
    if (Sonic.isTouching(mush14)) {mush14.destroy(); lives--;}

    bombs();

    if (OrangebombGroup.isTouching(Sonic)) {
        OrangebombGroup.destroyEach();
        lives--;
    }
    if (lives===0) {
        gameState="LOST";
    }

    if(Sonic.x > 730){
    strokeWeight(3)
    textFont("Times New Roman");
    fill("red");
    stroke("red")
    textSize(40);
    text("Lives: "+lives,Sonic.x-650,250);
    fill(0);
    stroke(0)
    text("Coins collected: "+score/10,Sonic.x-500,250);
    fill(0);
    }
    
    
    camera.position.x=Sonic.x+100;
    camera.position.y=displayHeight-305;

    if (Sonic.x>=5600) {
        gameState="WIN";
    }
  }
  if (gameState==="WIN") {
        OrangebombGroup.setVelocityYEach(0);
        GreenbombGroup.setVelocityYEach(0);
        OrangebombGroup.setLifetimeEach(-1);
        GreenbombGroup.setLifetimeEach(-1);
        mushroomGroup.setVelocityXEach(0);
        Sonic.visible=false;
        
        textFont("Comic Sans MS");
        textSize(70);
        fill(0);
        text("VICTORY!!!",5490,280);
  }
  if (gameState==="LOST") {
      textFont("Comic Sans MS");
      textSize(70);
      fill(0);
      text("YOU DIED.",Sonic.x-100,300);
      Sonic.visible=false;
      Sonic.velocityY=0;
      Sonic.velocityX=0;
      OrangebombGroup.setVelocityYEach(0);
      GreenbombGroup.setVelocityYEach(0);
      OrangebombGroup.setLifetimeEach(-1);
      GreenbombGroup.setLifetimeEach(-1);
      mushroomGroup.setVelocityXEach(0);
  }
    drawSprites();
    
}
function bombs() {
    if (frameCount%40===0) {
            bomb1=createSprite(random(80,5000),100);
            bomb1.addImage(bombImg1);
            bomb1.velocityY=3;
            bomb1.scale=0.2;
            bomb1.lifetime=200;
            OrangebombGroup.add(bomb1);
        }      
}

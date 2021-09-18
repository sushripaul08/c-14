var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;

var ob1 , ob2 , ob3, ob4, ob5, ob6;
var obstacle, ran;

var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 ob1= loadImage("obstacle1.png");
 ob2= loadImage("obstacle2.png");
 ob3= loadImage("obstacle3.png");
 ob4= loadImage("obstacle4.png");
 ob5= loadImage("obstacle5.png");
 ob6= loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnObstacle();
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}

function spawnObstacle(){

if (frameCount % 90===0){
Obstacle = createSprite(600,180,10,50)
Obstacle.velocityX=-3;
obstacle.lifetime= 200;

 var ran= Math.round(random(1,6))

switch(ran){
  case 1: Obstacle.addImage(ob1);
  break;
  case 2: Obstacle.addImage(ob2);
break;
case 3: Obstacle.addImage(ob3);
break;
case 4: Obstacle.addImage(ob4);
break;
case 5: Obstacle.addImage(ob5);
break;
case 6: Obstacle.addImage(ob6);
break;
 default: break;

}



}
}

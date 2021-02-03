const Engine     = Matter.Engine;
const World      = Matter.World;
const Bodies     = Matter.Bodies;
const Body       = Matter.Body;
const Constraint = Matter.Constraint;

var drop,engine,world,boy,thun,rand;

function preload(){
 boyb= loadImage("walking_1.png");
 thun1= loadImage("1.png");
 thun2= loadImage("2.png");
 thun3= loadImage("3.png");
 thun4= loadImage("4.png");
}

function setup(){
  createCanvas(500,650); 
  engine = Engine.create();
  world  = engine.world;
  
  drop1= new Drop(20,20,12);
  drop2= new Drop(50,30,12);
  drop3= new Drop(80,10,12);
  drop4= new Drop(110,30,12);
  drop5= new Drop(130,50,12);
  drop6= new Drop(160,30,12);
  drop7= new Drop(190,80,12);
  drop8= new Drop(220,30,12);
  drop9= new Drop(250,50,12);
  drop10= new Drop(280,30,12);
  drop11= new Drop(320,60,12);
  drop12= new Drop(350,90,12);
  drop13= new Drop(380,10,12);
  drop14= new Drop(410,40,12);
  drop15= new Drop(440,70,12);
  drop16= new Drop(470,20,12);
  drop17= new Drop(500,50,12);
  drop18= new Drop(530,10,12);
  drop19= new Drop(570,90,12);
  drop20= new Drop(600,10,12);
  drop21= new Drop(630,100,12);
  drop22= new Drop(470,120,12);
  drop23= new Drop(470,20,12);
  drop24= new Drop(470,20,12);
  drop25= new Drop(470,20,12);
  drop26= new Drop(470,20,12);
  drop27= new Drop(470,20,12);
  drop28= new Drop(470,20,12);
  drop29= new Drop(470,20,12);
  drop30= new Drop(470,20,12);
  drop31= new Drop(470,20,12);
  drop32= new Drop(470,20,12);

  var boy=createSprite(250,475,40,100);
  boy.addImage(boyb);
  boy.scale=0.5;
}

function draw(){
  background(0);
  
  drop1.showDrop();  drop2.showDrop();  drop3.showDrop();  drop4.showDrop();
  drop5.showDrop();  drop6.showDrop();  drop7.showDrop();  drop8.showDrop();
  drop9.showDrop();  drop10.showDrop();  drop11.showDrop();  drop12.showDrop();
  drop13.showDrop();  drop14.showDrop();  drop15.showDrop();  drop16.showDrop();  
  drop17.showDrop();  drop18.showDrop();  drop19.showDrop();  drop20.showDrop();
  drop21.showDrop();  drop22.showDrop();  drop23.showDrop();  drop24.showDrop();
  drop25.showDrop();  drop26.showDrop();  drop27.showDrop();  drop28.showDrop();
  drop29.showDrop();  drop30.showDrop();  drop31.showDrop();  drop32.showDrop();

  rain();
  thunder();
  drawSprites();
}   

function thunder(){
rand= Math.round(random(1,4));
if(frameCount %200 ===0){
  thun=createSprite(random(10,370), random(10,30),10,10);
  
  switch(rand){
  case 1: thun.addImage(thun1);
  break;
  case 2:thun.addImage(thun2);
  break;
  case 3: thun.addImage(thun3);
  break;
  case 4: thun.addImage(thun4);
  break;
  default: break;
  }
  thun.scale= random(0.3,0.6);
  thun.lifeTime=0.1;
  thun.lifetime=8;
}
}

function rain(){
  if(frameCount % 1 === 0 && frameCount % 2 === 0){
drop1= new Drop(random(10,460),random(10,600),12);
drop3= new Drop(random(10,460),random(10,600),12);
drop4= new Drop(random(10,460),random(10,600),12);
drop5= new Drop(random(10,460),random(10,600),12);
drop6= new Drop(random(10,460),random(10,600),12);
drop2= new Drop(random(10,460),random(10,600),12);
drop7= new Drop(random(10,460),random(10,600),12);
drop8= new Drop(random(10,460),random(10,600),12);
drop9= new Drop(random(10,460),random(10,600),12);
drop10= new Drop(random(10,460),random(10,600),12);
drop11= new Drop(random(10,460),random(10,600),12);
drop12= new Drop(random(10,460),random(10,600),12);
drop13= new Drop(random(10,460),random(10,600),12);
drop14= new Drop(random(10,460),random(10,600),12);
drop15= new Drop(random(10,460),random(10,600),12);
drop16= new Drop(random(10,460),random(10,600),12);
drop17= new Drop(random(10,460),random(10,600),12);
drop18= new Drop(random(10,460),random(10,600),12);
drop19= new Drop(random(10,460),random(10,600),12);
drop20= new Drop(random(10,460),random(10,600),12);
drop21= new Drop(random(10,460),random(10,600),12);
drop22= new Drop(random(10,460),random(10,600),12);
drop30= new Drop(random(10,460),random(10,600),12);
drop23= new Drop(random(10,460),random(10,600),12);
drop24= new Drop(random(10,460),random(10,600),12);
drop25= new Drop(random(10,460),random(10,600),12);
drop26= new Drop(random(10,460),random(10,600),12);
drop27= new Drop(random(10,460),random(10,600),12);
drop28= new Drop(random(10,460),random(10,600),12);
drop29= new Drop(random(10,460),random(10,600),12);
drop31= new Drop(random(10,460),random(10,600),12);
drop32= new Drop(random(10,460),random(10,600),12);
  }
}
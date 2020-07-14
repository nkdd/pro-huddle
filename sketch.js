var ground,human,human1;
var x,position,positionX,positionY;
var database,canvas;
var lii,form;
var human2;

function setup(){
    form = new Form();
    canvas = createCanvas(800,500);
    database = firebase.database();
    human = createSprite(30,250,10,80);
    huddle = createSprite(80,280,20,40);
    huddle.shapeColor = "red";  
    huddle2 = createSprite(240,280,20,40);
    huddle2.shapeColor = "red";
    huddle4 = createSprite(400,280,20,40);
    huddle4.shapeColor = "red";
    huddle6 = createSprite(560,280,20,40);
    huddle6.shapeColor = "red";
    human.shapeColor = "blue";
    ground = createSprite(400,300,800,1);
    ground.shapeColor = "brown";
    lii = createSprite(780,250,100,100);
    lii.shapeColor = "white";
}

function draw(){
    background("white");
    text("end",700,250);
    textSize(30);

    form.display();
 
    if(human.isTouching(ground)){
        human.collide(ground);
    }
    if(human.isTouching(huddle2)){
        human.x = 30;
        human.y = 250;
        human.velocityX=0;
        human.velocityY=0;
    }
 
    if(human.isTouching(huddle)){
        human.x = 30;
        human.y = 250;
        human.velocityX=0;
        human.velocityY=0;
    }
 
    if(human.isTouching(huddle4)){
        human.x = 30;
        human.y = 250;
        human.velocityX=0;
        human.velocityY=0;
    }

    if(human.isTouching(huddle6)){
        human.x = 30;
        human.y = 250;
        human.velocityX=0;
        human.velocityY=0;
    }
 
    if(human.collide(huddle)){
        human.positionX = 30;
        human.positionY = 250;
    }

    if(human.collide(huddle2)){
        human.positionX = 30;
        human.positionY = 250;
    }

    if(human.collide(huddle4)){
        human.positionX = 30;
        human.positionY = 250;
    }

    if(human.collide(huddle6)){
        human.positionX = 30;
        human.positionY = 250;
    }

    if(human.isTouching(lii)){
        text("YOU WIN",400,400);
    }

      if(keyDown("space") && human.y>=20){
        jump();
    }
   
    if(keyDown("DOWN_ARROW") && human.y>=20){
        down();
    }
  
    drawSprites();   
}

function jump(){
    human.velocityX = 2;
    human.velocityY = -2;
 }

function down(){
    human.velocityY = +2;
    human.positionX = -2
}
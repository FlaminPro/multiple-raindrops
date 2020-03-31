var rain;

function setup() {
  var canvas = createCanvas(400,400);
}

function draw() {
  background(255);  
  if(frameCount%10===0){
    rain = createSprite(200,0,3,random(10,25));
    rain.shapeColor = "grey";
    rain.velocityY = random(3,10);
  }
  if(frameCount%15===0){
    rain2 = createSprite(100,0,3,random(10,25));
    rain2.shapeColor = "red";
    rain2.velocityY = random(3,10);
  }
  if(frameCount%20===0){
    rain3 = createSprite(300,0,3,random(10,25));
    rain3.shapeColor = "white";
    rain3.velocityY = random(3,10);
  }
  if(frameCount%25===0){
    rain4 = createSprite(390,0,3,random(10,25));
    rain4.shapeColor = "green";
    rain4.velocityY = random(3,10);
  }
  if(frameCount%30===0){
    rain5 = createSprite(150,0,3,random(10,25));
    rain5.shapeColor = "orange";
    rain5.velocityY = random(3,10);
  }
  if(frameCount%30===0){
    rain6 = createSprite(10,0,3,random(10,25));
    rain6.shapeColor = "purple";
    rain6.velocityY = random(3,10);
  }
  drawSprites();
}

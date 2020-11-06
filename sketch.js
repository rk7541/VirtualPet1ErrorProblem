
var dog, happyDog, database, foodS, foodStock
var dogHungry, dogHappy;

function preload()
{
  dogHungry = loadImage("image/dogImg.png")
  dogHappy = loadImage("image/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(100,100,50,50);
  dog.addImage(dogHungry);
}


function draw() {  

  drawSprites();
}




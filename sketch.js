//Create variables here

var database ;
var foodstock;
var foodcount;
var dog , dogimg1,dogimg2;

function preload()
{
  //load images here
  dogimg1 = loadImage("/images/dogimg.png")
  dogimg2 = loadImage("/images/dogimg1.png")
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  foodstock = database.ref('food');
  foodstock.on("value",readstock);

  dog = createSprite(400,350,50,50);
  dog.addImage(dogimg1);
  dog.scale = 0.2
 
  
  


 



}


function draw() {  
  background("blue")

  fill("black")
  textSize(20)
  text("Food Remaining:"+foodcount,400,100);
  text("PRESS UP ARROW TO FEED DOG",400,50);

  drawSprites();
  //add styles here
 
  if(keyWentDown(UP_ARROW)){
    writestock(foodcount)
    dog.addImage(dogimg2);
  }  

  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogimg1);

  }


}
function readstock(data){
  foodcount = data.val()
  console.log(foodcount);


}

function writestock (count){
  if(count<0 ){
    count = 0
  }else{

count = count - 1
database.ref('/').set({food:count})
  }

}


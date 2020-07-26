var scr1,scr2,scr3,scr4,scr5,scr6,scr7,scr8,scr9,scr10,scr1,scr11,scr12,scr13,scr14,scr15,scr16,scr17,scr18,scr19,scr20,scr21,scr22,scr23,scr24,scr25,scr26,scr27,scr28,scrAR;
var path1;
var gameState = 0;

var t1 = 60;



function preload(){
  scr1 =loadImage("ASSETS/1.png");
  scr2 =loadImage("ASSETS/emergency.png");
  scr3 =loadImage("ASSETS/3.png");
  scr4 =loadImage("ASSETS/4.png");
  scr5 =loadImage("ASSETS/5.png");
  scr6 =loadImage("ASSETS/6.png");
  scr7 =loadImage("ASSETS/7.png");
  scr8 =loadImage("ASSETS/8.png");
  scr9 =loadImage("ASSETS/9.png");
  scr10 =loadImage("ASSETS/10.png");
  scr11 =loadImage("ASSETS/11.png");
  scr12 =loadImage("ASSETS/12.png");
  scr13 =loadImage("ASSETS/13.png");
  scr14=loadImage("ASSETS/14.png");
  scr15=loadImage("ASSETS/15.png");
  scr16=loadImage("ASSETS/16.png");
  scr17=loadImage("ASSETS/17.png");
  scr18=loadImage("ASSETS/18.png");
  scr19=loadImage("ASSETS/19.png");
  scr20 =loadImage("ASSETS/20.png");
  scr21 =loadImage("ASSETS/21.png");
  scr22 =loadImage("ASSETS/22.png");
  scr23 =loadImage("ASSETS/23.png");
  scr24 =loadImage("ASSETS/24.png");
  scr25 =loadImage("ASSETS/25.png");
  scr26 =loadImage("ASSETS/26.png");
  scr27 =loadImage("ASSETS/27.png");
  scr28=loadImage("ASSETS/28.png");
  scrAR =loadImage("ASSETS/AR.png");
  path1 = loadImage("ASSETS/Path 13.png");

}

function setup(){
  createCanvas(375,812);

}

/*function timer(){
  var timerinSec = 50;
  timerinSec = timerinSec-1;
  console.log(timerinSec+"WORKING");
  if (timerinSec === 0){
  return true;
  }
  else{
    return false;
  }
  }
  */

function draw(){
 t1 = t1-1;
if (t1 === 0){  
  var emergencyScreen = image(path1,45,160);
  background(scr2); 
  gameState =1;

}
else if ( gameState === 0){
  background(scr1);
}


if (gameState === 1 ){
  
  if (keyDown("E") && gameState !== 3){
      background(scr17);
     gameState=2;
    }
    else if (keyDown("N") && gameState!==2){      
      
     if (keyDown("Z")){
      background(scr3);
     } 
     else {
      background(scrAR);
      gameState=3; 

     }

      
    }
}





}





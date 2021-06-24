const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12

var bg ;
var read;

function preload() {
   getBackgroundImg()
   s1 = loadImage('sunrise1.png')
   s2 = loadImage('sunrise2.png')
   s3 = loadImage('sunrise3.png')
   s4 = loadImage('sunrise4.png')
   s5 = loadImage('sunrise5.png')
   s6 = loadImage('sunrise6.png')
   s7 = loadImage('sunset7.png')
   s8 = loadImage('sunset8.png')
   s9 = loadImage('sunset9.png')
   s10 = loadImage('sunset10.png')
   s11 = loadImage('sunset11.png')
   s12 = loadImage('sunset12.png')
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    if (backgroundImg){
        background(backgroundImg)
        textSize(40)
        text(read,600,350)
    }
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var time = await fetch('http://worldclockapi.com/api/json/cst/now');
    //change the data in JSON format
    var hour = await time.json()
    var print = hour.currentDateTime.slice(11,13);
    console.log(print)
    // write code slice the datetime
    read = print

    // add conditions to change the background images from sunrise to sunset
    if (print == 4 || print === 5){
        backgroundImg = s1
    }
    else if(print == 6 || print == 7){
        backgroundImg = s2
    }
    else if(print == 8 || print == 9){
        backgroundImg = s3
    }
    else if(print == 10 || print == 11){
        backgroundImg = s4
    }
    else if(print == 12 || print == 13){
        backgroundImg = s5
    }
    else if(print == 14 || print == 15){
        backgroundImg = s6
    }
    else if(print == 16 || print == 17){
        backgroundImg = s8
    }
    else if(print == 18){
        backgroundImg = s9
    }
    else if(print == 19 || print == 20){
        backgroundImg = s10
    }
    else if(print == 21 || print == 22){
        backgroundImg = s11
    }
    else if(print >= 0 && print <= 4){
        backgroundImg = s12
    }
 

    //load the image in backgroundImg variable here

}

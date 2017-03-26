var x=0;
var speed = 8;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(247,239,7);
    
    //i wrote this so background changes to red
    if(mouseIsPressed){
        background(255, 110, 0);
    }
    
    //makes outline white, 6px thick, no color inside shapes
    stroke(255);
    strokeWeight(6);
    
    if(mouseY<150){
        fill(255,0,0);
    }
    else{
        noFill();
    }
    
    
    //a circle
    ellipse(x,200,100,100);
    
    //this code is going to get the circle to move on its own
    if(x>width || x <0){
        console.log("CIRCLE IS OFF THE SCREEN")
        speed = speed * -1;
    }
    
    x = x + speed;
    console.log(x);
}








let x = 0; 
let y = 300;
let size = 85;
let speed = 5;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    for (let i =50; i>1; i--) {
        ellipse(random(width), random(height), random(3,5));
    }
}

function draw(){
    noStroke();
    drawMoon();

}

function drawMoon() {
    //Moon
    fill(80);
    ellipse(width/2, 5.5*height/2, width*2);
    //Crater
    fill(0, 53);
    ellipse(width/4, 3.8*height/3, width/1.5);
    //Crater
    fill(0, 30);
    ellipse(6*width/7, 3*height/3, width/3.5);
    //Crater
    fill(0, 30);
    ellipse(4.5*width/7, 2.1*height/3, width/5, height/3);

}

let x = 0; 
let y = 300;
let size = 85;
let speed = 5;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(10);

    for (let i =50; i>1; i--) {
        ellipse(random(width), random(height), random(3,5));
    }
}

function draw(){
    stroke("none");

}


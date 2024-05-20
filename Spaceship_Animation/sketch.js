let x = 0; 
let y = 300;
let size = 85;
let speed = 5;

function setup() {
    createCanvas(windowWidth, windowHeight);
    
}

function draw(){
    background(0);
    drawBigStars();
}

function drawBigStars() { 
    let gap = 20;
    let xDim = 5;
    let yDim = 7;

    fill(200);
    ellipse(width *2 / 7, height / 4, xDim, yDim);
    ellipse(width *2 / 7 + gap, height / 4 + 0.5*height / 4, xDim, yDim);

    ellipse(width *3 / 7, height *2 / 4, xDim, yDim);

    ellipse(width *4 / 7, height / 4, xDim, yDim);

    ellipse(width *6 / 7 -gap, height / 4 -gap, xDim, yDim);
    ellipse(width *5 / 7 -gap, height / 4 + gap, xDim, yDim);

}
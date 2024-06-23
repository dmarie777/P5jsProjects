let h,s,b;
let table,palette;

function preload() {
    table = loadTable('colors.csv','csv', 'header');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100);
    palette = 0;
    getColors(palette, floor(random(3,8)));
    cX =5;
    cY = 5;
    ballSize = 50;
    distX=ballSize/2;
    distY=floor(random(ballSize/2, height));
}

function draw() {
    noStroke();
    drawTable();
    fill(h,s,b);

    circle(distX, distY, ballSize );
    distX +=cX;
    distY +=cY;

    if (distX > width - ballSize/2 || distX<ballSize/2 ) {
        cX *= -1;
    }  
    if (distY > height - ballSize/2 || distY<ballSize/2) {
        cY *= -1;
    }
}

function getColors(palette, col) {
    h = int(table.get(palette, col*3));
    s = int(table.get(palette, col*3+1));
    b = int(table.get(palette, col*3+2));
}

function drawTable() {
    background(int(table.get(0, 0)),int(table.get(0, 1)),int(table.get(0, 2)));
    noFill();
    stroke('white');
    strokeWeight(5);
    rect(5,5,windowWidth-10, windowHeight-10);
    strokeWeight(2);
    line(5, (windowHeight-10)/2, windowWidth-10, (windowHeight-10)/2);
}
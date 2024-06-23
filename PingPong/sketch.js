let h,s,b;
let table,palette;

function preload() {
    table = loadTable('colors.csv','csv', 'header');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100);
    palette = 0;
    drawTable();
    getColors(palette, floor(random(3,8)));
}

function draw() {
    noStroke();
    fill(h,s,b)
    circle(windowWidth/2, windowHeight/2, 50 );
}
function getColors(palette, col) {
    h = int(table.get(palette, col*3));
    s = int(table.get(palette, col*3+1));
    b = int(table.get(palette, col*3+2));
}

function drawTable() {
    getColors(0,0);
    background(h,s,b);
    fill(0);
    stroke('white');
    strokeWeight(5);
    rect(5,5,windowWidth-10, windowHeight-10);
    strokeWeight(2);
    line(5, (windowHeight-10)/2, windowWidth-10, (windowHeight-10)/2);
}
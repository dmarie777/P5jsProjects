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
    c =3 ;
    dist=0;
}

function draw() {
    noStroke();
    drawTable();
    fill(h,s,b);
    circle(dist, windowHeight/2, 50 );
    dist +=c;

    if (dist > width || dist<0) {
        c *= -1;
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
function preload() {
    table = loadTable("colors.csv", "csv", "header");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(150);
    colorMode(HSB, 360, 100, 100);
    palette = floor(random(5));
    getColor(floor(random(5)));
    fill(h, s, b);
    stroke(h, s, b)
    rad = 5;
}


function draw() {
    circle(mouseX, mouseY, rad);
}


function getColor(col1) {

    h = int(table.get(palette, col1 * 3));
    s = int(table.get(palette, col1 * 3 + 1));
    b = int(table.get(palette, col1 * 3 +2));
}
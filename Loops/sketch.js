function preload() {
    table = loadTable("colors.csv", "csv", "header");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(221);
    colorMode(HSB, 360, 100, 100);
    palette = 0;
    frame = 100;
    numAcross = 50;
    sizeX = (width-frame*2)/numAcross;
    sizeY = (height-frame*2)/numAcross;

    for (let x = frame+sizeX/2; x < ceil(width-frame-sizeX/2); x+=sizeX) {
        for (let y = frame+sizeY/2; y < ceil(height-frame-sizeY/2); y+=sizeY) {
            getColor(floor(random(7)));
            stroke("none");
            fill(h, s, b);
            ellipse(x, y, random(sizeX, sizeX+100), sizeY*0.9);
        }
    }
}

function getColor(col1) {
    h = int(table.get(palette, col1 *3));
    s = int(table.get(palette, col1 *3 + 1));
    b = int(table.get(palette, col1 *3 + 2));
}
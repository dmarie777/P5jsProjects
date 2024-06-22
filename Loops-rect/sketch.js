let h,s,l, palette;

function preload() {
    table = loadTable("colors.csv", "csv", "header"); 
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, 360, 100, 100);
    noFill();
    palette = 0;

    let sizeRect = 50;
    for (let x =0; x<width; x++) {
        for (let y=0; y< height; y+=sizeRect) {
            getColor(palette, floor(random(5)));
            stroke(h,s,b);
            rect(random(width), random(height), sizeRect);
        } 
    }
}

function getColor(palette, col) {
    h=int(table.get(palette, col*3));
    s=int(table.get(palette, col*3+1));
    b=int(table.get(palette, col*3+2));
}
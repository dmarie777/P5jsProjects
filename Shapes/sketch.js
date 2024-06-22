let h,s,b;
let tale, palette;

function preload() {
    table = loadTable('colors.csv', 'csv', 'header');
}

function setup() {
    createCanvas(windowWidth, windowHeight)
    colorMode(HSB, 360, 100, 100);
    palette = 0;
    let size=50;
    for (let x = 0; x<width; x+=size) {
        for(let y=0; y<height; y+=size) {
            getColors(palette, floor(random(8)));
            stroke(h,s,b);
            noFill();
            let options = random(3);
            if (options < 1) {
                rectMode(CENTER)
                rect(x,y, random(size, size*2.5));
            } else if (options < 2) {
                circle(x,y,random(size/2,size*2))
            } else {
                triangle(x, y-size/2, x-size/2, y+size/2, x+size/2, y+size/2 )
            }
        } 
    }
}

function getColors(palette, col) {
    h = int(table.get(palette, col*3));
    s = int(table.get(palette, col*3+1));
    b = int(table.get(palette, col*3+2));
}